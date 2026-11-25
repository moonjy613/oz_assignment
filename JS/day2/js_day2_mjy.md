
# JavaScript Day 2 — JavaScript 기초 문법

- 학습일: 2026.11.25
- 학습 환경: VS Code, Node.js
- 학습 주제: 자료형, 연산자, 조건문, 반복문, 배열, 객체, JSON, 함수

---

## 1. 변수 (Variable)

변수란 데이터를 저장하고 참조하기 위해 사용하는 이름이다.

```javascript
let age = 20;
age = 21;
```

- 선언(Declaration): 변수를 만드는 것
- 할당(Assignment): 변수에 값을 지정하는 것
- 초기화(Initialization): 변수에 최초의 값을 지정하는 것
- 재할당(Reassignment): 기존 변수의 값을 변경하는 것

### let과 const

```javascript
let age = 20;
age = 21; // 재할당 가능

const name = "Alex";
// name = "Kim"; // 재할당 불가능
```

let은 같은 스코프 내에서 재선언할 수 없지만 재할당은 가능하다.
const는 선언 시 초기화해야 하며 재할당할 수 없다.

---

## 2. 기본 자료형 (Data Types)

| 자료형 | 의미 | 예시 |
|---|---|---|
| Number | 숫자 | 10, 3.14 |
| String | 문자열 | "Alex" |
| Boolean | 논리값 | true, false |
| Undefined | 값이 지정되지 않은 상태 등을 나타냄 | undefined |
| Null | 값의 부재를 나타냄 | null |

### typeof

값의 자료형을 확인할 때 사용한다.

```javascript
console.log(typeof 10);       // number
console.log(typeof "Alex");   // string
console.log(typeof true);     // boolean
console.log(typeof undefined); // undefined
console.log(typeof null);     // object
```

typeof null이 object로 나오는 것은 JavaScript의 역사적인 특성이다.

### Undefined와 Null의 차이

```javascript
let winner;
console.log(winner); // undefined

let selectedWinner = null;
console.log(selectedWinner); // null
```

- undefined: 값이 아직 할당되지 않았거나 존재하지 않는 경우 등에 나타나는 값
- null: 일반적으로 개발자가 의도적으로 값의 부재를 표현할 때 사용하는 값

예를 들어 당첨자가 아직 정해지지 않았다는 상태를 명시적으로 표현하고 싶다면 null을 사용할 수 있다.

두 값 모두 직접 할당할 수 있지만, 일반적인 사용 의도가 다르다.

---

## 3. 산술 연산자 (Arithmetic Operators)

| 연산자 | 의미 | 예시 | 결과 |
|---|---|---|---|
| + | 덧셈 | 10 + 3 | 13 |
| - | 뺄셈 | 10 - 3 | 7 |
| * | 곱셈 | 10 * 3 | 30 |
| / | 나눗셈 | 10 / 2 | 5 |
| % | 나머지 | 10 % 3 | 1 |
| ** | 거듭제곱 | 2 ** 3 | 8 |

### 증가 및 복합 할당 연산자

```javascript
let x = 0;

x++;      // x의 값을 1 증가
x += 2;   // x의 값을 2 증가
x--;      // x의 값을 1 감소
x -= 2;   // x의 값을 2 감소
```

반복문에서 x++와 x += 2 등을 증가식으로 사용할 수 있다.

---

## 4. 비교 연산자 (Comparison Operators)

비교 결과는 Boolean 값인 true 또는 false로 나타난다.

```javascript
console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(10 >= 10); // true
console.log(10 <= 5);  // false
```

---

## 5. 동등 연산자 (Equality Operators)

JavaScript에서는 ==와 ===의 차이를 이해해야 한다.

| 연산자 | 의미 |
|---|---|
| == | 필요에 따라 타입 변환 후 비교 |
| === | 타입 변환 없이 엄격하게 비교 |
| != | 느슨한 부등 비교 |
| !== | 엄격한 부등 비교 |

```javascript
console.log(10 == "10");  // true
console.log(10 === "10"); // false
```

10은 Number이고 "10"은 String이다.

==는 타입 변환을 허용하지만 ===는 허용하지 않는다.

예상하지 못한 자동 타입 변환을 방지하기 위해 일반적으로 ===를 사용하는 것이 권장된다.

---

## 6. 논리 연산자 (Logical Operators)

| 연산자 | 의미 | Python |
|---|---|---|
| && | AND | and |
| \|\| | OR | or |
| ! | NOT | not |

