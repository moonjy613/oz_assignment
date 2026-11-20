# HTML/CSS 2일차 학습노트

**학습일:** 2026.11.20  
**학습 주제:** HTML Form 복습, Semantic HTML, CSS 기초, 선택자, Box Model, CSS 적용 방식

---

## 1. HTTP 기초 복습 및 HTML Form

### HTTP 요청의 필수 요소

HTTP 요청을 이해할 때 가장 기본이 되는 두 요소는 **Method와 URL**이다.

| 구분 | 의미 | 예시 |
|---|---|---|
| Method | 어떤 동작을 수행할 것인지 | GET, POST |
| URL | 어떤 자원(Resource)을 대상으로 하는지 | `/search`, `/signup` |

전날에는 GET 요청을 활용한 Google 검색 Form을 실습했고, 오늘은 Form과 관련된 HTML 태그를 이어서 학습했다.

### `<label>`과 `<input>` 연결

`<label>`은 입력 요소에 설명을 붙이는 태그다.

```html
<label for="username">이름</label>
<input type="text" id="username">
```

- `input`의 `id`에 식별자를 지정한다.
- `label`의 `for`에 동일한 식별자를 입력한다.
- 두 요소가 연결되어 라벨을 클릭해도 입력창에 포커스가 이동한다.

**왜 연결할까?**

사용자가 입력창뿐 아니라 라벨을 클릭해도 해당 입력창을 선택할 수 있어 편리하다. 또한 스크린 리더 등 보조 기술이 입력 요소의 의미를 이해하는 데 도움이 된다.

**핵심:** `for`와 `id`는 같은 값을 사용해야 한다.

---

## 2. Semantic HTML

### Semantic HTML이란?

Semantic은 '의미론적인'이라는 뜻이다.

HTML 태그를 단순히 화면에 무언가 표시하는 수단으로 사용하는 것이 아니라, **태그 자체가 가진 의미에 맞게 사용하는 것**을 의미한다.

수업에서는 `<div>`와 `<h1>`을 비교했다.

```html
<div>자기소개</div>
<h1>자기소개</h1>
```

CSS를 이용하면 `<div>`도 `<h1>`처럼 크게 보이도록 만들 수 있다.

하지만 두 태그는 의미가 다르다.

- `<div>`: 특별한 의미가 없는 범용 컨테이너
- `<h1>`: 문서의 최상위 제목을 나타내는 태그

### 왜 Semantic HTML을 사용해야 할까?

CSS로 디자인을 자유롭게 변경할 수 있기 때문에 모든 요소를 `<div>`로 작성하고 싶어질 수 있다.

그러나 그렇게 하면 HTML 코드만 보았을 때 각 요소가 어떤 역할을 하는지 알기 어려워진다.

따라서 제목은 `<h1>`, 주요 콘텐츠는 `<main>`, 페이지 상단 영역은 `<header>`, 하단 영역은 `<footer>`처럼 의미에 맞는 태그를 사용하는 것이 좋다.

**오늘의 이해:** HTML은 구조와 의미를 정의하고, CSS는 그 구조를 어떻게 보여줄지 결정한다.

---

## 3. CSS 기초

### CSS란?

CSS는 **Cascading Style Sheets**의 약자다.

HTML 요소의 모양과 배치를 지정하는 스타일시트 언어다.

주요 기능은 다음과 같다.

- 글자 색상, 크기, 폰트 지정
- 여백, 정렬, 위치 조정
- Flexbox, Grid 등을 이용한 레이아웃 구성
- 화면 크기에 따라 레이아웃이 달라지는 반응형 디자인

### Cascading의 의미

Cascading은 폭포처럼 위에서 아래로 흐르는 모습을 연상시키는 개념이다.

CSS에서는 여러 스타일 규칙이 하나의 요소에 적용될 때 어떤 규칙이 최종적으로 적용될지를 결정한다.

