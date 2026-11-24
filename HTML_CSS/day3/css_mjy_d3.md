# HTML/CSS 학습노트 — Day 3

**학습일:** 2026년 11월 23일  
**주요 학습 내용:** Emmet, Flexbox, Position, Footer Layout, Responsive Design, Media Query, Navbar

---

## 1. Emmet — HTML 코드 빠르게 작성하기

Emmet은 VS Code에서 HTML 구조를 간편하게 작성할 수 있도록 도와주는 기능이다.

### 기본 문법

| 문법 | 의미 |
|---|---|
| `>` | 자식 요소 생성 |
| `+` | 형제 요소 생성 |
| `*` | 요소 반복 |
| `$` | 반복 요소에 번호 부여 |
| `#` | ID 지정 |
| `.` | Class 지정 |

### 실습 예시

```html
(#box$)*2
```

위와 같이 입력하고 Emmet을 실행하면 다음과 같이 생성된다.

```html
<div id="box1"></div>
<div id="box2"></div>
```

반복되는 HTML 구조를 빠르게 작성할 때 유용하다.

---

## 2. Flexbox — 요소를 유연하게 배치하기

Flexbox는 요소를 가로 또는 세로 방향으로 정렬하고 공간을 배분하는 CSS 레이아웃 방식이다.

부모 요소에 `display: flex`를 적용하면 자식 요소들이 Flex Item으로 배치된다.

### 기본 예시

```html
<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>
```

```css
.container {
  display: flex;
  gap: 10px;
}
```

### 주요 속성

| 속성 | 역할 |
|---|---|
| `display: flex` | Flexbox 활성화 |
| `flex-direction` | 주축 방향 설정 |
| `justify-content` | 주축 방향 정렬 |
| `align-items` | 교차축 방향 정렬 |
| `gap` | 요소 사이 간격 |
| `flex: 1` | 남는 공간을 유연하게 분배 |

### 주축(Main Axis)과 교차축(Cross Axis)

**`flex-direction: row`**

- 주축: 가로
- 교차축: 세로

**`flex-direction: column`**

- 주축: 세로
- 교차축: 가로

즉, `justify-content`와 `align-items`는 항상 가로·세로로 고정되는 것이 아니라 `flex-direction`에 따라 기준 방향이 달라진다.

### justify-content

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

주요 값:

- `flex-start`: 시작점 정렬
- `center`: 중앙 정렬
- `flex-end`: 끝점 정렬
- `space-between`: 양 끝에 배치하고 사이 공간 분배
- `space-around`: 각 요소 주변에 공간 배분
- `space-evenly`: 요소 사이와 양 끝의 간격을 동일하게 배분

### align-items

```css
.container {
  display: flex;
  align-items: center;
}
```

주요 값:

- `flex-start`
- `center`
- `flex-end`
- `stretch`

### flex: 1

```css
.box {
  flex: 1;
}
```

Flex Item이 사용 가능한 공간을 유연하게 차지하도록 한다.

동일한 조건의 요소에 `flex: 1`을 적용하면 남는 공간을 균등하게 분배하는 레이아웃을 만들 수 있다.

---

## 3. CSS Position

`position` 속성은 요소의 배치 방식을 결정한다.

| 값 | 의미 |
|---|---|
| `static` | 기본 문서 흐름에 따라 배치 |
| `relative` | 원래 위치를 기준으로 이동 |
| `absolute` | 위치가 지정된 조상 요소 등을 기준으로 배치 |
| `fixed` | 일반적으로 브라우저 뷰포트를 기준으로 고정 |
| `sticky` | 스크롤 위치에 따라 달라지는 배치 |

### fixed 예시

```css
.button {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
```

화면 오른쪽 아래에 고정되는 버튼을 만들 수 있다.

단, `fixed`는 일반적인 문서 흐름에서 벗어나므로 다른 요소와 겹칠 수 있다.

---

## 4. Footer를 화면 하단에 배치하기

페이지 내용이 짧더라도 Footer를 화면 아래에 배치하고 싶을 때가 있다.

단순히 `margin-top`을 크게 설정하면 콘텐츠가 늘어날 때 레이아웃이 의도와 다르게 밀릴 수 있다.

Flexbox를 활용하면 더 안정적으로 구현할 수 있다.

### HTML

```html
<body>
  <header>Header</header>
  <main>Main Content</main>
  <footer>Footer</footer>
</body>
```

### CSS

```css
body {
  margin: 0;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
```

### 작동 원리

1. `min-height: 100vh`로 body의 최소 높이를 화면 높이만큼 확보한다.
2. `flex-direction: column`으로 요소를 세로 배치한다.
3. `main { flex: 1; }`로 남는 공간을 main이 차지하도록 한다.
4. Footer는 자연스럽게 아래쪽에 배치된다.

**핵심:** Footer를 억지로 고정하는 것이 아니라, 페이지 전체의 레이아웃을 설계하는 방식이다.

---

## 5. 반응형 웹 디자인

반응형 웹 디자인(Responsive Web Design)은 화면 크기에 따라 레이아웃이 적절하게 변화하도록 구현하는 방식이다.

PC, 태블릿, 모바일 등 다양한 화면 크기를 고려한다.

### Viewport

Viewport는 웹페이지가 표시되는 화면 영역을 의미한다.