```javascript
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false
```

Boolean 값끼리 연산할 때:

- AND: 두 조건이 모두 참이어야 true
- OR: 하나 이상의 조건이 참이면 true
- NOT: 논리값을 반대로 변경

참고: JavaScript의 &&와 ||는 Boolean이 아닌 피연산자 자체를 반환할 수도 있다.

---

## 7. 문자열 연결 (Concatenation)

Concatenate는 연결하다, 이어 붙이다라는 의미이다.

```javascript
let firstName = "Alex";
let lastName = "Kim";

console.log(firstName + " " + lastName);
// Alex Kim
```

+ 연산자는 숫자 덧셈뿐만 아니라 문자열 연결에도 사용된다.

```javascript
console.log(10 + 20);     // 30
console.log("10" + "20"); // "1020"
console.log(10 + "20");   // "1020"
```

---

## 8. 타입 변환 (Type Conversion)

### 8.1 자동 타입 변환 (Implicit Type Coercion)

JavaScript는 연산 과정에서 자료형을 자동으로 변환할 수 있다.

```javascript
console.log(10 + "20"); // "1020"
```

위 예시에서는 숫자 10을 문자열 "10"으로 변환한 후 문자열 연결을 수행한다.

그러나 자동 타입 변환이 항상 문자열로 이루어지는 것은 아니다.

연산자의 종류에 따라 변환 방향이 달라진다.

```javascript
console.log(10 + "20"); // "1020"
console.log("20" - 10); // 10
console.log("20" * 2);  // 40
console.log("20" / 2);  // 10
```

### 8.2 명시적 타입 변환 (Explicit Type Conversion)

개발자가 직접 자료형을 변환할 수도 있다.

```javascript
console.log(10 + Number("20")); // 30
console.log(String(10) + "20"); // "1020"
```

- Number(): 숫자로 변환
- String(): 문자열로 변환
- Boolean(): 논리값으로 변환

### 8.3 NaN

NaN은 Not a Number의 약자이다.

```javascript
console.log(Number("Alex")); // NaN
```

숫자로 변환할 수 없는 값을 변환하는 경우 등에 발생한다.

---

## 9. 조건문 (Conditional Statement)

특정 조건의 참과 거짓에 따라 실행할 코드를 결정한다.

```javascript
let age = 7;

if (age <= 8) {
    console.log("어린이입니다");
} else if (age <= 19) {
    console.log("학생입니다");
} else {
    console.log("어른입니다");
}
```

실행 결과:

```
어린이입니다
```

조건문은 위에서부터 순서대로 평가한다.

if / else if / else 구조에서는 처음으로 참이 되는 조건의 코드만 실행하고 나머지는 건너뛴다.

### Python과 JavaScript 비교

Python:

```python
if age <= 8:
    print("어린이입니다")
elif age <= 19:
    print("학생입니다")
else:
    print("어른입니다")
```

JavaScript:

```javascript
if (age <= 8) {
    console.log("어린이입니다");
} else if (age <= 19) {
    console.log("학생입니다");
} else {
    console.log("어른입니다");
}
```

Python은 들여쓰기로 코드 블록을 구분하고, JavaScript는 중괄호를 사용한다.

---

## 10. Truthy와 Falsy

JavaScript에서는 Boolean이 아닌 값도 조건문에서 참 또는 거짓으로 평가될 수 있다.

### 대표적인 Falsy 값

- false
- 0
- "" (빈 문자열)
- null
- undefined
- NaN

추가적으로 -0, 0n도 falsy이다.
브라우저에는 document.all이라는 특수한 예외도 존재한다.

```javascript
if (0) {
    console.log("참");
} else {
    console.log("거짓");
}
```

실행 결과:

```
거짓
```

### 주의할 점

```javascript
console.log(Boolean("0"));     // true
console.log(Boolean("false")); // true
console.log(Boolean([]));      // true
console.log(Boolean({}));      // true
```

내용이 있는 문자열은 truthy이다.
빈 배열과 빈 객체도 JavaScript에서는 truthy이다.

---

## 11. 반복문 (Loop)

반복문은 특정 작업을 여러 번 실행하기 위해 사용한다.

### 11.1 Python의 for문 복습

```python
for x in range(10):
    print(x)
```

0부터 9까지 출력한다.

range()의 기본 구조:

```python
range(start, stop, step)
```