수업에서는 HTML 요소의 부모-자식 관계를 통해 스타일 상속을 이해했다.

```html
<div style="text-align: center;">
    <header>moonjy</header>
    <main>백엔드 개발자</main>
    <footer>Copyright © moonjy</footer>
</div>
```

부모인 `<div>`에 `text-align: center`를 지정하면 내부 요소의 텍스트도 가운데 정렬된다.

단, 모든 CSS 속성이 자동으로 상속되는 것은 아니다. `color`, `font-size`, `text-align`처럼 상속되는 속성이 있는 반면 `margin`, `padding`, `border` 등은 일반적으로 상속되지 않는다.

---

## 4. CSS 실습 환경 구성

기존 `OzWeb` 폴더에 CSS 실습용 폴더를 생성했다.

```bash
cd ~/Documents/OzWeb
mkdir css
cd css
code .
```

이후 VS Code에서 HTML 파일을 작성하고 Live Preview를 이용해 화면의 변화를 확인했다.

실습 파일은 다음과 같다.

```text
OzWeb/
└── css/
    ├── resume.html
    ├── box.html
    └── style.css
```

---

## 5. CSS 문법과 선언 구조

HTML 태그에 직접 스타일을 지정하면서 CSS 문법을 학습했다.

```html
<header style="font-size: x-large; font-weight: bold;">
    문지윤
</header>
```

여기에는 두 가지 문법 구조가 포함된다.

**HTML 속성(Attribute)**

```html
style="..."
```

**CSS 선언(Declaration)**

```css
font-size: x-large;
font-weight: bold;
```

CSS 선언은 다음과 같은 구조를 가진다.

```css
property: value;
```

| 구분 | 예시 | 의미 |
|---|---|---|
| Property | `font-size` | 변경하려는 스타일 속성 |
| Value | `x-large` | 해당 속성에 지정하는 값 |
| 선언 구분 | `;` | 각 CSS 선언의 끝 |

여러 CSS 속성을 적용하려면 세미콜론으로 구분한다.

---

## 6. CSS를 적용하는 세 가지 방식

### 6.1 Inline CSS

HTML 태그에 `style` 속성을 직접 작성하는 방식이다.

```html
<header style="font-size: x-large; font-weight: bold;">
    문지윤
</header>
```

**장점:** 특정 요소에 스타일을 빠르게 적용할 수 있다.

**단점:** HTML과 CSS가 섞여 코드가 길어지고, 여러 요소에 같은 스타일을 반복 작성해야 할 수 있다.

### 6.2 Internal CSS

HTML 문서의 `<head>` 안에 `<style>` 태그를 작성하는 방식이다.

```html
<head>
    <style>
        header {
            font-size: x-large;
            font-weight: bold;
        }

        footer {
            font-size: x-small;
        }
    </style>
</head>
```

Inline CSS와 달리 스타일 정의를 한곳에 모아 관리할 수 있다.

이번 실습에서는 `resume.html`의 `<header>`, `<main>`, `<footer>`에 각각 스타일을 지정했다.

### 6.3 External CSS

CSS를 별도 `.css` 파일로 작성한 뒤 HTML에서 연결하는 방식이다.

**resume.html**

```html
<head>
    <link rel="stylesheet" href="./style.css">
</head>
```

**style.css**

```css
header {
    font-size: x-large;
    font-weight: bold;
}

#contents {
    text-align: center;
}
```

`<link>` 태그의 주요 속성은 다음과 같다.

- `rel="stylesheet"`: 연결할 리소스가 스타일시트임을 의미
- `href="./style.css"`: 연결할 CSS 파일의 경로
- `./`: 현재 HTML 파일이 위치한 폴더를 기준으로 하는 상대 경로

### 세 가지 방식 비교

| 구분 | 작성 위치 | 특징 |
|---|---|---|
| Inline | HTML 태그의 `style` 속성 | 특정 요소에 직접 적용 |
| Internal | HTML의 `<style>` 태그 | 하나의 HTML 문서에서 스타일 관리 |
| External | 별도 `.css` 파일 | 여러 HTML 파일에서 재사용 가능 |

