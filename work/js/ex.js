//1. concat : "*** 고객님 안녕하십니까"
// let myName = ["김","명","횡","고객님"]
// let hi = ["안녕하십니까"]  --------------- 강사님 설정

let myName = ["김","명","횡"]
let hi = ["고객님", "안녕하십니까"]


let result1 = myName.concat(hi)
// let result1 = result.join('')
console.log(`concat인사말 배열합치기 : ${result1}`)
document.writeln(`concat인사말 배열합치기 : ${result1}<br>`)
document.writeln(`<hr>`)

//2. join : "*_*_*_고객님 안녕하심니까"

let result2 = result1.join("_") 
document.writeln(`join_연결 :${result2}<br>`)
document.writeln(`<hr>`)
//3. push : "*_*_*_고객님 안녕하심니까!"

let result3 = result1.push("!")
document.writeln(`push느낌추가 : ${result1}<br>`)
document.writeln(`<hr>`)


//4. unshift : "수원역지점 *_*_*_고객님 안녕하심니까!"
let result4 = result1.unshift("수원역지점")
document.writeln(`unshift 추가 :${result1}<br>`)
document.writeln(`<hr>`)
//5. pop : "수원역지점 *_*_*_고객님 안녕하심니까" // ! 지우기
let result5 = result1.pop()
document.writeln(`pop 뒤에 삭제:${result1}<br>`)
document.writeln(`<hr>`)
//6. shift : "*_*_*_고객님 안녕하심니까"
let result6 = result1.shift()
document.writeln(`shift 앞에 삭제 :${result1}<br>`)
document.writeln(`<hr>`)
//7. splice : "*_*_*_고객님 오늘도 좋은하루 안녕하심니까"
let result7 = result1.splice(4,0,"오늘도 좋은하루")
document.writeln(`splice 중간삽입 :${result1}<br>`)
document.writeln(`<hr>`)

//8. slice : "*_*_*"
let result8 = result1.slice(0,3)
document.writeln(`slice 이름 잘라오기 :${result8}<br>`)
document.writeln(`<hr>`)