//There are 6 types in javascript

// 1.String
let firstName = "Kamal"
console.log("Type of first name",typeof firstName);

// 2.Numbers
let age = 30;
console.log("Type of age",typeof age);
let distance = 3.25
console.log("Type of distance",typeof distance);

//3.Boolean
let isAdded = true
console.log("Type of isAdded",typeof isAdded);
let isDeleted = false
console.log("Type of isDeleted",typeof isDeleted);

//4.Undefined
let address;
console.log("Type of address",typeof address);

let email = undefined
console.log("type of email",typeof email);

//5.Null-reperesent the intentional absence of any object value.It is a primitive value 
let phoneNumber = null
console.log("Types of phonenumbber",typeof phoneNumber);

//6.Symbol -introduced in ECMAScript 6(ES6),symbols are unique and imutable value
  let symbol = Symbol('First Name')
  console.log('Type of Symbol',typeof symbol);

  // 7. bigInt -- loku numbers wlt agata n akura dala use karanna puluwan.
  const number =2432435346546757658n
  const num2 = 100

  const result = number + BigInt(num2)
  console.log('Result : ',result)
  // normal int value ekak unath bigint wlt convert krla bigint ekkt  ekathu karanna puluwan..
  // non premitive - object ,functions ,array