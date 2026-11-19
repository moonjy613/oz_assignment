
# HTML/CSS 01일차 - HTML 기초

- 학습일: 2026.11.19
- 학습 환경: macOS, VS Code, Chrome, Git/GitHub
- 학습 주제: Git Clone/Fork, HTML 구조 및 기본 태그, Form과 HTTP GET

---

## 1. Git & GitHub 복습

### 1.1 Git Clone

- `git clone`: 원격 저장소(Remote Repository)를 로컬 컴퓨터(Local Repository)로 복제하는 명령어
- 원격 저장소의 파일뿐 아니라 Git 커밋 이력도 가져온다.
- 복제된 저장소에는 원본 원격 저장소가 일반적으로 `origin`으로 등록된다.

**실습**

```bash
cd ~/Documents/OzWeb
mkdir clone
cd clone

git clone https://github.com/fastapi/fastapi.git
cd fastapi
git log
```

- FastAPI의 GitHub 저장소를 로컬에 복제
- `git log`를 통해 기존 프로젝트의 커밋 이력 확인
- 오랜 기간 개발된 프로젝트는 커밋 이력이 매우 길 수 있음

### 1.2 Git Log 탐색

`git log`는 기본적으로 최신 커밋부터 오래된 커밋 순서로 보여준다.

| 키 | 기능 |
|---|---|
| `Space` | 다음 페이지 |
| `b` | 이전 페이지 |
| **`G` (Shift + G)** | **출력의 맨 아래로 이동** |
| `g` | 출력의 맨 위로 이동 |
| **`q`** | **로그 화면 종료** |

- `G`를 눌러 `(END)`가 나타나면 로그의 끝에 도달한 것
- 화면이 비어 보일 수도 있으며, 오류를 의미하지는 않음
- `q`를 눌러 일반 터미널 입력 화면으로 복귀

**추가로 알아두면 유용한 명령어**

```bash
git log --oneline
git log -5
git log --oneline --graph --all
```

- `--oneline`: 커밋을 한 줄로 간략히 표시
- `-5`: 최근 5개 커밋만 표시
- `--graph --all`: 브랜치를 포함한 커밋 구조 표시

### 1.3 Git Fork (깃헙 전용)

- `fork`: 다른 사람의 GitHub 원격 저장소를 내 GitHub 계정의 원격 저장소로 복제하는 기능
- Git 자체의 기본 명령어라기보다 GitHub 플랫폼에서 제공하는 기능
- 원본 저장소와 Fork 저장소 사이의 관계가 GitHub에 유지됨

**Clone vs Fork**

| 구분 | Clone | Fork |
|---|---|---|
| 복제 위치 | 원격 → 로컬 | 타인 원격 → 내 원격 |
| 실행 방법 | `git clone` | GitHub의 Fork 기능 |
| 주요 목적 | 로컬에서 코드 확인 및 개발 | 독립적인 원격 저장소에서 개발 |
| 원본과의 관계 | 원격 주소 연결 | GitHub에서 Fork 관계 유지 |

**핵심 이해**

- 단순히 복제 위치만 다른 것이 아니라 활용 목적과 협업 방식도 다름
- Clone은 로컬 개발 환경을 만드는 데 사용
- Fork는 원본 저장소의 수정 권한이 없을 때도 내 원격 저장소에서 자유롭게 작업하는 데 유용
- Fork한 저장소를 다시 Clone하면 로컬에서도 개발 가능

일반적인 오픈소스 협업 흐름:

```text
다른 사람의 GitHub 저장소
        ↓ Fork
내 GitHub 저장소
        ↓ Clone
내 로컬 저장소
        ↓ 수정 및 Commit
내 GitHub 저장소에 Push
        ↓ Pull Request
원본 프로젝트에 변경사항 제안
```

---

## 2. HTML 학습 환경 준비

### 2.1 실습 폴더 생성

```bash
cd ..
mkdir html
cd html
code .
```