| 코드 | 시작 | 종료 기준 | 증가량 | 생성되는 값 |
|---|---|---|---|---|
| range(3) | 0 | 3 | 1 | 0, 1, 2 |
| range(0, 4) | 0 | 4 | 1 | 0, 1, 2, 3 |
| range(10, 20, 3) | 10 | 20 | 3 | 10, 13, 16, 19 |
| range(10, 20, 30) | 10 | 20 | 30 | 10 |

stop 값은 포함하지 않는다.

x는 반복할 때마다 새로운 값을 할당받는 변수이다.

주의: Python의 for문은 별도의 블록 스코프를 만들지 않으므로 반복문이 종료된 후에도 x에 접근할 수 있는 경우가 있다.

### 11.2 JavaScript의 for문

```javascript
for (let x = 0; x < 10; x++) {
    console.log(x);
}
```

기본 문법:

```javascript
for (초기화; 조건식; 증감식) {
    실행할 코드;
}
```

- 초기화: let x = 0
- 조건식: x < 10
- 증감식: x++
- 반복할 작업: console.log(x)

실행 순서:

1. 초기화
2. 조건식 평가
3. 조건이 true이면 코드 실행
4. 증감식 실행
5. 다시 조건식 평가
6. 조건이 false이면 반복 종료

초기화는 최초 한 번만 실행한다.

### 실행 순서 예시

```javascript
for (let x = 0; x < 3; x++) {
    console.log(x);
}
```

| 반복 | x | 조건식 x < 3 | 출력 | 증감 후 x |
|---|---|---|---|---|
| 1 | 0 | true | 0 | 1 |
| 2 | 1 | true | 1 | 2 |
| 3 | 2 | true | 2 | 3 |
| 종료 | 3 | false | 없음 | 실행 안 함 |

### 증가량 변경

```javascript
for (let x = 0; x < 10; x += 2) {
    console.log(x);
}
```

출력:

```
0
2
4
6
8
```

### Python과 JavaScript 비교

```python
for x in range(10, 20, 3):
    print(x)
```

```javascript
for (let x = 10; x < 20; x += 3) {
    console.log(x);
}
```

두 코드 모두 10, 13, 16, 19를 출력한다.

---

## 12. while문

while은 "~하는 동안"이라는 의미이다.

특정 조건이 참인 동안 코드를 반복한다.

```javascript
let i = 0;

while (i < 3) {
    console.log(i);
    i++;
}
```

실행 결과:

```
0
1
2
```

### 무한 반복 (Infinite Loop)

```javascript
let i = 0;

while (i < 3) {
    console.log(i);
    // i++;
}
```

i의 값이 변경되지 않으므로 조건이 계속 true이다.
따라서 0이 무한히 출력된다.

터미널에서 실행 중인 프로그램을 중단하려면 Ctrl + C를 사용한다.

### for문과 while문의 차이

| for | while |
|---|---|
| 초기화, 조건식, 증감식을 한 곳에 작성 가능 | 조건식을 중심으로 반복 |
| 반복 횟수가 명확한 경우 편리 | 특정 상태가 유지되는 동안 반복할 때 편리 |
| 증감식을 헤더에 작성 가능 | 필요한 경우 본문 등에서 상태 변경 |

두 반복문은 많은 상황에서 서로 변환하여 사용할 수 있다.

---

## 13. 배열 (Array)

배열은 여러 값을 순서대로 저장할 수 있는 자료 구조이다.

Python의 List와 유사하다.

```javascript
let numbers = [10, 20, 30];
```

### 인덱스 (Index)

인덱스는 0부터 시작한다.

```javascript
console.log(numbers[0]); // 10
console.log(numbers[1]); // 20
console.log(numbers[2]); // 30
```

### 마지막 요소 접근

Python:

```python
numbers = [10, 20, 30]
print(numbers[-1])
```

JavaScript:

```javascript
console.log(numbers.at(-1)); // 30
```

실습 중 발생한 오류:

```javascript
console.log(numbers.at[-1]); // undefined
```

.at은 메서드이므로 대괄호가 아니라 소괄호를 사용하여 호출해야 한다.

```javascript
numbers.at(-1); // 올바른 메서드 호출
```

### 배열과 반복문: for...of

```javascript
let numbers = [10, 20, 30];

for (let n of numbers) {
    console.log(n);
}
```

출력:

```
10
20
30
```

n은 배열의 요소를 순서대로 할당받는다.