HTML의 `<head>` 안에 다음 메타 태그를 사용한다.

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0"
>
```

### rem 단위

`rem`은 루트 요소(`html`)의 글꼴 크기를 기준으로 하는 상대 단위다.

```css
.box {
  padding: 1rem;
  font-size: 1.5rem;
}
```

루트 글꼴 크기가 16px이라면:

- `1rem = 16px`
- `1.5rem = 24px`
- `2rem = 32px`

단, 루트 글꼴 크기가 변경되면 실제 픽셀 값도 달라진다.

---

## 6. Media Query — 화면 크기에 따른 CSS 적용

Media Query는 특정 조건에서만 CSS를 적용할 수 있도록 하는 기능이다.

### 기본 문법

```css
@media (max-width: 500px) {
  .container {
    flex-direction: column;
  }
}
```

뷰포트 너비가 500px 이하일 때 `.container`의 배치 방향이 세로로 변경된다.

### 반응형 카드 예시

```css
.card-container {
  display: flex;
  gap: 20px;
}

.card {
  flex: 1;
}

@media (max-width: 500px) {
  .card-container {
    flex-direction: column;
  }
}
```

**500px 초과:** 카드가 가로로 배치됨  
**500px 이하:** 카드가 세로로 배치됨

### 핵심 개념

- `max-width`: 지정한 너비 이하에서 적용
- `min-width`: 지정한 너비 이상에서 적용
- Breakpoint: 레이아웃이 전환되는 기준 너비

---

## 7. Navbar 만들기

Navbar는 웹사이트에서 주요 메뉴와 이동 경로를 제공하는 내비게이션 영역이다.

### HTML

```html
<nav class="navbar">
  <div class="logo">MyWebsite</div>

  <ul class="menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

### CSS

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
  background-color: #f2f2f2;
}

.menu {
  display: flex;
  gap: 1rem;

  list-style: none;
  margin: 0;
  padding: 0;
}

.menu a {
  color: inherit;
  text-decoration: none;
}
```

### 사용한 CSS 개념

**`justify-content: space-between`**

로고와 메뉴를 양 끝으로 배치한다.

**`align-items: center`**

로고와 메뉴를 교차축 방향으로 중앙 정렬한다.

**`list-style: none`**

목록의 기본 불릿 표시를 제거한다.

**`color: inherit`**

부모 요소의 글자 색상을 상속받는다.

**`padding`**

Navbar 내부에 여백을 만든다.

### 반응형 Navbar

```css
@media (max-width: 500px) {
  .navbar {
    flex-direction: column;
    gap: 1rem;
  }

  .menu {
    flex-direction: column;
    align-items: center;
  }
}
```

화면이 좁아지면 Navbar와 메뉴가 세로 방향으로 전환된다.

---

## 8. Font Awesome

Font Awesome은 웹페이지에서 다양한 아이콘을 사용할 수 있도록 제공하는 아이콘 라이브러리다.

CDN 방식으로 CSS 파일을 연결하면 아이콘 클래스를 활용할 수 있다.

### HTML 예시

```html
<i class="fa-solid fa-house"></i>
```

아이콘이 표시되려면 해당 Font Awesome 버전의 CSS가 페이지에 올바르게 연결되어 있어야 한다.

---

## 9. 오늘 배운 내용 정리

| 학습 주제 | 핵심 |
|---|---|
| Emmet | HTML 구조를 빠르게 생성 |
| Flexbox | 요소 정렬 및 공간 분배 |
| Main/Cross Axis | Flexbox의 정렬 기준 |
| Position | 요소의 위치 지정 |
| min-height: 100vh | 화면 높이를 고려한 레이아웃 |
| flex: 1 | 남는 공간 활용 |
| rem | 루트 글꼴 크기 기준 상대 단위 |
| Media Query | 조건에 따른 CSS 변경 |
| Navbar | Flexbox를 활용한 메뉴 배치 |
| Font Awesome | 웹 아이콘 사용 |

---

## 10. 복습 및 추가 연습

### 연습 1 — Flexbox 카드 배치

카드 세 개를 가로로 배치하고 간격을 조절해 보기.

### 연습 2 — Footer Layout

콘텐츠가 짧을 때와 길 때 모두 자연스럽게 Footer가 배치되도록 구현해 보기.

### 연습 3 — Responsive Navbar

화면이 넓을 때는 가로 메뉴, 500px 이하에서는 세로 메뉴가 되도록 구현해 보기.

### 연습 4 — Position

`relative`, `absolute`, `fixed`의 차이를 직접 CSS로 확인해 보기.

---

## 11. 오늘의 학습 소감

오늘은 CSS의 개별 속성을 익히는 것에서 나아가, 여러 요소를 하나의 레이아웃으로 구성하는 방법을 학습했다.

특히 Flexbox의 주축과 교차축, `flex: 1`을 활용한 공간 배분, `min-height: 100vh`를 이용한 Footer 배치가 중요했다.

또한 Media Query를 통해 같은 HTML 구조라도 화면 크기에 따라 서로 다른 레이아웃을 구현할 수 있다는 점을 배웠다.

앞으로는 CSS 속성을 단순히 암기하기보다, 원하는 화면을 먼저 생각하고 그 레이아웃을 구현하기 위한 속성을 직접 선택하는 연습이 필요하다고 느꼈다.
