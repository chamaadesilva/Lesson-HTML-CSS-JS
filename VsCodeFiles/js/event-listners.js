// 1.click event
document.getElementById('btnAdd').addEventListener('click',function(){
    //console.log('Added to cart')
    alert('Added to cart')
})

//2. mouseHover
document.getElementById('box').addEventListener('mouseover',function(){
    console.log('Mouse over...')
    box.style.backgroundColor = 'red'
})


// 3.mouseOut event
document.getElementById('box').addEventListener('mouseout',function(){
    console.log('mouse out...')
    box.style.backgroundColor = 'green'
})


// 4.keydown event
let usernameField = document.getElementById('userName')
usernameField.addEventListener('keydown', event =>{
    console.log('key Down.....'+ event.key)


})


// 5.keyup event
usernameField.addEventListener('keyup',event =>{
    console.log('key Up....' + event.key)
})


// 6.Submit event
document.getElementById('myform').addEventListener('submit',(event) =>{
    event.preventDefault()
    console.log('Form Submitted')
})


