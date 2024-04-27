let interval = setInterval(()=>{
console.log('Abcd')
}, 500);

setTimeout( () =>{clearInterval(interval)},5000)
