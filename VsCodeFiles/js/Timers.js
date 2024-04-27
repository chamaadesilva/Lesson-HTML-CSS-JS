//1.SetTimeOut - executes a function once after a specific delay
//setTimer(callBack,1000)
console.log('SetTimeOut')
console.log(" ")
let timeOut = setTimeout( () => { //setTimeout(function (){}) --. meka arrow function krla thamai dan thinne
    console.log('deela thiyena time period eka waiting innawa me function eka trigger karanna kalin')
},5000)

console.log(" ")

clearTimeout(timeOut)

console.log("After Clear Time Out")
//clear time out eken set time out function ekama clear krla danawa..ethakota eke thina kisi deyak print wenne nae.
//2.SetInterval
console.log(" ")
console.log('SetInterval')
console.log(" ")
//setInterval(callback,interval)
let interval = setInterval(() => {
    console.log('deela thiyena time eke intervals aragena aye aye print wenawa meka..nawathinne nae habai')
}, 1000);

console.log(" ")
clearInterval(interval);
console.log("After Clear Interval..ClearTimeOut Wagema thamai")

// let greet = () =>{
//     console.log('Good Morning !')
// }

// setInterval(greet, 1000);

//arrow functions hoisting wenne nae..hiosting wenna ona nm function kiana keyword eken definr karannama ona.

// wenama thiyena function ekak unath me setTimeout ,SetIntervl dektm replace karann puluwam..eka aethulema anonymous functions hadanna onama nae.