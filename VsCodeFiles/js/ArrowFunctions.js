function addNumbers(num1,num2){
    return num1 + num2
}

// const addNumbersArrowFunc = (num1,num2) => {
//    return num1 + num2
// }


const addNumbersArrowFunc = (num1,num2) => num1 + num2
//meka lambda expression wge

const sayHello = () => "Hello World"
//without parameters Arrow Function

console.log(' Function : '+ addNumbers(10,20))
console.log(' Arrow Function : '+ addNumbersArrowFunc(10,20))
console.log(sayHello())

// converting named functions to arrow functions

console.log('====== named function => Arrow function =======')
let withoutcurlyBrace = (num1,num2) => num2 - num1
console.log(withoutcurlyBrace(23,70))

console.log('============')

// convert annonymous to arro function
console.log('====== Annonymous function => Arrow function =======')
let Addnumbers = (num1,num2) => num1+num2
console.log(Addnumbers(10,40))
console.log('============')

//convert  constructor functions to arrow function
// console.log('====== Constructor function => Arrow function =======')
// let Student = (name,age,email) => {
//     this.name = name 
//     this.age = age
//     this.email = email
// }

// // constructor function ekak widiyt use karanawa nm eka loweth arrow function kranna epa..
// //eke syntax awlak naethi unata ,arrow function wlt this & new kiana keywords support karanne nae..eka nisa eka karannama epa

// let student1 = new Student('Amal',20,'amalBimal@gmail.com')
// let student2 = new Student('Kamal',30)

// console.log(student1)
// console.log(student2)
// console.log('============')

//converting to callback function to arrow function 
console.log('====== CallBack function => Arrow function =======')


// call back ekak arrow function karaddi parameter thiyenne ekai nm brackets nethuwa nikm parameter name eka witharak denna puluwan..habai parameters dekak ho wedi ganak thiye nm brackets aniwaryayi.
// a wagema parameter ekakwath naethnam emptr brackets deka aniwaryayi.

 let myFunction = (CallBack) => {

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

let tempFunction = () => {
    console.log('Tempory function')
}

myFunction(person)
console.log(' ')
myFunction(numberArray)
console.log(' ')
myFunction(tempFunction)
console.log(' ')
console.log(' ')