Python의 다음 코드와 유사하다.

```python
for n in numbers:
    print(n)
```

---

## 14. 객체 (Object)

객체는 여러 값을 Key와 Value의 형태로 저장하는 자료 구조이다.

Python의 Dictionary와 유사한 방식으로 데이터를 표현할 수 있다.

```javascript
let alex = {
    name: "alex",
    age: 20
};
```

- Key: name, age
- Value: "alex", 20

각 속성은 쉼표로 구분한다.

### 값에 접근하기

```javascript
console.log(alex["name"]); // alex
console.log(alex["age"]);  // 20
```

점 표기법으로도 접근할 수 있다.

```javascript
console.log(alex.name);
console.log(alex.age);
```

### 값 변경하기

```javascript
alex["age"] += 1;

console.log(alex["age"]); // 21
```

### 배열과 객체의 차이

| 배열 | 객체 |
|---|---|
| 순서 중심 | Key 중심 |
| 인덱스로 접근 | Key로 접근 |
| [] 사용 | {} 사용 |
| Python List와 유사 | Python Dictionary와 유사 |

---

## 15. JSON

JSON = JavaScript Object Notation

JSON은 JavaScript의 객체 표기법에서 유래한 데이터 교환 형식이다.

JavaScript 자체는 프로그래밍 언어이지만 JSON은 데이터를 표현하는 텍스트 형식이다.

### JSON Object

```json
{
    "name": "alex",
    "age": 20
}
```

### JSON Array

```json
[
    {
        "name": "alex",
        "age": 20
    },
    {
        "name": "kim",
        "age": 25
    }
]
```

JSON의 주요 구조는 Object와 Array이다.

JSON은 문자열, 숫자, Boolean, null 등의 값도 표현할 수 있다.

### JavaScript Object와 JSON의 차이

JavaScript Object:

```javascript
let alex = {
    name: "alex",
    age: 20
};
```

JSON:

```json
{
    "name": "alex",
    "age": 20
}
```

JSON의 특징:

- Key는 반드시 큰따옴표로 감싼다.
- 문자열은 큰따옴표를 사용한다.
- 주석을 사용할 수 없다.
- 함수와 undefined는 JSON 값으로 표현할 수 없다.
- 마지막 요소 뒤에 쉼표를 붙일 수 없다.

JSON은 API 통신 등에서 데이터를 주고받을 때 널리 사용된다.

---

## 16. 함수 (Function)

### 16.1 함수의 개념

프로그래밍에서 함수란 특정 작업을 하나로 묶어서 필요할 때 재사용할 수 있도록 만든 것이다.

일반적인 함수의 구조:

입력(Input) → 연산/처리(Process) → 반환(Output)

함수에 따라 입력값이나 명시적인 반환값이 없을 수도 있다.

### 16.2 함수 정의와 호출

Python:

```python
def add(n1, n2):
    return n1 + n2

add(10, 30)
```

JavaScript:

```javascript
function add(n1, n2) {
    return n1 + n2;
}

add(10, 30);
```

- Define: 함수가 수행할 작업을 정의
- Call: 정의된 함수를 실제로 실행
- Parameter: 함수 정의에 사용하는 매개변수
- Argument: 함수 호출 시 전달하는 실제 값

위 코드에서 n1과 n2는 Parameter이고 10과 30은 Argument이다.

함수를 정의하는 것만으로는 함수 내부의 코드가 실행되지 않는다.

---

## 17. return과 출력의 차이

오늘 학습에서 가장 중요했던 개념 중 하나이다.

### 17.1 return

return은 두 가지 역할을 수행한다.

1. 현재 함수의 실행을 종료한다.
2. 값을 함수 호출 위치로 반환한다.

```javascript
function add(n1, n2) {
    return n1 + n2;
}

let result = add(10, 30);

console.log(result); // 40
```

실행 과정:

1. add(10, 30)을 호출한다.
2. n1에 10, n2에 30이 전달된다.
3. n1 + n2를 계산한다.
4. return을 통해 40을 호출 위치로 반환한다.
5. 반환값 40을 result에 할당한다.
6. console.log(result)를 통해 출력한다.

### 17.2 반환값의 직접 출력

```javascript
console.log(add(10, 30)); // 40
```

별도의 변수에 반환값을 할당하지 않고 바로 출력할 수 있다.

### 17.3 출력만 하는 함수

```javascript
function add(n1, n2) {
    console.log(n1 + n2);
}

let result = add(10, 30);
console.log(result);
```

