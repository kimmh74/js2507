
//선언부
var d = document
let num1 = 3;
let num2 = 5;
let result

// 덧셈
result = num1 + num2
d.getElementById("result1").innerHTML += `<b>${result}</b>`  //innerHTML은 id html덥어쒸우기
// innerHTML = 값과..... innderHTML += 값을 비교하여 주시기 바랍니다.


//뺄셈
result = num2 - num1
d.getElementById("result2").innerHTML += `<b>${result}</b>`

//곱셈
result = num1 * num2
d.getElementById("result3").innerHTML += `<b>${result}</b>`

//나눗셈
result = num2 / num1
d.getElementById("result4").innerHTML += `<b>${result.toFixed(4)}</b>`

//나머지
result = (num2 % num1).toFixed(2)
d.getElementById("result5").innerHTML += `<b>${result}</b>`

//++선행
result = ++num2
d.getElementById("result6").innerHTML += `<b>${result}</b>`

//--선행
result = --num1
d.getElementById("result7").innerHTML += `<b>${result}</b>`

//후행++
result = num2++
d.getElementById("result8").innerHTML += `<b>${result}</b>`

//후행--
result = num2--
d.getElementById("result9").innerHTML += `<b>${result}</b>`



//선언부
let num01 = 5; let num02 = 2; let num03 = 1; let num04 = 10

//++선행(num01)
result = ++num01
d.getElementById("result10").innerHTML=`<b>결과는${result}</b>.변수는 <i>${num01}</i>`

//11선행(num02)
result = --num02
d.getElementById("result11").innerHTML=`<b>결과는${result}</b>.변수는 <i>${num02}</i>`

//후행++(num03)
result = num03++
d.getElementById("result12").innerHTML=`<b>결과는${result}</b>.변수는 <i>${num03}</i>`

//후행--(num04)
result = num04--
d.getElementById("result13").innerHTML=`<b>결과는${result}</b>.변수는 <i>${num04}</i>`