- `cd ..`: 상위 디렉터리로 이동
- `mkdir html`: html 폴더 생성
- `cd html`: html 폴더로 이동
- `code .`: 현재 폴더를 VS Code에서 열기

### 2.2 VS Code 확장 프로그램

- 설치한 확장 프로그램: **Live Preview (Microsoft)**
- HTML 코드를 작성한 후 VS Code 내부에서 렌더링 결과 확인 (미리보기 기능!)
- 실습 중 코드와 실제 화면을 나란히 배치하여 비교

### 2.3 Chrome에서 HTML 파일 열기

실습한 방법:

1. VS Code에서 `base.html` 우클릭
2. Finder에 표시
3. 연결 프로그램 → Google Chrome
4. HTML 파일이 브라우저에서 렌더링되는 것 확인

**Live Preview와 로컬 파일 열기의 차이**

- Live Preview: `http://127.0.0.1:3000/...` 형태의 로컬 서버 주소 사용 (수업에 없던 내용, ai와 추가학습함)
- Finder에서 Chrome으로 직접 열기: `file:///...` 형태의 로컬 파일 주소 사용
- 두 방법 모두 HTML을 브라우저에서 확인할 수 있지만 접근 방식이 다름

---

## 3. HTTP와 HTML의 관계

### 3.1 HTML이란?

- HTML: HyperText Markup Language
- 웹페이지의 구조와 콘텐츠를 정의하는 마크업 언어
- 브라우저가 HTML을 해석하여 화면에 표시함
- HTML 자체는 프로그래밍 언어가 아님

### 3.2 웹브라우저의 주요 기능

오늘 수업에서 다룬 두 가지 기능:

1. HTTP GET 요청
2. HTML 렌더링(Rendering)

**동작 흐름**

```text
사용자
  ↓ URL 입력
웹브라우저
  ↓ HTTP GET 요청
웹서버
  ↓ HTML 응답
웹브라우저
  ↓ HTML 해석 및 렌더링
화면 출력
```

- HTTP: 클라이언트와 서버가 데이터를 주고받는 통신 규약
- GET: 서버에 리소스를 요청하는 HTTP 메서드
- HTML: HTTP를 통해 전송할 수 있는 콘텐츠 형식 중 하나
- Rendering: HTML 등을 해석하여 실제 화면에 표시하는 과정

**주의할 점** 

- HTTP로 전송하는 데이터가 항상 HTML인 것은 아님
- JSON, 이미지, 동영상, CSS 등도 HTTP로 주고받을 수 있음

---

## 4. HTML 기본 구조

**실습 파일: `base.html`**

```html
<!DOCTYPE html>
<html>
    <!-- 메타데이터 -->
    <head>
        <title>My Page</title>
    </head>

    <!-- 실제 화면에 표시되는 콘텐츠 -->
    <body>
        Hello, HTML
    </body>
</html>
```

### 4.1 기본 태그

| 태그 | 역할 |
|---|---|
| `<!DOCTYPE html>` | HTML5 문서임을 선언 |
| `<html>` | HTML 문서 전체를 감싸는 루트 요소 |
| `<head>` | 문서 정보 및 메타데이터 |
| `<title>` | 브라우저 탭의 제목 |
| `<body>` | 화면에 표시할 콘텐츠 |

- `<head>` 안의 정보는 일반적으로 본문에 직접 표시되지 않음
- `<body>`에 작성한 텍스트가 화면에 나타남
- 대부분의 HTML 요소는 시작 태그와 종료 태그로 구성

### 4.2 HTML 주석

```html
<!-- 이 부분은 주석입니다 -->
```

- 코드 설명이나 메모 작성에 사용
- 브라우저 화면에 일반 텍스트로 렌더링되지 않음
- 주석은 HTML 소스에서 확인할 수 있으므로 민감한 정보를 넣지 않음

---

## 5. HTML 자동완성 (Emmet)

