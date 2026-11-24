# CSS Grid, Bootstrap & JavaScript 기초

- 학습일: 2026.11.24
- 학습 주제: CSS Grid, Bootstrap, JavaScript 기초
- 실습 환경: macOS, VS Code, Live Preview, Node.js

---

## 1. 오늘의 학습 목표

- CSS Grid의 기본 구조와 배치 원리 이해
- Grid의 행과 열을 설정하는 방법 학습
- Bootstrap을 활용한 UI 구성
- JavaScript의 역할과 실행 환경 이해
- HTML 내부 및 외부 JavaScript 파일 실행
- Node.js 설치 및 터미널 실행 실습

---

# Part 1. CSS Grid

## 2. Grid란?

Grid는 행(row)과 열(column)을 동시에 제어할 수 있는
2차원 레이아웃 시스템이다.

바둑판처럼 공간을 나누는 개념이지만,
각 행과 열의 크기가 반드시 일정할 필요는 없다.

### Grid의 특징

- 2차원 레이아웃 시스템
- 행과 열을 동시에 제어
- 화면 전체의 구조 설계에 적합
- 각 행의 높이와 열의 너비를 다르게 설정 가능

### Position, Flexbox, Grid 비교

| 구분 | 주요 역할 |
|---|---|
| Position | 개별 요소의 위치 제어 |
| Flexbox | 한 방향을 중심으로 요소 정렬 |
| Grid | 행과 열을 이용한 2차원 구조 설계 |

Flexbox가 한 방향의 정렬에 최적화되어 있다면,
Grid는 페이지의 구조 자체를 설계하는 데 적합하다.

> Grid는 요소를 단순히 정렬하는 것이 아니라,
> 요소가 배치될 자리를 만드는 것이다.

---

## 3. Grid Container와 Grid Item

Flexbox와 마찬가지로 Grid도 부모 요소에 적용한다.

### Grid Container

- `display: grid;`가 적용된 부모 요소
- 전체적인 Grid 배치 규칙을 결정

### Grid Item

- Grid Container의 직계 자식 요소
- 부모가 설정한 Grid 규칙에 따라 배치

### HTML 실습 코드

```html
<div id="container">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
    <div class="item">D</div>
    <div class="item">E</div>
    <div class="item">F</div>
</div>
```

### CSS 실습 코드

```css
#container {
    border: 2px solid dodgerblue;
    display: grid;
}

.item {
    border: 1px solid black;
}
```

Grid의 배치는 부모 요소를 기준으로 결정된다.

단, 부모의 모든 하위 요소가 Grid Item이 되는 것은 아니며,
직계 자식 요소가 Grid Item이 된다.

---

## 4. grid-template-columns

Grid의 열 개수와 각 열의 너비를 설정하는 속성이다.

```css
#container {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
}
```

### 실행 결과

```text
+-------+-------+-------+-------+
|   A   |   B   |   C   |   D   |
+-------+-------+-------+-------+
|   E   |   F   |       |       |
+-------+-------+-------+-------+
```

- 값의 개수: 열의 개수
- 각각의 값: 열의 너비
- 자식 요소가 열의 개수를 초과하면 새로운 행이 자동 생성됨

---

## 5. Grid 크기 지정 방법

### 5.1 백분율(%)

```css
grid-template-columns: 25% 25% 25% 25%;
```

부모 영역의 너비를 기준으로 각 열의 크기를 지정한다.

### 5.2 repeat() 함수

```css
grid-template-columns: repeat(4, 25%);
```

동일한 크기의 열을 반복하여 생성할 수 있다.

기본 문법:

```css
repeat(반복횟수, 크기)
```

### 5.3 Fraction(fr) 단위

`fr`은 Grid의 가용 공간을 비율에 따라 나누는 단위이다.

```css
grid-template-columns: 1fr 1fr 1fr;
```

가용 공간을 동일한 비율로 나누어 3개의 열을 생성한다.

```css
grid-template-columns: 1fr 2fr 1fr;
```

