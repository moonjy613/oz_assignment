// Console창 계산기 프로그램

// 계산 함수 정의 (Function Define)
function calculate(expression) {

    let numbers = [];
    let operators = [];
    let number = "";

    // 1. 숫자와 연산자 분리
    for (let i = 0; i < expression.length; i++) {

        let char = expression[i];

        if (char === " ") {
            continue;
        }
    

        if (char === "+" || char === "-" || char ==="*" || char === "/"){

            numbers.push(Number(number));   //.push(): 배열(array)에 값 추가 ; Number(): 숫자로 변환
            operators.push(char);
            number="";

        } else {
            number += char;
        }
    }

    numbers.push(Number(number));

    // 2. 곱셈(*)과 나눗셈(/) 먼저 계산
    let i = 0;

    while (i < operators.length) {
        if (operators[i]==="*") {
        
            numbers[i] = numbers[i] * numbers[i+1];

            numbers.splice(i + 1, 1);   // .splice(): 배열(array)의 특정 요소 삭제 등에 상용
            operators.splice(i,1);

        } else if (operators[i] === "/"){

            numbers[i] = numbers[i] / numbers[i + 1];

            numbers.splice(i + 1, 1);
            operators.splice(i, 1);

        } else {
            i++;
        }
    }

    // 3. 덧셈(+)과 뺄셈(-) 계산
    let result = numbers[0];

    for (let i = 0; i < operators.length; i++) {

        if (operators[i] === "+") {
            result += numbers[i + 1];
        } else if (operators[i] === "-") {
            result -= numbers[i + 1];
        }
    }

    // 4. 계산 결과 반환
    return result;
}


// 계산기 실행 함수 정의

function start() {

    let expression = prompt("계산식을 입력하세요. (예: 1+2*3)");

    if (expression === null || expression === "") {
        return;
    }

    let result = calculate(expression);

    console.log("결과: ", result);
}

