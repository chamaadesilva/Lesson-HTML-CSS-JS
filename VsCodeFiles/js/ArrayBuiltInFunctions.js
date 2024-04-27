let studentNames = ['Amuka','Dumuka','Amal','Dumal'];
console.log('Student Array: ',studentNames)

//built in functions

console.log('============')
//1.push-adds one or more elements to the end of array

studentNames.push('anoja','kumari');
//Array eke anthimata thawa values add karanna puluwan push kiana eken.
console.log('Student Array After Push :',studentNames)


//2.pop

// array eke last Element eka remove wenawa wagema a value eka me method eka haraha return karanawa.
console.log("======== Pop =======")

let poppedName = studentNames.pop()
console.log('Popped Name :', poppedName)
console.log('Array after Pop :', studentNames)
console.log('last index After shifted :',studentNames[5])

//3. shift

// array eke first Element eka remove wenawa wagema a value eka me method eka haraha return karanawa.
console.log('======= Shift =======')

let shiftedName = studentNames.shift()
console.log('Shifted Name :',shiftedName)
console.log('Array After Shifted :' , studentNames)
console.log('0 index After shifted :',studentNames[0])

//4.unshift
//unshift eken dena values tika set wenne array eke 0 index eke idan.mulain thamai set wenne..thiyena values tika passata yanawa.
console.log('======== unshift ========')

studentNames.unshift('Irosh','Darshan')
console.log('after unshifted :',studentNames)

//5. concat

//Arrays dekak ho wedi ganak concat karanna puluwan meken.concat karana arrays wlt haaniyak nae..concat wela enne aluthma array ekak.mwthanadi nm okkoma arrays 3k thiyenawa ethakota.
console.log('======== concat =======')

let maleNames = ['kavindu','mahela','wanindu']
let femaleNames = ['gayani','shanintha','dinaya']

// let AllNames = maleNames.concat(femaleNames)
// console.log(AllNames)

console.log('All Names : ' , maleNames.concat(femaleNames))

//6. slice
// me array eken thawa array ekak hadanawa..ekata  api dena index eke idan thiyena values tika thamai assign kara ganne.
console.log('======== Slice ========')

let fruits = ['apple','grapes','Banana','Mango']
console.log('Array After Slice From 0 Index :',fruits.slice(0))
console.log('Array After Slice From 1 Index :',fruits.slice(1))
console.log('Array After Slice From 2 Index :',fruits.slice(2))
console.log('Array After Slice From 3 Index :',fruits.slice(3))

console.log('fruits Array After Slice : ',fruits)
//mul array eka a widiytm thiyenawa.

//7.splice

console.log('======== Splice ========')
let fruitsArray = ['apple','grapes','Banana','Mango']
fruitsArray.splice(2,1,'Avacado')
//2 kianne mona index ekada kiana eka..1 kianne ethana idn elements keeyak remove wela aluth namen replace wenna onada kiala.
//1 wenuwata 2 dunnoth banana mango dekama ain wela thun weni nama widiyt Avacado enawa.

console.log('After Splice Fruits Array :', fruitsArray)


//8.reverse

console.log('========= Reverse =========')

let letters = ['a','b','c','d','e','f']
console.log('Original Array :', letters)
let rev = letters.reverse()
console.log('Reversed Array :',rev)

//9 . sort

console.log('========= Sort =========')
let numbers = ['20','40','10','05','90']

console.log('Original Array :', numbers)
console.log('Array After Sort : ', numbers.sort()) // Assending order
console.log('Array After Sort : ', numbers.sort().reverse()) // Desending order
//console.log('Array After Sort : ', numbers.sort(function (a, b) { return a - b }))

let stringArr = ['Amala','Kamal','dog',100]

// ekama array eke data types kihipayaka values thinna puluwan.
console.log('stringArr :',stringArr)
console.log('stringArr 0 index :' , typeof stringArr[0])
console.log('stringArr 3 index :' , typeof stringArr[3])