**실습 파일: `paragraph.html`**

- VS Code에서 `!` 입력 후 Emmet 자동완성 실행
- HTML 기본 구조가 자동 생성됨

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

### 5.1 자동 생성 코드 이해

- `lang="en"`: 문서의 기본 언어가 영어임을 표시
- `charset="UTF-8"`: 문자 인코딩 지정
- `name="viewport"`: 화면 표시 영역 설정
- `width=device-width`: 기기의 화면 너비를 기준으로 설정
- `initial-scale=1.0`: 초기 확대 비율 지정

---

## 6. 텍스트 관련 HTML 태그

**실습 파일: `paragraph.html`**

### 6.1 줄바꿈 — `<br>`

```html
Hello, HTML!<br>
Hello, HTML!<br>
Hello, HTML!
```

- `br`: Line Break
- 같은 문단 안에서 줄을 바꿈
- 별도의 종료 태그가 필요하지 않음

### 6.2 문단 구분 — `<p>`

```html
<p>Hello, HTML!</p>
<p>Hello, HTML!</p>
<p>Hello, HTML!</p>
```

- `p`: Paragraph
- 문단을 의미하는 태그
- 브라우저 기본 스타일에 의해 문단 사이 여백이 생김

**`<br>` vs `<p>`**

| 구분 | `<br>` | `<p>` |
|---|---|---|
| 의미 | 줄바꿈 | 문단 |
| 기본 여백 | 별도 문단 여백 없음 | 문단 사이 여백 |
| 종료 태그 | 불필요 | 일반적으로 사용 |
| 사용 예 | 주소, 시 구절 | 일반적인 문장과 문단 |

### 6.3 제목 — Heading 태그

```html
<h1>One</h1>
<p>Hello, HTML!</p>

<h2>Two</h2>
<p>Hello, HTML!</p>

<h3>Three</h3>
<p>Hello, HTML!</p>
```

- `h1`부터 `h6`까지 존재
- 숫자가 작을수록 높은 수준의 제목
- 기본적으로 높은 수준의 제목이 더 크게 표시됨
- 단순히 글자 크기를 바꾸기보다는 문서의 제목 구조를 나타내는 용도

**Markdown과 비교**

| Markdown | HTML |
|---|---|
| `# 제목` | `<h1>제목</h1>` |
| `## 제목` | `<h2>제목</h2>` |
| `### 제목` | `<h3>제목</h3>` |

### 6.4 가로 구분선 — `<hr>`

```html
<h1>One</h1>
<p>Hello, HTML!</p>

<hr>

<h2>Two</h2>
<p>Hello, HTML!</p>
```

- `hr`: 주제 또는 문맥의 구분을 나타냄
- 기본적으로 가로선 형태로 렌더링
- 별도의 종료 태그가 필요하지 않음
- `<vr>`처럼 대응되는 기본 세로선 태그는 없음
- 세로선은 일반적으로 CSS로 구현 가능

---

## 7. 리스트 태그

**실습 파일: `list.html`**

### 7.1 Unordered List — `<ul>`

```html
<!-- 순서가 없는 리스트 -->
<ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Cherry</li>
</ul>
```

- `ul`: Unordered List
- `li`: List Item
- 기본적으로 bullet point 형태로 출력
- 항목 간 순서가 중요하지 않을 때 사용

### 7.2 Ordered List — `<ol>`

```html
<!-- 순서가 있는 리스트 -->
<ol>
    <li>Apple</li>
    <li>Banana</li>
    <li>Cherry</li>
</ol>
```

- `ol`: Ordered List
- 기본적으로 1, 2, 3 형태의 번호가 표시됨
- 순서가 중요한 항목에 사용

### 7.3 Ordered List의 type 속성

```html
<ol type="a">
    <li>Apple</li>
    <li>Banana</li>
    <li>Cherry</li>
</ol>
```

출력:

```text
a. Apple
b. Banana
c. Cherry
```

