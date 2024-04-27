let box = document.getElementById('box')
//console.log(box)

// 1. innerHTML - sets of returns the HTML content(including HTML tags)Of an element
console.log(box.innerHTML)

box.innerHTML = '<span>kjbdfh</span>'

console.log(box.innerHTML)

box.innerHTML = 'Hello World'

console.log(box.innerHTML)

// 2.textContent - sets or returns the text content of an element, EXCLUDING HTML tags
console.log(box.textContent)
box.textContent = 'Kamal perera'
console.log(box.textContent)


// 3.innerText - Same as textContent, but,innerText shows as DOM renders while textContent shows only 
console.log(box.innerText)
box.innerText = 'Nimal Silva'
console.log(box.innerText)


// 4.Applying Styles
let image = document.getElementById('img')
image.style.width ='100px'
image.style.height = '100px'


// 5.setAttribute
image.setAttribute('src','../Assets/bookadd.jpg')


// 6.ClassList - Allows you to manupilate calsses on an element
console.log(box.classList)
box.classList.add('ccc')
console.log(box.classList)

box.classList.replace('aaa','ddd')

// 7.Append & apppendChild
let parentDiv = document.createElement('div')
box.append(parentDiv)

let childDiv = document.createElement('div')
childDiv.setAttribute('attr','new')
parentDiv.appendChild(childDiv)


// 8.remove & removeChild
parentDiv.removeChild(childDiv)
parentDiv.remove()

 