출력:

```
40
undefined
```

함수 내부의 console.log는 40을 출력하지만, 명시적으로 반환한 값은 없다.

따라서 result에는 undefined가 할당된다.

Python에서는 명시적인 반환값이 없으면 None을 반환한다.

### 비교

| 구분 | 출력 | 반환 |
|---|---|---|
| Python | print() | return |
| JavaScript | console.log() | return |
| 목적 | 사람이 결과를 확인 | 호출한 코드에 값 전달 |
| 함수 종료 | 종료하지 않음 | 현재 함수 종료 |
| 계산 결과 재사용 | 출력만으로는 불가능 | 가능 |

---


## 18. 함수 실행 순서 퀴즈

함수를 정의하는 시점과 호출하는 시점의 차이를 이해하고,
코드의 실제 실행 순서와 출력값을 예측하는 실습을 진행하였다.

특히 다음 개념을 구분하는 것이 중요하다.

- 함수 정의 (Function Definition)
- 함수 호출 (Function Call)
- 변수 할당 (Assignment)
- 출력 (console.log)
- 반환 (return)
- 함수 실행 종료

### Quiz 1. 함수 호출과 반환값의 변수 할당

다음 코드의 출력 순서를 예측하시오.

```javascript
console.log("#")

function add(n1, n2) {
    console.log("@")
    return n1 + n2;
}

console.log("!")
let result = add(10, 30);
console.log("$")
console.log(result)
```

#### 실행 결과

```
#
!
@
$
40
```

#### 단계별 실행 순서

| 순서 | 실행 코드 | 실행 내용 | 출력 |
|---|---|---|---|
| 1 | console.log("#") | 문자열 출력 | # |
| 2 | function add(n1, n2) | 함수 정의, 내부 코드 실행 안 함 | 없음 |
| 3 | console.log("!") | 문자열 출력 | ! |
| 4 | let result = add(10, 30) | 함수 호출, n1 = 10, n2 = 30 | 없음 |
| 5 | console.log("@") | 함수 내부 코드 실행 | @ |
| 6 | return n1 + n2 | 40 반환 및 함수 종료 | 없음 |
| 7 | let result = 40 | 반환값을 result에 할당 | 없음 |
| 8 | console.log("$") | 문자열 출력 | $ |
| 9 | console.log(result) | result에 저장된 값 출력 | 40 |

#### 핵심 개념

```javascript
let result = add(10, 30);
```

위 코드에서는 단순히 변수에 값을 할당하는 것이 아니라,
우변에 있는 함수를 먼저 호출하고 실행한다.

따라서 함수 내부의 console.log("@")가 실행된다.

이후 return을 통해 반환된 40이 result에 할당된다.

```javascript
let result = 40;
```

단, return은 출력 명령어가 아니므로 이 시점에서
40이 콘솔에 출력되는 것은 아니다.

이후 console.log("$")가 먼저 실행되고,
console.log(result)가 실행될 때 비로소 40이 출력된다.

#### 실행 흐름

```
console.log("#")
    ↓
함수 정의 (내부 코드 실행 안 함)
    ↓
console.log("!")
    ↓
let result = add(10, 30)
    │
    ├── 함수 내부로 이동
    │   ├── n1 = 10
    │   ├── n2 = 30
    │   ├── console.log("@")
    │   └── return 40
    │
    └── 호출 위치로 복귀
        result = 40
    ↓
console.log("$")
    ↓
console.log(result)
    ↓
프로그램 종료
```

---

### Quiz 2. 함수 내부 출력과 반환값의 직접 출력

다음 코드의 출력 순서를 예측하시오.

```javascript
console.log("#")

function add(n1, n2) {
    console.log("@")
    let result = n1 + n2;
    console.log(result)
    return result
    console.log(100);
}

console.log("!")
console.log(add(10, 30));
console.log("$")
```

#### 실행 결과

```
#
!
@
40
40
$
```

#### 단계별 실행 순서

