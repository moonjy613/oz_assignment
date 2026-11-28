
// ========================================
// 1. HTML 요소 선택
// ========================================

const tbody = document.querySelector("tbody");
const searchInput = document.querySelector("#searchInput");
const allBtn = document.querySelector("#allBtn");
const favoriteBtn = document.querySelector("#favoriteBtn");
const apiStatus = document.querySelector("#apiStatus");


// ========================================
// 2. 초기 변수 설정
// ========================================

// Binance 공개 API 주소
const API_URL =
    "https://api4.binance.com/api/v3/ticker/24hr";

// 최신 암호화폐 데이터를 저장할 배열
let allCoins = [];

// 관심항목 배열
let favorites = [];

// 초기 화면은 전체보기
let currentTab = "all";

// API 요청 진행 여부
let isLoading = false;

// 자동 업데이트 타이머
let timer;

// API 요청 중단 여부
let isPaused = false;


// ========================================
// 3. LocalStorage 데이터 불러오기
// ========================================

try {

    let savedFavorites = JSON.parse(
        localStorage.getItem("favorites")
    );

    if (Array.isArray(savedFavorites)) {

        favorites = savedFavorites.filter(
            item => typeof item === "string"
        );
    }

} catch (error) {

    console.error("LocalStorage error:", error);

    favorites = [];
}


// ========================================
// 4. API 연결 상태 표시 함수
// ========================================

function updateStatus(message, statusClass) {

    apiStatus.textContent = message;

    // 기존 상태 클래스 제거
    apiStatus.classList.remove(
        "connected",
        "error",
        "warning"
    );

    // 새로운 상태 클래스 적용
    apiStatus.classList.add(statusClass);
}


// ========================================
// 5. API 자동 요청 중단 함수
// ========================================

function stopUpdates(message) {

    isPaused = true;

    // setInterval 반복 실행 중단
    clearInterval(timer);

    updateStatus(message, "warning");
}


// ========================================
// 6. API 데이터 불러오기
// ========================================

function loadCoins() {

    // 이전 요청이 진행 중이거나
    // API 요청이 중단된 상태라면 실행하지 않음
    if (isLoading || isPaused) {

        return;
    }

    // API 요청 시작
    isLoading = true;

    fetch(API_URL)

        .then(response => {

            // API 요청 한도 초과 또는 IP 제한
            if (response.status === 429 ||
                response.status === 418) {

                stopUpdates(
                    "API limit reached. Updates paused."
                );

                throw new Error(
                    "API rate limit: " + response.status
                );
            }

            // 그 외 HTTP 오류
            if (!response.ok) {

                throw new Error(
                    "HTTP error: " + response.status
                );
            }

            // 정상 응답을 JSON으로 변환
            return response.json();
        })

        .then(coins => {

            // API 응답이 배열인지 확인
            if (!Array.isArray(coins)) {

                throw new Error(
                    "Invalid API response"
                );
            }

            // 기존 데이터 대신 최신 데이터 저장
            allCoins = coins;

            // 화면 렌더링
            renderCoins();

            // API 연결 상태 표시
            updateStatus(
                "● Connected · 1s Refresh",
                "connected"
            );
        })

        // API 또는 네트워크 오류 처리
        .catch(error => {

            console.error("API error:", error);

            // 요청 제한 메시지가 덮어쓰이지 않도록 확인
            if (!isPaused) {

                stopUpdates(
                    "Connection error. Updates paused."
                );

                updateStatus(
                    "Connection error. Updates paused.",
                    "error"
                );
            }
        })

        // 성공 또는 실패 여부와 관계없이 실행
        .finally(() => {

            isLoading = false;
        });
}


// ========================================
// 7. 화면 렌더링 함수
// ========================================