| type | 표시 형식 |
|---|---|
| `"1"` | 1, 2, 3 |
| `"a"` | a, b, c |
| `"A"` | A, B, C |
| `"i"` | i, ii, iii |
| `"I"` | I, II, III |

### 7.4 부모 태그와 자식 태그

```text
<ul> 또는 <ol>  ← 부모 요소
       │
       ├── <li>Apple</li>
       ├── <li>Banana</li>
       └── <li>Cherry</li>
```

- `<ul>`, `<ol>`은 리스트 전체를 감싸는 요소
- `<li>`는 각각의 리스트 항목
- HTML 요소는 이처럼 중첩 구조를 가짐

---

## 8. 테이블 태그

**실습 파일: `table.html`**

### 8.1 테이블의 기본 개념

- Row: 행
- Column: 열
- Cell: 행과 열이 만나는 셀
- Header: 열이나 행의 제목
- Record: 데이터베이스에서 일반적으로 하나의 행을 의미
- Field: 데이터베이스에서 일반적으로 열 또는 데이터 항목을 의미

### 8.2 테이블 관련 태그

| 태그 | 역할 |
|---|---|
| `<table>` | 표 전체 |
| `<thead>` | 표의 헤더 영역 |
| `<tbody>` | 표의 본문 영역 |
| `<tr>` | Table Row, 하나의 행 |
| `<th>` | Table Header, 제목 셀 |
| `<td>` | Table Data, 일반 데이터 셀 |

### 8.3 테이블 작성 실습

```html
<table>
    <!-- 테이블 헤더 -->
    <thead>
        <tr>
            <th>ID</th>
            <th>이름</th>
            <th>나이</th>
        </tr>
    </thead>

    <!-- 테이블 본문 -->
    <tbody>
        <tr>
            <td>1</td>
            <td>alex</td>
            <td>20</td>
        </tr>
        <tr>
            <td>2</td>
            <td>bob</td>
            <td>30</td>
        </tr>
        <tr>
            <td>3</td>
            <td>chris</td>
            <td>40</td>
        </tr>
    </tbody>
</table>
```

**실습 결과**

| ID | 이름 | 나이 |
|---|---|---|
| 1 | alex | 20 |
| 2 | bob | 30 |
| 3 | chris | 40 |

**핵심 구조**

```text
table
 ├── thead
 │    └── tr
 │         ├── th
 │         ├── th
 │         └── th
 │
 └── tbody
      ├── tr
      │    ├── td
      │    ├── td
      │    └── td
      ├── tr
      └── tr
```

- `<tr>`로 행을 만들고, 그 안에 `<th>` 또는 `<td>`를 배치
- `<th>`는 기본적으로 굵게 표시됨
- 테이블을 작성했다고 해서 테두리가 자동으로 나타나는 것은 아님
- 테두리 등 시각적 디자인은 CSS로 설정 가능

---

## 9. 이미지 태그

**실습 파일: `image.html`**

### 9.1 이미지 삽입 — `<img>`

```html
<img src="./무도크리스마스.jpeg" alt="무도크리스마스">
```

- `img`: Image
- `src`: 이미지 파일의 경로 또는 URL
- `alt`: 이미지의 대체 텍스트
- 종료 태그가 필요하지 않음

### 9.2 src 속성

**로컬 이미지**

```html
<img src="./무도크리스마스.jpeg" alt="무도크리스마스">
```

- `./`: 현재 HTML 파일이 위치한 디렉터리
- 파일명과 확장자가 실제 파일과 일치해야 함
- 상대 경로를 사용하여 로컬 이미지 불러오기

**웹 이미지**

```html
<img src="https://example.com/photo.jpg" alt="사진 설명">
```

- 외부 웹사이트의 이미지 URL도 사용 가능
- Unsplash 등 무료 이미지 제공 사이트의 이미지 활용 가능
- 실제 이미지 파일 주소가 필요함
- 외부 이미지 사용 시 라이선스와 접근 가능 여부 확인 필요