**핵심:** External CSS를 활용하면 HTML 구조와 디자인을 분리하여 유지보수하기 편리하다.

---

## 7. CSS 선택자(Selector)

선택자는 **어떤 HTML 요소에 CSS 스타일을 적용할 것인지 지정하는 문법**이다.

### 7.1 태그 선택자

태그 이름을 직접 사용한다.

```css
header {
    font-size: x-large;
}
```

문서에 있는 모든 `<header>` 요소에 적용된다.

### 7.2 클래스 선택자

클래스 이름 앞에 점(`.`)을 붙인다.

```html
<header class="red">moonjy</header>
<footer class="red">Copyright © moonjy</footer>
```

```css
.red {
    color: red;
}
```

같은 클래스를 가진 여러 요소에 동일한 스타일을 적용할 수 있다.

### 7.3 ID 선택자

ID 이름 앞에 `#`을 붙인다.

```html
<div id="contents">
    <header>문지윤</header>
</div>
```

```css
#contents {
    text-align: center;
}
```

ID는 문서 안에서 특정 요소를 고유하게 식별하는 데 사용한다.

### 7.4 전체 선택자

```css
* {
    margin: 0;
}
```

모든 HTML 요소를 선택한다.

### 7.5 속성 선택자와 가상 클래스

수업에서 소개된 추가 선택자 유형이다.

```css
input[type="text"] {
    background-color: lightyellow;
}
```

특정 속성값을 가진 요소를 선택한다.

```css
a:hover {
    color: red;
}
```

마우스를 올린 상태의 링크를 선택한다.

### 선택자 정리

| 선택자 | 예시 | 의미 |
|---|---|---|
| 태그 | `div` | 해당 태그 전체 |
| 클래스 | `.red` | 해당 클래스를 가진 요소 |
| ID | `#contents` | 해당 ID를 가진 요소 |
| 전체 | `*` | 모든 요소 |
| 속성 | `[type="text"]` | 특정 속성값을 가진 요소 |
| 가상 클래스 | `:hover` | 특정 상태의 요소 |

### 선택자 우선순위

수업에서는 다음 순서로 CSS 우선순위를 학습했다.

`!important` → Inline Style → ID → Class/속성/가상 클래스 → 태그 → 전체 선택자

일반적인 선택자 우선순위는 다음과 같이 기억할 수 있다.

**ID > Class > Tag**

같은 우선순위의 규칙이 충돌하면 일반적으로 나중에 선언된 규칙이 적용된다.

단, `!important`는 일반 선언보다 우선하며, 실제 CSS 우선순위에는 출처와 cascade layer 등의 규칙도 영향을 준다.

### CSS Diner 실습

CSS 선택자를 연습하는 게임 형태의 학습 도구를 살펴보았다.

화면에 있는 HTML 구조를 보고 조건에 맞는 요소를 선택하는 CSS 선택자를 입력하는 방식이다.

예를 들어 다음 구조에서 접시 위의 사과를 선택한다면:

```html
<div class="table">
    <bento></bento>
    <plate>
        <apple></apple>
    </plate>
    <apple></apple>
</div>
```

다음과 같이 작성할 수 있다.

```css
plate apple
```

이는 `<plate>` 내부에 있는 `<apple>` 요소를 선택한다는 의미다.

---

## 8. CSS Box Model

### Box Model이란?

모든 HTML 요소를 사각형 박스로 보고 크기와 여백을 계산하는 개념이다.

Box Model은 네 가지 영역으로 구성된다.

| 영역 | 의미 |
|---|---|
| Content | 텍스트나 이미지 등 실제 콘텐츠 |
| Padding | 콘텐츠와 테두리 사이의 내부 여백 |
| Border | 요소의 테두리 |
| Margin | 요소 바깥쪽의 외부 여백 |