가용 공간을 1:2:1의 비율로 배분한다.

### 5.4 repeat()와 fr 함께 사용하기

```css
grid-template-columns: repeat(4, 1fr);
```

동일한 비율을 가진 4개의 열을 생성한다.

### 크기 지정 방법 비교

| 표현 | 의미 |
|---|---|
| 25% | 부모 너비의 25% |
| repeat(4, 25%) | 25% 크기의 열 4개 |
| 1fr | 가용 공간을 배분하는 비율 단위 |
| repeat(4, 1fr) | 동일한 비율의 열 4개 |

%는 부모 영역의 크기를 기준으로 계산하지만,
fr은 고정 크기의 열과 gap 등을 제외한
가용 공간을 기준으로 배분한다.

---

## 6. Grid의 행 높이 설정

### 6.1 grid-template-rows

행의 개수와 높이를 명시적으로 설정한다.

```css
#container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 80px 80px;
}
```

- 열: 동일한 너비로 4개 생성
- 행: 높이 80px인 행 2개 생성

### 6.2 grid-auto-rows

자동으로 생성되는 행의 높이를 설정한다.

```css
#container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 80px;
}
```

행의 개수를 미리 정하지 않고,
필요한 만큼 행을 자동 생성한다.

자동으로 생성되는 각 행의 높이는 80px이다.

### 두 속성의 차이

| 구분 | grid-template-rows | grid-auto-rows |
|---|---|---|
| 생성 방식 | 명시적 | 암시적(자동) |
| 행 개수 | 미리 지정 | 필요한 만큼 생성 |
| 높이 | 지정된 행의 높이 | 자동 생성되는 행의 높이 |

현재 실습에서는 자식 요소가 6개이므로
두 코드의 실행 결과가 동일했다.

그러나 자식 요소의 개수가 변경되면
두 속성의 차이가 나타날 수 있다.

### 추가 참고: 두 속성의 조합

```css
#container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 100px 80px;
    grid-auto-rows: 50px;
}
```

- 첫 번째 행: 100px
- 두 번째 행: 80px
- 이후 자동 생성되는 행: 50px

---

# Part 2. Bootstrap

## 7. Bootstrap이란?

Bootstrap은 CSS와 JavaScript 기반의 UI 프레임워크이다.

반응형 웹페이지를 빠르게 제작할 수 있도록
미리 정의된 스타일과 UI 구성 요소를 제공한다.

### 주요 특징

- 반응형 웹 제작
- 미리 정의된 Grid 시스템
- Component 제공
- Utility Class 제공
- 클래스 이름을 활용한 레이아웃 구성
- 일관된 UI 품질 유지

CSS를 모두 직접 작성하지 않아도
미리 정의된 클래스를 사용하여 스타일을 적용할 수 있다.

---

## 8. Bootstrap 공식 Documentation

공식 문서:

https://getbootstrap.com/docs

Bootstrap의 기능, 사용 방법 및 예제 코드를
확인할 수 있는 공식 개발자 문서이다.

| 메뉴 | 주요 내용 |
|---|---|
| Getting started | 설치 및 연결 방법 |
| Layout | Container, Grid, 반응형 레이아웃 |
| Components | 버튼, 카드, Badge 등 |
| Forms | 입력창 및 입력 양식 |
| Utilities | 색상, 여백, 정렬 등 |

모든 클래스 이름을 외우기보다는
공식 문서를 참고하여 필요한 기능을 찾아 활용할 수 있다.

---

## 9. Bootstrap의 주요 구성 요소

### Grid

웹페이지의 레이아웃을 구성하는 시스템이다.

참고로 Bootstrap의 기본 Grid 시스템은
CSS Grid가 아닌 Flexbox를 기반으로 한다.

### Component

미리 만들어진 UI 구성 요소이다.

- Button
- Badge
- Card
- Navbar
- Modal

### Utility Class

개별 CSS 속성을 간편하게 적용할 수 있도록
미리 정의된 클래스이다.