### 9.3 alt 속성

```html
<img src="./wrong-image.jpeg" alt="무도크리스마스">
```

- 이미지가 로드되지 않을 때 대체 텍스트가 표시될 수 있음
- 스크린 리더 등 보조 기술이 이미지의 의미를 전달하는 데 사용
- 단순한 오류 안내용이 아니라 웹 접근성 측면에서도 중요

**실습에서 확인한 결과**

- `src`의 파일 경로가 잘못되면 이미지가 표시되지 않음
- 이때 `alt`에 작성한 텍스트가 화면에 나타남

---

## 10. Anchor 태그와 하이퍼링크

**실습 파일: `anchor.html`**

### 10.1 Anchor — `<a>`

```html
<a href="https://google.com">구글</a>로 이동
```

- `a`: Anchor
- `href`: Hypertext Reference
- 클릭했을 때 이동할 목적지 지정
- 태그 사이에 작성한 텍스트가 클릭 가능한 링크로 표시됨

### 10.2 href 속성

**외부 웹사이트로 이동**

```html
<a href="https://google.com">Google</a>
```

- 외부 웹사이트 주소를 작성할 때 `https://` 등 프로토콜 포함
- 프로토콜을 생략하면 의도와 다른 상대 경로로 처리될 수 있음

**같은 폴더의 HTML 파일로 이동(수업 외 내용임)**

```html
<a href="./base.html">기본 페이지</a>
```

- 로컬 HTML 파일 간에도 링크 연결 가능
- 상대 경로 사용 가능

---

## 11. Form 태그

**실습 파일: `form.html`**

### 11.1 Form이란?

- 사용자 입력을 수집하고 제출하는 HTML 요소
- 로그인, 회원가입, 검색, 설문 등에 활용
- `<form>` 안에 입력창과 버튼 등을 배치

**기본 구조**

```html
<form action="">
    <input type="text" placeholder="이름 입력">
    <button>입력</button>
</form>
```

| 태그/속성 | 역할 |
|---|---|
| `<form>` | 입력 요소를 묶는 폼 |
| `action` | 제출할 대상 URL |
| `<input>` | 사용자 입력 요소 |
| `type` | 입력창의 종류 |
| `placeholder` | 입력창의 안내 문구 (입력 형태를 알려주는 예시로 사용할 수 있음) |
| `<button>` | 버튼 생성 |

- `action=""`은 현재 문서 주소를 제출 대상으로 사용
- `method`를 생략하면 기본값은 GET
- `<form>` 내부의 `<button>`은 기본적으로 제출 버튼으로 동작

### 11.2 input type="text"

```html
<input type="text" placeholder="이름 입력">
```

- 일반 텍스트 입력
- 이름, 제목 등 자유로운 문자열 입력에 사용

### 11.3 input type="email"

```html
<input type="email" placeholder="이메일 입력">
```

- 이메일 주소 입력용
- 브라우저에서 이메일 형식 검증을 지원
- 제출 시 기본적인 이메일 형식 검사 가능
- @ 와 같은 이메일의 기본구조가 아닌 형태로 입력 할 시 이메일 구조로 입력 하라는 안내글이 밑으로 flag처럼 보여짐

### 11.4 input type="password"

```html
<input type="password" placeholder="비밀번호 입력">
```

- 입력 문자를 점 등으로 가려서 표시
- 화면에서 문자를 숨기는 기능
- 이것만으로 데이터가 암호화되거나 안전하게 저장되는 것은 아님

### 11.5 input type="search"

```html
<input type="search" placeholder="검색어 입력">
```

- 검색어 입력용
- 브라우저에 따라 입력 내용을 지우는 X 버튼 등이 표시될 수 있음

**오늘 실습한 input type 비교**