| 순서 | 실행 코드 | 실행 내용 | 출력 |
|---|---|---|---|
| 1 | console.log("#") | 문자열 출력 | # |
| 2 | function add(n1, n2) | 함수 정의, 내부 코드 실행 안 함 | 없음 |
| 3 | console.log("!") | 문자열 출력 | ! |
| 4 | console.log(add(10, 30)) | 인자로 전달할 값을 구하기 위해 add 함수 먼저 호출 | 없음 |
| 5 | console.log("@") | 함수 내부 문자열 출력 | @ |
| 6 | let result = n1 + n2 | 10 + 30을 계산하여 result에 할당 | 없음 |
| 7 | console.log(result) | 함수 내부에서 result 출력 | 40 |
| 8 | return result | 40 반환 및 함수 종료 | 없음 |
| - | console.log(100) | return 이후이므로 실행되지 않음 | 없음 |
| 9 | console.log(40) | 함수 외부에서 반환값 출력 | 40 |
| 10 | console.log("$") | 문자열 출력 | $ |

#### 핵심 개념 1. 40이 두 번 출력되는 이유

첫 번째 40은 함수 내부의 console.log에서 출력된다.

```javascript
console.log(result)
```

두 번째 40은 함수 외부의 console.log에서 출력된다.

```javascript
console.log(add(10, 30));
```

add(10, 30)의 반환값이 40이므로,
결과적으로 다음과 같이 실행된다.

```javascript
console.log(40);
```

즉, return이 40을 출력한 것이 아니라
서로 다른 두 개의 console.log가 각각 40을 출력한 것이다.

#### 핵심 개념 2. 100이 출력되지 않는 이유

```javascript
return result
console.log(100);
```

return은 다음 두 가지 역할을 수행한다.

1. 값을 함수 호출 위치로 반환한다.
2. 현재 함수의 실행을 즉시 종료한다.

따라서 return 이후에 작성된 console.log(100)은
실행되지 않는다.

이처럼 실행될 수 없는 코드를
Unreachable Code(도달할 수 없는 코드)라고 한다.

주의: return은 전체 프로그램을 종료하는 것이 아니라
현재 실행 중인 함수를 종료하는 것이다.

따라서 함수 외부의 console.log("$")는 정상적으로 실행된다.

#### 핵심 개념 3. 중첩된 함수 호출의 실행 순서

```javascript
console.log(add(10, 30));
```

console.log에 전달할 값을 먼저 구해야 하므로,
add(10, 30)이 먼저 실행된다.

```
console.log(add(10, 30))
    │
    ├── add(10, 30) 실행
    │   ├── console.log("@")
    │   ├── let result = 10 + 30
    │   ├── console.log(result) → 40 출력
    │   ├── return result → 40 반환
    │   └── 함수 종료
    │
    └── console.log(40) → 40 출력
```

---

### Quiz 1과 Quiz 2 비교

| 구분 | Quiz 1 | Quiz 2 |
|---|---|---|
| 함수 호출 방식 | let result = add(10, 30) | console.log(add(10, 30)) |
| 함수 내부 출력 | @ | @, 40 |
| 함수 반환값 | 40 | 40 |
| 반환값 처리 | 변수에 저장 | 즉시 출력 |
| 40 출력 횟수 | 1회 | 2회 |
| return 이후 코드 | 없음 | console.log(100), 실행되지 않음 |
| 전체 출력 순서 | # → ! → @ → $ → 40 | # → ! → @ → 40 → 40 → $ |

### 함수 실행 순서를 예측하는 방법

1. 함수 외부의 코드부터 실행 순서를 확인한다.
2. 함수 정의 부분에서는 내부 코드를 실행하지 않는다.
3. 함수 호출을 만나면 함수 내부로 이동한다.
4. 함수 내부의 코드를 위에서부터 실행한다.
5. console.log를 만나면 출력값을 기록한다.
6. return을 만나면 반환값을 기록하고 함수를 종료한다.
7. 함수를 호출했던 위치로 돌아간다.
8. 반환값을 할당하거나 출력하는 등의 작업을 완료한다.
9. 이후 코드를 계속 실행한다.

### 학습 회고

함수의 실행 순서를 예측하는 과정에서
코드가 작성된 순서와 실제 실행되는 순서가
항상 일치하는 것은 아니라는 점을 학습하였다.

특히 함수 정의와 함수 호출을 구분하고,
함수 호출 시 함수 내부로 이동하였다가
return을 통해 다시 호출 위치로 돌아오는 흐름을
이해하는 것이 중요했다.

또한 console.log는 출력,
return은 반환 및 함수 종료라는 차이를 이해하였다.

앞으로 함수가 포함된 코드를 읽을 때는
현재 실행 위치, 변수의 값, 반환값, 출력값을
구분하여 추적하는 연습이 필요하다.


---