function renderCoins() {

    // 검색어를 대문자로 변환
    let keyword = searchInput.value.trim().toUpperCase();

    // 필터링된 데이터를 저장할 배열
    let usdtCoins = [];


    // ------------------------------------
    // 7-1. 데이터 필터링
    // ------------------------------------

    for (const coin of allCoins) {

        // USDT 거래쌍 및 검색어 확인
        if (coin["symbol"].endsWith("USDT") &&
            coin["symbol"].includes(keyword)) {

            // 전체보기 탭
            if (currentTab === "all") {

                usdtCoins.push(coin);

            // 관심항목 탭
            } else if (
                currentTab === "favorites" &&
                favorites.includes(coin["symbol"])
            ) {

                usdtCoins.push(coin);
            }
        }
    }


    // ------------------------------------
    // 7-2. 기존 테이블 초기화
    // ------------------------------------

    tbody.innerHTML = "";


    // ------------------------------------
    // 7-3. 검색 결과가 없는 경우
    // ------------------------------------

    if (usdtCoins.length === 0) {

        const tr = document.createElement("tr");
        const td = document.createElement("td");

        // 6개의 열을 하나로 합치기
        td.colSpan = 6;

        td.classList.add("empty-message");

        if (allCoins.length === 0) {

            td.textContent = "No market data available.";

        } else if (
            currentTab === "favorites" &&
            favorites.length === 0
        ) {

            td.textContent = "Your watchlist is empty.";

        } else {

            td.textContent = "No matching cryptocurrencies.";
        }

        tr.appendChild(td);
        tbody.appendChild(tr);

        return;
    }


    // ------------------------------------
    // 7-4. 테이블 데이터 생성
    // ------------------------------------

    for (const coin of usdtCoins) {

        const tr = document.createElement("tr");


        // 관심항목
        const favorite = document.createElement("td");

        // 클릭 가능한 별표 버튼 생성
        const star = document.createElement("button");

        star.type = "button";

        star.classList.add("favorite-star");


        // 관심항목 등록 여부 확인
        if (favorites.includes(coin["symbol"])) {

            star.textContent = "★";
            star.classList.add("selected");

            star.setAttribute(
                "aria-label",
                "Remove " + coin["symbol"] + " from watchlist"
            );

        } else {

            star.textContent = "☆";

            star.setAttribute(
                "aria-label",
                "Add " + coin["symbol"] + " to watchlist"
            );
        }


        // 별표 클릭 이벤트
        star.addEventListener("click", () => {

            if (favorites.includes(coin["symbol"])) {

                // 관심항목 삭제
                let index = favorites.indexOf(
                    coin["symbol"]
                );

                favorites.splice(index, 1);

            } else {

                // 관심항목 추가
                favorites.push(coin["symbol"]);
            }


            // LocalStorage에 관심항목 저장
            try {

                localStorage.setItem(
                    "favorites",
                    JSON.stringify(favorites)
                );

            } catch (error) {

                console.error(
                    "Failed to save watchlist:",
                    error
                );
            }

            // API 재호출 없이 화면만 업데이트
            renderCoins();
        });

        favorite.appendChild(star);


        // 심볼
        const symbol = document.createElement("td");

        symbol.textContent = coin["symbol"];


        // 현재가
        const price = document.createElement("td");

        price.textContent = coin["lastPrice"];


        // 24시간 변동률
        const change = document.createElement("td");

        change.textContent =
            coin["priceChangePercent"] + "%";


        // 가격 변동률에 따라 색상 구분
        if (Number(coin["priceChangePercent"]) > 0) {

            change.classList.add("positive");

        } else if (
            Number(coin["priceChangePercent"]) < 0
        ) {

            change.classList.add("negative");

        } else {

            change.classList.add("neutral");
        }


        // 24시간 최고가
        const high = document.createElement("td");

        high.textContent = coin["highPrice"];


        // 24시간 최저가
        const low = document.createElement("td");

        low.textContent = coin["lowPrice"];


        // 6개의 td를 tr에 추가
        tr.appendChild(favorite);
        tr.appendChild(symbol);
        tr.appendChild(price);
        tr.appendChild(change);
        tr.appendChild(high);
        tr.appendChild(low);


        // 완성된 행을 테이블에 추가
        tbody.appendChild(tr);
    }
}


// ========================================
// 8. 검색창 이벤트
// ========================================

searchInput.addEventListener("input", () => {

    // API 호출 없이 기존 데이터 활용
    renderCoins();
});


// ========================================
// 9. 전체보기 버튼 이벤트
// ========================================

allBtn.addEventListener("click", () => {

    currentTab = "all";

    allBtn.classList.add("active");
    favoriteBtn.classList.remove("active");

    // API 호출 없이 화면 업데이트
    renderCoins();
});


// ========================================
// 10. 관심항목 버튼 이벤트
// ========================================

favoriteBtn.addEventListener("click", () => {

    currentTab = "favorites";

    favoriteBtn.classList.add("active");
    allBtn.classList.remove("active");

    // API 호출 없이 화면 업데이트
    renderCoins();
});


// ========================================
// 11. 초기 실행 및 자동 업데이트
// ========================================

// 초기 버튼 활성화
allBtn.classList.add("active");

// 초기 데이터 요청
loadCoins();

// 1초마다 API 데이터 업데이트
timer = setInterval(loadCoins, 1000);