| type | 용도 | 특징 |
|---|---|---|
| `text` | 일반 문자열 | 기본 텍스트 입력 |
| `email` | 이메일 주소 | 이메일 형식 검증 |
| `password` | 비밀번호 | 입력 문자 가림 |
| `search` | 검색어 | 검색 전용 입력 UI |

---

## 12. Form과 HTTP GET 요청

### 12.1 Google 검색 Form 구현

```html
<form action="https://google.com/search">
    <input
        type="search"
        name="q"
        placeholder="검색어 입력"
    >
    <button>입력</button>
</form>
```

- `action`: 검색 요청을 보낼 URL
- `type="search"`: 검색어 입력창
- `name="q"`: 서버로 전달할 데이터의 파라미터 이름
- `placeholder`: 사용자에게 표시할 안내 문구
- `button`: 입력값을 제출하는 버튼

### 12.2 Query Parameter

사용자가 `python`을 입력하고 버튼을 누른 경우:

```text
https://google.com/search?q=python
```

URL 구조:

```text
https://google.com/search ? q = python
        기본 URL         키   값
```

- `?`: Query String 시작
- `q`: 파라미터 이름(Key)
- `python`: 파라미터 값(Value)
- 여러 파라미터가 있을 때는 `&`로 구분

예시:

```text
/search?q=python&lang=ko
```

- `q=python`
- `lang=ko`

### 12.3 name 속성의 역할

```html
<input type="search" name="q">
```

- `name`은 서버에 전달할 입력 데이터의 이름을 지정
- Google 검색에서는 검색어 파라미터로 `q`를 사용
- 입력값이 `python`이라면 `q=python`이 됨
- `name`이 없는 일반적인 입력 요소의 값은 Form 제출 데이터에 포함되지 않음

### 12.4 HTTP GET 동작 흐름

```text
1. 사용자가 검색어 입력
         ↓
2. 입력 버튼 클릭
         ↓
3. Form 제출
         ↓
4. GET 요청 생성
         ↓
5. Query Parameter 전달
         ↓
6. Google 검색 결과 페이지 표시
```

**실습 코드에 method 추가**

```html
<form
    action="https://google.com/search"
    method="GET"
>
    <input
        type="search"
        name="q"
        placeholder="검색어 입력"
    >
    <button type="submit">입력</button>
</form>
```

- 오늘 수업에서는 `method`를 생략하여 기본 GET 방식 사용
- `method="GET"`을 명시하면 요청 방식이 더 명확해짐
- GET 요청의 입력 데이터는 일반적으로 URL의 Query String으로 전달됨

---

## 13. HTML 주석을 활용한 코드 설명

실습 중 배운 내용을 HTML 주석으로 기록함.

```html
<!-- GET 요청으로 검색어 전달 -->
<form action="https://google.com/search">
    <input
        type="search"
        name="q"
        placeholder="검색어 입력"
    >
    <button>입력</button>
</form>
```

- 주석을 활용하면 코드의 목적과 동작을 설명할 수 있음
- 주석은 브라우저 화면에 출력되지 않음
- 학습 과정에서 태그와 속성의 의미를 기록하는 데 유용

---

## 14. 오늘 학습한 주요 HTML 태그 요약

| 분류 | 태그 | 역할 |
|---|---|---|
| 문서 구조 | `html` | HTML 문서 전체 |
| 문서 구조 | `head` | 문서 정보 |
| 문서 구조 | `body` | 화면 콘텐츠 |
| 문서 정보 | `meta` | 메타데이터 |
| 문서 정보 | `title` | 브라우저 탭 제목 |
| 텍스트 | `p` | 문단 |
| 텍스트 | `br` | 줄바꿈 |
| 제목 | `h1`~`h6` | 제목 계층 |
| 구분 | `hr` | 주제 구분선 |
| 리스트 | `ul` | 순서 없는 목록 |
| 리스트 | `ol` | 순서 있는 목록 |
| 리스트 | `li` | 목록 항목 |
| 테이블 | `table` | 표 |
| 테이블 | `thead` | 헤더 영역 |
| 테이블 | `tbody` | 본문 영역 |
| 테이블 | `tr` | 행 |
| 테이블 | `th` | 제목 셀 |
| 테이블 | `td` | 데이터 셀 |
| 이미지 | `img` | 이미지 삽입 |
| 링크 | `a` | 하이퍼링크 |
| 입력 | `form` | 입력 데이터 제출 |
| 입력 | `input` | 입력창 |
| 입력 | `button` | 버튼 |