안쪽부터 바깥쪽 순서는 다음과 같다.

**Content → Padding → Border → Margin**

### 8.1 Background Color

`box.html` 파일에서 박스에 배경색을 지정했다.

```html
<div id="box">BOX</div>
```

```css
#box {
    background-color: orange;
}
```

`div`는 기본적으로 블록 요소이므로 사용 가능한 가로 공간을 채우는 형태로 표시된다.

### 8.2 Border

```css
#box {
    background-color: orange;
    border: 1px solid black;
}
```

`border`는 다음 세 가지 값을 지정한다.

- `1px`: 테두리 두께
- `solid`: 실선
- `black`: 테두리 색상

### 8.3 Padding

```css
#box {
    padding: 20px;
}
```

콘텐츠와 테두리 사이에 20px의 내부 여백이 생긴다.

### 8.4 Margin

```css
#box {
    margin: 20px;
}
```

박스 바깥쪽에 20px의 외부 여백을 만든다.

### 8.5 Width와 Height

```css
#box {
    width: 80px;
    height: 100px;
}
```

박스 콘텐츠 영역의 너비와 높이를 지정한다.

기본 `box-sizing: content-box`에서는 실제 박스의 크기를 계산할 때 padding과 border가 추가된다.

예를 들어:

```css
#box {
    width: 80px;
    padding: 20px;
    border: 1px solid black;
}
```

실제 테두리까지의 가로 너비는 다음과 같다.

`80px + 20px × 2 + 1px × 2 = 122px`

---

## 9. Background Clip

### `background-clip`이란?

배경색이 박스의 어느 영역까지 칠해지는지 지정하는 CSS 속성이다.

수업에서는 배경색과 padding을 조합하여 차이를 직접 확인했다.

```css
#box {
    background-color: orange;
    background-clip: content-box;
    border: 1px solid black;
    padding: 20px;
}
```

### 세 가지 주요 값

| 값 | 배경색이 칠해지는 범위 |
|---|---|
| `content-box` | 콘텐츠 영역까지만 |
| `padding-box` | 콘텐츠와 padding 영역까지 |
| `border-box` | 테두리의 바깥 경계까지 |

**핵심적으로 이해한 점**

- `padding`은 내부 여백의 크기를 결정한다.
- `background-clip`은 배경색이 칠해지는 범위를 결정한다.
- `background-clip: border-box`는 padding 크기와 관계없이 배경을 테두리 영역까지 확장한다.

단, 실제 테두리의 색상이나 모양은 `border` 속성으로 별도로 지정된다.

### 실습에서 이해하기 어려웠던 부분

처음에는 padding을 적용하면 그 영역에도 자동으로 주황색 배경이 생기는지 헷갈렸다.

하지만 `padding`과 `background-clip`은 서로 다른 역할을 한다는 것을 확인했다.

또한 부모 `<div id="out">`와 자식 `<div id="box">`를 중첩하여 각각 배경색을 다르게 지정하면서 부모-자식 요소의 영역도 시각적으로 확인했다.

---

## 10. CSS 주석을 활용한 비교 실습

CSS에서는 다음과 같이 주석을 작성한다.

```css
/* 주석 내용 */
```

주석 처리된 코드는 브라우저에 적용되지 않는다.

실습에서는 다음 속성을 하나씩 주석 처리하거나 다시 활성화했다.

```css
#box {
    font-size: xx-large;

    /* background-color: orange;
    background-clip: content-box;
    border: 1px solid black; */

    padding: 20px;
    margin: 20px;

    /* width: 80px;
    height: 100px; */
}
```

이를 통해 각 속성이 화면에 어떤 영향을 미치는지 비교했다.

특히 `width`, `height`를 제거하면 요소가 기본적인 크기 계산 방식으로 돌아가고, `padding`과 `margin`을 추가하면 요소의 내부·외부 간격이 달라지는 것을 확인했다.