- 색상
- Margin
- Padding
- 정렬
- 크기

---

## 10. CDN을 이용한 Bootstrap 연결

Bootstrap의 CSS 파일을 외부에서 불러와 사용할 수 있다.

CDN은 Content Delivery Network의 약자로,
외부 서버를 통해 필요한 파일을 제공받는 방식이다.

HTML의 head 영역에서 link 태그를 이용해 연결한다.

```html
<link rel="stylesheet" href="Bootstrap CSS CDN URL">
```

실제 사용 시에는 Bootstrap 공식 문서에서 제공하는
CDN 연결 코드를 복사하여 사용한다.

---

## 11. Bootstrap 실습: 알림 Badge

### HTML 코드

```html
<div class="container p-2">
    <div class="d-flex justify-content-center">
        <div>알림</div>
        <div class="badge bg-danger my-auto">5</div>
    </div>
</div>
```

### 실행 결과

알림 텍스트와 빨간색 숫자 Badge가
화면의 가로 중앙에 배치된다.

### 사용한 Bootstrap 클래스

| 클래스 | 역할 |
|---|---|
| container | 반응형 컨테이너 생성 |
| p-2 | 모든 방향에 padding 적용 |
| d-flex | Flexbox 적용 |
| justify-content-center | 주축 기준 중앙 정렬 |
| badge | 작은 라벨 디자인 적용 |
| bg-danger | 빨간색 계열 배경 적용 |
| my-auto | 위아래 margin 자동 설정 |

### 기존 CSS와 비교

```css
display: flex;
justify-content: center;
```

Bootstrap에서는 다음과 같이 표현할 수 있다.

```html
<div class="d-flex justify-content-center">
</div>
```

Bootstrap은 새로운 CSS 문법이 아니라,
기존 CSS 속성을 미리 클래스 형태로 정의해 놓은 것이다.

따라서 Bootstrap을 효과적으로 활용하기 위해서도
CSS의 기본 개념을 이해하는 것이 중요하다.

---

# Part 3. JavaScript Day 1

## 12. JavaScript란?

JavaScript는 웹 브라우저에서 동작할 수 있는
프로그래밍 언어이다.

### 주요 역할

- 버튼 클릭 처리
- 사용자 입력 처리
- 화면 변경
- 연산 및 프로그래밍 로직 구현

HTML, CSS, JavaScript는
프론트엔드 개발의 기본 기술이다.

| 기술 | 역할 |
|---|---|
| HTML | 구조(Structure) |
| CSS | 디자인(Presentation) |
| JavaScript | 동작(Behavior) |

---

## 13. JavaScript Engine

웹 브라우저에는 JavaScript 코드를 해석하고
실행할 수 있는 JavaScript Engine이 내장되어 있다.

따라서 별도의 실행 프로그램을 설치하지 않아도
브라우저에서 JavaScript를 실행할 수 있다.

### 참고: 브라우저별 JavaScript Engine

| 브라우저 | JavaScript Engine |
|---|---|
| Chrome | V8 |
| Safari | JavaScriptCore |
| Firefox | SpiderMonkey |
| Edge | V8 |

---

## 14. 브라우저 Console에서 JavaScript 실행

Chrome 개발자 도구의 Console을 이용하면
JavaScript 코드를 직접 입력하고 실행할 수 있다.

### Mac Chrome Console 단축키

```text
Command + Option + J
```

### 실습 코드

```javascript
console.log("hello")
```

### 실행 결과

```text
hello
undefined
```

### console.log()

값을 Console에 출력하는 기능이다.

Python의 print()와 유사하다.

```python
print("hello")
```

```javascript
console.log("hello")
```

### undefined가 나타나는 이유

- hello: console.log()의 출력값
- undefined: console.log() 함수 자체의 반환값

console.log()는 값을 출력하지만
별도의 값을 반환하지 않으므로 undefined가 나타난다.

이는 오류가 아니다.

---

## 15. HTML 내부에서 JavaScript 실행