---

## 15. 오늘 학습한 주요 속성 요약

| 속성 | 사용 예 | 의미 |
|---|---|---|
| `lang` | `lang="en"` | 문서 언어 |
| `charset` | `charset="UTF-8"` | 문자 인코딩 |
| `type` | `type="search"` | 요소의 종류 |
| `src` | `src="./image.jpeg"` | 이미지 경로 |
| `alt` | `alt="사진 설명"` | 대체 텍스트 |
| `href` | `href="https://..."` | 링크 목적지 |
| `action` | `action="/search"` | Form 제출 주소 |
| `method` | `method="GET"` | HTTP 요청 방식 |
| `name` | `name="q"` | 제출 데이터의 이름 |
| `placeholder` | `placeholder="검색어"` | 입력 안내 문구 |

---

## 16. 실습 파일 정리

오늘 VS Code의 `html` 디렉터리에서 작성한 파일:

```text
OzWeb/
└── html/
    ├── base.html
    ├── paragraph.html
    ├── list.html
    ├── table.html
    ├── image.html
    ├── anchor.html
    ├── form.html
    └── 무도크리스마스.jpeg
```

| 파일명 | 주요 실습 |
|---|---|
| `base.html` | HTML 기본 구조 및 렌더링 |
| `paragraph.html` | p, br, heading, hr |
| `list.html` | ul, ol, li |
| `table.html` | 표의 행, 열, 헤더, 데이터 |
| `image.html` | img, src, alt |
| `anchor.html` | a, href, 하이퍼링크 |
| `form.html` | Form, Input, GET, Query Parameter |

---

## 17. 오늘의 핵심 정리

- Git Clone은 원격 저장소를 로컬로 복제하는 명령어이다.
- GitHub Fork는 타인의 원격 저장소를 내 원격 저장소로 복제하는 기능이다.
- 웹브라우저는 HTTP 요청을 보내고, HTML을 해석하여 화면에 렌더링한다.
- HTML은 웹페이지의 콘텐츠와 구조를 정의하는 마크업 언어이다.
- HTML 태그는 부모와 자식 요소로 이루어진 중첩 구조를 가질 수 있다.
- `<p>`는 문단, `<br>`은 줄바꿈을 의미한다.
- `<h1>`~`<h6>`은 문서의 제목 계층을 나타낸다.
- `<ul>`과 `<ol>`은 각각 순서 없는 목록과 순서 있는 목록을 정의한다.
- `<table>` 안에서 `<tr>`, `<th>`, `<td>` 등을 사용해 표를 구성한다.
- `<img>`의 `src`는 이미지 경로, `alt`는 대체 텍스트이다.
- `<a>`의 `href`는 하이퍼링크의 목적지를 지정한다.
- `<form>`은 사용자 입력 데이터를 수집하고 제출하는 역할을 한다.
- `<input>`의 `type`에 따라 입력창의 기능이 달라진다.
- GET 방식의 Form 제출에서는 `name=value` 형태의 Query Parameter를 사용할 수 있다.

---

## 18. 다음 학습 예정

**HTTP POST 및 회원가입 Form**

- GET과 POST의 차이
- Form에서 POST 요청 보내기
- 회원가입 입력 양식 구현
- 입력 데이터를 서버에 전달하는 과정 이해

**학습 목표**

HTML Form을 통해 사용자의 입력 데이터를 서버에 전달하는 과정을 이해하고, 회원가입 기능의 기본 구조를 실습한다.