**학습 방법:** 여러 CSS 속성을 한 번에 적용하기보다 하나씩 변경하면서 화면 변화를 관찰하면 각 속성의 역할을 이해하기 쉽다.

---

## 11. Resume 페이지 레이아웃 실습

`resume.html`을 활용하여 간단한 자기소개 페이지를 구성했다.

```html
<div id="contents">
    <header>문지윤</header>
    <main>백엔드 개발자</main>
    <footer>Copyright © 문지윤</footer>
</div>
```

각 영역에 다른 배경색을 적용했다.

```css
#contents {
    text-align: center;
}

header {
    font-size: x-large;
    font-weight: bold;
    background-color: orange;
}

main {
    background-color: skyblue;
    padding: 20px;
}

footer {
    font-size: x-small;
    background-color: beige;
    margin-top: 750px;
}
```

이 실습에서는 `header`, `main`, `footer`의 스타일을 각각 조정하고, 부모인 `#contents`를 통해 텍스트를 일괄적으로 가운데 정렬했다.

### Footer 배치에서 발견한 문제

처음에는 footer를 화면 하단에 놓기 위해 다음과 같이 작성했다.

```css
footer {
    margin-top: 750px;
}
```

이후 경력 영역을 새로 추가했다.

```html
<div id="contents">
    <header>문지윤</header>
    <main>백엔드 개발자</main>
    <div id="exp">경력</div>
    <footer>Copyright © 문지윤</footer>
</div>
```

```css
#exp {
    background-color: olive;
}
```

새로운 콘텐츠가 추가되자 footer가 더 아래로 밀려나는 현상을 확인했다.

### 왜 이런 문제가 발생할까?

`margin-top: 750px`은 footer를 화면 하단에 고정한다는 의미가 아니다.

**footer의 위쪽에 750px의 외부 여백을 확보한다는 의미**다.

따라서 앞쪽 콘텐츠의 높이가 증가하면 footer의 위치도 함께 아래로 이동한다.

### 실습을 통해 얻은 교훈

`margin`은 요소 사이의 간격을 조절하기 위한 속성이며, 화면의 특정 위치에 요소를 고정하기 위한 방법은 아니다.

화면 크기나 콘텐츠 길이가 변할 수 있는 실제 웹페이지에서는 고정된 큰 `margin-top` 값에 의존하는 것이 적절하지 않을 수 있다.

향후 Flexbox 등의 레이아웃 기능을 활용하면 이런 문제를 더 유연하게 해결할 수 있다.

---

## 12. External CSS 실습

기존 `resume.html`의 `<style>` 태그를 제거하고 `style.css` 파일을 새로 생성했다.

```html
<head>
    <link rel="stylesheet" href="./style.css">
</head>
```

스타일 정의를 별도 CSS 파일로 옮겨도 HTML에서 정상적으로 연결하면 동일한 디자인을 적용할 수 있다.

### External CSS의 장점

1. HTML과 CSS의 역할을 분리할 수 있다.
2. 여러 HTML 문서에서 같은 CSS 파일을 재사용할 수 있다.
3. 디자인을 수정할 때 CSS 파일만 변경하면 된다.
4. 프로젝트 규모가 커질수록 코드를 관리하기 편리하다.

---

## 13. 외부 CSS 라이브러리 활용

마지막 실습에서는 직접 작성한 CSS뿐 아니라 외부에서 제공하는 CSS 라이브러리도 사용할 수 있다는 것을 배웠다.

### CDN을 통한 CSS 연결

CDN(Content Delivery Network)을 통해 제공되는 CSS 파일의 URL을 `<link>` 태그에 작성하면 된다.

수업에서는 **Font Awesome**을 이용해 GitHub 아이콘을 표시했다.

```html
<head>
    <!-- Font Awesome CSS 라이브러리 연결 -->
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/..."
    >

    <!-- 직접 작성한 CSS 연결 -->
    <link rel="stylesheet" href="./style.css">
</head>
```