HTML 파일 내부에서 script 태그를 사용하면
JavaScript 코드를 작성하고 실행할 수 있다.

### js.html

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
    <h1>Hello, JS</h1>

    <script>
        console.log("hello")
    </script>
</body>
</html>
```

### 실행 결과

웹페이지:

```text
Hello, JS
```

개발자 도구 Console:

```text
hello
```

console.log()의 결과는 웹페이지 화면이 아닌
개발자 도구의 Console에 출력된다.

---

## 16. VS Code Live Preview와 Console

VS Code의 Live Preview에서도
개발자 도구를 열어 JavaScript 실행 결과를 확인할 수 있다.

| 영역 | 역할 |
|---|---|
| Editor | 코드 작성 |
| Live Preview | 웹페이지 화면 확인 |
| Console | JavaScript 출력 및 오류 확인 |

Console에서는 출력값뿐만 아니라
코드가 실행된 파일과 줄 번호도 확인할 수 있다.

```text
hello    js.html:12
```

Console은 코드 실행 결과를 확인하고
오류를 찾는 디버깅 도구로도 활용된다.

---

## 17. 외부 JavaScript 파일 사용

실제 개발에서는 JavaScript 코드를
별도의 파일로 분리하여 관리하는 경우가 많다.

### 파일 구조

```text
js/
├── js.html
└── app.js
```

### app.js

```javascript
console.log("hello from app.js")
```

### js.html

```html
<body>
    <h1>Hello, JS</h1>

    <script src="./app.js"></script>
