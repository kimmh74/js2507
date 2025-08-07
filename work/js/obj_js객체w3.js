
const person = {
    myName: "김명횡",
    age: 30,
    eyeColor: "brown"
}
document.writeln(JSON.stringify(person));

//person.myName

//------------------------------------------
//const person2 = new object()

const person2 = new Object(
    {
        myName: "김명횡2",
        age: 45,
        eyeColor: "green"
    }
)
document.writeln(JSON.stringify(person2));
//

//--------------------------------------

const person3 = {
    myName: "김명횡3",
    age: 50,
    eyeColor: "green_white"
}
//새로운obj
const man = Object.create(person3)
//man.myName
man.myName = "피터"
man.etc = "기타"
document.writeln(JSON.stringify(person3));


//==========[fromEntries]==[][]=======================

const fruits = [
    ["apple", 300],
    ["pears", 900],
    ["bananas", 500]
]
// [string, 숫자]

const myObj = Object.fromEntries(fruits);
myObj.etc = "etc~"

document.writeln(JSON.stringify(fruits));
//


//Object 대문자시작 - class성격/속성 (붕어 빵틀 실체없음)
//person 



//----------assign(집어넣는다.)---------------------

const person5 = {
    myName: "명횡이",
    age: 15,
    eyeColor: "blue"
};
const person5_2 = {
    myName: "호동이,,",
    age: 60
}
Object.assign(person5, person5_2)
//assing(){행위을 정의해준다}메소드
//person5의 값이 변경됨을 확인할 수 있다.
document.writeln(JSON.stringify(person5));

//---------------this--------------
//클래스: 기획서(설계도)
//Persom9 대문자=>객체공장 : 클래스가 오브젝트를 만들어낼때,
//기획서(설계도) 클래스를 통해서 오브젝트를 만들때, 생성자
function Person9(first, last, age, eye) {
    //this 안...==>> Person9.firstName
    this.firstName = first
    this.lastName = last
    this.age = age
    this.eyeColor = eye
}
//this ==>윈도우 밖에서는 달라짐...
const man5 = new Person9("명횡", "김", 20, "red")
document.writeln(JSON.stringify(man5));
//Person9.firstName

//클래스:책

function Book(tit,sub,price,page){
    this.title = tit
    this.subj = sub
    this.price = price
    this.page = page
}
const book1 = new Book("리액트","한뱇",33000,300)
const book2 = new Book("리액트2","한뱇",33000,300)
const book3 = new Book("리액트3","한뱇",33000,300)
const book4 = new Book("리액트4","한뱇",33000,300)
const book5 = new Book("리액트5","한뱇",33000,300)

document.writeln(JSON.stringify(book5));
//콘솔 boo4.title= title변경가능