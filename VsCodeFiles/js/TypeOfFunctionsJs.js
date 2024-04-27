// 1. Named of functions
//normal type ewa

console.log('=========Named Functions===========')
function addNumber(num1 ,num2){
return num1+ num2
}

console.log(addNumber(10,20))
console.log(' ')

//2.Anonymous functions
//namak naethi functions


console.log('========== Anonymous Functions ==========')
let multiplyNumbers = function(num1,num2){
   return  num1* num2
}

console.log(multiplyNumbers(10,5))
console.log(' ')


//3.Arrow Functions

// godak functions apita arrow functions bawata path kara ganna puluwan
console.log('===========Arrow Functions==========')

//function eke body eka line 1ta wedi nm mehema thamai danne

let substractNumbers = (num1,num2) => {
    console.log('Inside Arrow Function')
    return num2 - num1
}

//function eke body eka eka line ekak witharai nm mehema curly brackets nethuwa danna puluwam..return keyword ekath ain krnawa.

let withoutcurlyBrace = (num1,num2) => num2 - num1

// annonymous function eke function key word eka ain krla parameters wlin passe => (arrow sign ) eka denawa.dan eka arrow function ekk..
console.log(substractNumbers(34,100))
console.log(withoutcurlyBrace(20,40))
console.log(' ')

//4.constructor function
console.log('========== Constructor Functions ==========')

//js wldi multiple constructors nae..hadanna puluwn..habai api kochchara constructorla heduwath anthimt hdna constructor eka thamai js use karanne.
function Student(name,age,email){
    this.name = name
    this.age = age
    this.email = email
}

let student1 = new Student('Amal',20,'amalBimal@gmail.com')
let student2 = new Student('Kamal',30)
//mekedi eka value ekak hari dunne naethuwa hitiyoth error enne nae..eka undefined widiyt thiya gannawa js wladi.

console.log(student1)
console.log(student2)
console.log(' ')

//5. Callback functions
console.log('========== CallBack Functions ==========')

//meka dynamilcally type chnage wena nisa primitive types wla eka ona ekak pass karanna puluwan ne..non premitive walinuth (object,array,function) danna puluwan.
function myFunction(CallBack){

    console.log(typeof CallBack)
    if(typeof CallBack === 'function'){
        CallBack()
        return
    }
    console.log(CallBack)
}

let person = {
    name: 'Kumara',
    age: 40
}
let numberArray =[1,2,3,4,5]

function tempFunction(){
    console.log('Tempory function')
}

myFunction(person)
console.log(' ')
myFunction(numberArray)
console.log(' ')
myFunction(tempFunction)
console.log(' ')
console.log(' ')


//6. recursive functions
// method ekak aethule a method ekama aye aye call wena eka
console.log('========== Recursive Functions ==========')
function factorial(n){
    if(n === 0 ){
        return 1
    }
    return n* (factorial(n-1))
}
console.log(factorial(5))
console.log(' ')