</body>
```

script 태그의 src 속성을 이용하여
외부 JavaScript 파일을 연결한다.

### 실행 결과

```text
hello from app.js    app.js:1
```

### 상대 경로

| 경로 | 의미 |
|---|---|
| ./app.js | 현재 디렉토리의 app.js |
| app.js | 현재 디렉토리의 app.js |
| ../app.js | 상위 디렉토리의 app.js |

### 파일 분리의 장점

- 코드 가독성 향상
- 유지보수 편의성
- 코드 재사용
- 협업 편의성

### External CSS와 External JavaScript 비교

| 구분 | CSS | JavaScript |
|---|---|---|
| 확장자 | .css | .js |
| 연결 태그 | link | script |
| 경로 속성 | href | src |
| 역할 | 디자인 | 동작 |

```html
<link rel="stylesheet" href="./style.css">
<script src="./app.js"></script>
```

---

## 18. Node.js란?

Node.js는 브라우저 외부에서도
JavaScript를 실행할 수 있도록 하는 실행 환경이다.

JavaScript 자체가 프로그래밍 언어라면,
Node.js는 JavaScript를 실행하는 Runtime Environment이다.

### Node.js를 활용하여 가능한 작업

- 브라우저 없이 JavaScript 실행
- 웹 서버 구축
- 백엔드 개발
- 데이터 처리
- 데이터베이스 연동

Node.js는 JavaScript의 새로운 문법이 아니며,
JavaScript를 실행할 수 있는 별도의 환경이다.

---

## 19. Node.js 설치 실습

### 실습 환경

- OS: macOS
- Editor: VS Code
- Package Manager: Homebrew
- 작업 경로: ~/Documents/OzWeb/js

### Homebrew를 이용한 설치

```bash
brew install node
```

### 설치 및 버전 확인

```bash
node -v
```

### 실습 결과

```text
v26.13.1
```

Node.js가 정상적으로 설치되었음을 확인하였다.

---

## 20. Node.js를 이용한 JavaScript 실행

### app.js

```javascript
console.log("hello from app.js")
```

### 터미널 실행

```bash
node app.js
```

### 실행 결과

```text
hello from app.js
```

HTML 파일이나 웹 브라우저를 사용하지 않고
JavaScript 파일을 직접 실행하는 데 성공하였다.

---

## 21. JavaScript 실행 방법 비교

오늘은 JavaScript를 실행하는 네 가지 방법을 실습하였다.

| 실행 방법 | 실행 환경 | 출력 위치 |
|---|---|---|
| Console에 직접 입력 | 브라우저 | Console |
| HTML 내부 script 태그 | 브라우저 | Console |
| 외부 .js 파일 연결 | 브라우저 | Console |
| node app.js | Node.js | 터미널 |

동일한 JavaScript 코드라도
서로 다른 실행 환경에서 실행할 수 있다.

다만 브라우저와 Node.js가 제공하는 기능은 다르므로
모든 JavaScript 코드가 두 환경에서 동일하게
동작하는 것은 아니다.

---

## 22. Python과 JavaScript 비교

기존에 학습했던 Python과 비교하여 이해하였다.

| 구분 | Python | JavaScript |
|---|---|---|
| 파일 확장자 | .py | .js |
| 실행 환경 예시 | Python Interpreter | Node.js |
| 출력 | print() | console.log() |
| 버전 확인 | python --version | node -v |
| 파일 실행 | python app.py | node app.js |
| 패키지 관리 도구 | pip | npm |

---

# 23. 오늘의 핵심 개념 정리

- Grid는 행과 열을 동시에 제어하는 2차원 레이아웃이다.
- Grid는 요소가 배치될 자리를 설계하는 도구이다.
- Flexbox와 Grid는 부모 요소에 적용한다.
- repeat()를 사용하면 반복되는 Grid 설정을 간결하게 작성할 수 있다.
- fr은 가용 공간을 비율로 배분하는 단위이다.
- Bootstrap은 미리 정의된 CSS 및 UI 구성 요소를 제공한다.
- HTML, CSS, JavaScript는 프론트엔드의 기본 기술이다.
- 브라우저에는 JavaScript Engine이 내장되어 있다.
- script 태그를 통해 JavaScript를 HTML과 연결할 수 있다.
- Node.js를 사용하면 브라우저 없이 JavaScript를 실행할 수 있다.

---

## 24. 학습 완료 체크리스트

- [x] CSS Grid 기본 개념 이해
- [x] Grid Container와 Grid Item 구분
- [x] grid-template-columns 실습
- [x] %, fr, repeat() 이해
- [x] grid-template-rows 실습
- [x] grid-auto-rows 실습
- [x] Bootstrap 기본 개념 이해
- [x] Bootstrap 공식 문서 확인
- [x] Bootstrap CDN 연결
- [x] Bootstrap Badge 및 Utility Class 실습
- [x] JavaScript 기본 개념 이해
- [x] 브라우저 Console 실행
- [x] HTML 내부 JavaScript 실행
- [x] 외부 JavaScript 파일 연결
- [x] Homebrew를 이용한 Node.js 설치
- [x] Node.js 버전 확인
- [x] 터미널에서 JavaScript 파일 실행

---

## 25. 학습 소감

CSS Grid를 통해 개별 요소의 디자인뿐만 아니라
웹페이지의 전체적인 구조를 설계하는 방법을 배웠다.

Bootstrap을 사용하면서 CSS를 직접 작성하지 않고도
미리 정의된 클래스를 활용하여 UI를 구성할 수 있다는
점을 확인하였다.

또한 JavaScript를 배우기 시작하면서
HTML과 CSS에 프로그래밍 기능을 추가하여
동적인 웹페이지를 만들 수 있다는 것을 이해하였다.

특히 브라우저에서만 실행되는 것으로 생각했던
JavaScript를 Node.js를 통해 터미널에서도
직접 실행할 수 있다는 점이 인상적이었다.

기존에 학습했던 Python의 실행 방식과 비교하면서
JavaScript의 실행 환경을 이해할 수 있었다.

---

## 26. 참고 자료

- Bootstrap Official Documentation
  https://getbootstrap.com/docs

- MDN Web Docs - CSS Grid
  https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout

- MDN Web Docs - JavaScript
  https://developer.mozilla.org/en-US/docs/Web/JavaScript

- Node.js Official Website
  https://nodejs.org/