위 CDN 경로는 구조 설명을 위한 예시이며, 실제 실행 시에는 완전한 버전별 URL이 필요하다.

### GitHub 링크와 아이콘

```html
<a href="https://github.com/사용자명" id="github">
    <i class="fa-brands fa-github"></i>
    GitHub
</a>
```

- `<a>`: 클릭 가능한 링크
- `href`: 이동할 GitHub 주소
- `<i>`: Font Awesome 아이콘을 표시하기 위한 요소
- `class="fa-brands fa-github"`: GitHub 아이콘을 지정하는 클래스
- `id="github"`: 해당 링크에 개별 CSS 스타일을 적용할 때 사용할 식별자

외부 CSS 라이브러리를 이용하면 아이콘을 직접 제작하지 않아도 기존에 만들어진 디자인 요소를 활용할 수 있다.

또한 하나의 HTML 문서에 여러 CSS 파일을 연결할 수 있다는 것도 확인했다.

---

## 14. 오늘의 핵심 개념 요약

| 개념 | 핵심 내용 |
|---|---|
| HTTP | Method와 URL을 통해 요청의 동작과 대상을 지정 |
| Label | `for`와 `id`로 입력 요소를 연결 |
| Semantic HTML | 태그의 의미에 맞게 HTML 구조 작성 |
| CSS | HTML 요소의 디자인과 배치를 지정 |
| Cascading | 여러 CSS 규칙의 최종 적용 결과를 결정 |
| Inline CSS | 태그에 직접 스타일 작성 |
| Internal CSS | `<style>` 태그에 스타일 작성 |
| External CSS | 별도 `.css` 파일 연결 |
| Selector | 스타일을 적용할 HTML 요소 선택 |
| Specificity | 충돌하는 CSS 규칙의 우선순위 판단 |
| Box Model | Content, Padding, Border, Margin |
| Background Clip | 배경색이 적용되는 범위 지정 |
| Margin | 요소 바깥쪽의 간격 조절 |
| Padding | 콘텐츠와 테두리 사이의 간격 조절 |
| CDN | 인터넷을 통해 외부 CSS 라이브러리 제공 |
| Font Awesome | 미리 만들어진 아이콘 활용 |

---

## 15. 오늘의 학습 소감

오늘은 HTML에서 CSS로 넘어가면서 웹페이지의 구조와 디자인이 어떻게 구분되는지 이해할 수 있었다.

특히 처음에는 CSS의 Cascading 개념과 Box Model이 헷갈렸지만, 실제로 `div`를 중첩하고 `padding`, `margin`, `background-clip` 등의 값을 변경하면서 각각의 역할을 조금씩 이해하게 되었다.

기억에 남는 실습은 **footer를 화면 하단에 배치하기 위해 `margin-top`을 크게 설정했다가, 중간에 새로운 콘텐츠가 추가되면서 레이아웃이 밀려나는 현상**을 확인한 것이다.

단순히 CSS 속성을 외우는 것뿐 아니라, 특정 구현 방식이 왜 적절하지 않을 수 있는지 직접 확인할 수 있었다.

또한 Inline, Internal, External CSS를 순서대로 실습하면서 HTML과 CSS를 분리하는 이유를 이해했고, 외부 라이브러리를 이용해 GitHub 아이콘을 추가하는 방법도 배웠다.

앞으로 웹서비스를 개발하거나 AI를 활용한 바이브 코딩을 할 때도 CSS의 속성과 레이아웃 개념을 이해하고 있다면, 원하는 화면을 더 구체적으로 설명하고 구현 결과를 검토하는 데 도움이 될 것 같다.

---

**학습 키워드:** `HTML` `CSS` `Semantic HTML` `Form` `Selector` `Specificity` `Box Model` `Padding` `Margin` `Background Clip` `External CSS` `CDN` `Font Awesome`
