let myVar
//함수 정의하기
function addNumber() {
    let num1 = 2
    let num2 = 3
    let sum = num1 + num2
    myVar = sum
    var test = 5
    alert(`결과값:${num1 + num2}`)
    // alert(`결과값:${sum}`)
    console.log(`결과값:${num1 + num2}`)
    document.writeln(`결과값 : ${num1+num2}`)
}


//var 함수단위 
//let 중괄호 
//함수call : 사용할때는 함수를 부른다.
//'그가 나의 이름을 불러주었을때 나는 그에게로 가서 꽃이 되었다.'
//호이스팅 기술

addNumber()
// console.log(`결과값_2:${num1 + num2}`)
// console.log(`결과값_2222:${test}`)
console.log(`결과값_4444:${myVar}`)
// 