## 19. 함수 자체의 변수 할당

JavaScript에서는 함수 자체도 하나의 값으로 취급하여 변수에 할당할 수 있다.

```javascript
function add(n1, n2) {
    return n1 + n2;
}

let result = add;

console.log(result);
console.log(result(10, 20));
```

Node.js 출력:

```
[Function: add]
30
```

add와 result는 동일한 함수를 참조한다.

### 함수 참조와 함수 호출의 차이

```javascript
let a = add;
let b = add(10, 20);
```

| 코드 | 의미 | 저장되는 값 |
|---|---|---|
| let a = add; | 함수 참조 | 함수 자체 |
| let b = add(10, 20); | 함수 호출 | 반환값 30 |

```javascript
console.log(typeof a); // function
console.log(typeof b); // number
```

이러한 특성은 앞으로 이벤트 처리와 콜백 함수를 이해하는 데 도움이 된다.

---

## 20. 실습 중 발생한 오류 및 해결

### 20.1 변수 중복 선언

```javascript
let result = add(10, 30);
let result = add(10, 30);
```

오류:

```
SyntaxError: Identifier 'result' has already been declared
```

원인:

같은 스코프에서 let으로 동일한 이름의 변수를 두 번 선언했다.

해결:

```javascript
let result = add(10, 30);
result = add(10, 30);
```

또는 서로 다른 변수명을 사용한다.

### 20.2 배열 메서드 호출 오류

```javascript
numbers.at[-1]; // undefined
numbers.at(-1); // 30
```

메서드를 호출할 때는 소괄호를 사용한다.

### 20.3 객체의 쉼표 누락

잘못된 코드:

```javascript
let alex = {
    name: "alex"
    age: 20
};
```

수정한 코드:

```javascript
let alex = {
    name: "alex",
    age: 20
};
```

### 20.4 while문의 무한 반복

반복 조건을 변경하는 코드가 누락되면 무한 반복이 발생할 수 있다.

### 20.5 Python과 JavaScript 문법 혼동

Python의 print()에 해당하는 JavaScript 콘솔 출력 문법은 console.log()이다.

Node.js에서 별도로 정의하지 않은 print()를 호출하면 ReferenceError가 발생한다.

---

## 21. Python과 JavaScript 문법 비교

| 개념 | Python | JavaScript |
|---|---|---|
| 변수 선언 및 할당 | x = 10 | let x = 10; |
| 출력 | print() | console.log() |
| 참 | True | true |
| 거짓 | False | false |
| 값의 부재 | None | null, undefined |
| AND | and | && |
| OR | or | \|\| |
| NOT | not | ! |
| 조건문 | if / elif / else | if / else if / else |
| 반복문 | for x in range() | for (초기화; 조건식; 증감식) |
| 요소 순회 | for x in list | for (let x of array) |
| 배열형 자료 구조 | List | Array |
| Key-Value 자료 구조 | Dictionary | Object |
| 마지막 요소 접근 | list[-1] | array.at(-1) |
| 함수 정의 | def | function |
| 반환 | return | return |
| 명시적 반환값 없음 | None | undefined |

---

## 22. 오늘의 학습 회고 (TIL)

오늘은 JavaScript의 기본 자료형과 연산자부터 조건문,
반복문, 배열, 객체, JSON, 함수까지 학습하였다.

특히 반복문과 함수에서 단순히 문법을 기억하는 것보다
코드가 실행되는 순서를 이해하는 것이 중요하다는 것을 느꼈다.

반복문에서는 초기화, 조건식 평가, 코드 실행,
증감식 실행의 순서를 구분할 필요가 있었다.

함수에서는 정의와 호출의 차이뿐만 아니라
console.log를 통한 출력과 return을 통한 반환의 차이를
명확하게 이해하는 것이 중요했다.

또한 함수 자체를 변수에 할당하는 것과
함수의 반환값을 변수에 할당하는 것이 서로 다른 개념임을 학습하였다.

### 추가 복습이 필요한 부분

- [ ] undefined와 null의 사용 의도
- [ ] 자동 타입 변환 규칙
- [ ] Truthy와 Falsy
- [ ] for문의 실행 순서
- [ ] while문과 무한 반복
- [ ] 배열과 반복문의 결합
- [ ] 함수의 정의와 호출
- [ ] 출력과 반환의 차이
- [ ] 함수 실행 순서 및 출력값 예측
- [ ] 함수 참조와 함수 호출의 차이
