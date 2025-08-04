//선언부
// var d = document;
// var d = d.getElementById("result").innerHTML
let num1 = 8;
let num2 = 3;
let result = 0;

//구연부
result = num1 + num2;
//출력부
console.log(`${result}`)
document.getElementById("result").innerHTML = `<h1>[더하기]${result}</h1>`;

//초기화
result = 0;

result = num1 - num2;
console.log(`${result}`)
document.getElementById("result").innerHTML
    = document.getElementById("result").innerHTML + `<h1>[빼기]${result}</h1>`;

//초기화
result = 0;


result = num1 * num2;

console.log(`${result}`)
document.getElementById("result").innerHTML
    = document.getElementById("result").innerHTML + `<h1>[곱셈]${result}</h1>`;

//초기화
result = 0;


result = num1 / num2;

console.log(`${result}`)
document.getElementById("result").innerHTML
    = document.getElementById("result").innerHTML + `<h1>[나누셈]${result}</h1>`;

//초기화
result = 0;

result = num1 % num2;

console.log(`${result}`)
document.getElementById("result").innerHTML
    = document.getElementById("result").innerHTML +`<h1>[나머지]${result}</h1>`;


//초기화
result = 0;

result = ++num1

console.log(`${result}`)
document.getElementById("result").innerHTML
= document.getElementById("result").innerHTML + `<h1>[++1씩증가]${result}</h1>`;

//초기화
result = 0;

result = --num2;

console.log(`${result}`)
document.getElementById("result").innerHTML
= document.getElementById("result").innerHTML + `<h1>[--1씩 감소]${result}<h1>`


// 후행연산자
result = 0;
let num0 = 7;


result = num0++ ;

console.log(`${result}`)
document.getElementById("result").innerHTML
= document.getElementById("result").innerHTML + `<h1>[1++증가]${result}</h1>`;

console.log(`${num0}`)
document.getElementById("result").innerHTML
= document.getElementById("result").innerHTML + `<h1>[1++씩 증가num0++]${num0}</h1>`;


//초기화
result = 0;

let num00 = 7;


result = num00 --;

console.log(`${result}`)
document.getElementById("result").innerHTML
= document.getElementById("result").innerHTML + `<h1>[1--씩 감소]${result}<h1>`;

console.log(`${num00}`)
document.getElementById("result").innerHTML
= document.getElementById("result").innerHTML + `<h1>[1-- 씩 감소num00--]${num00}</h1>`;
