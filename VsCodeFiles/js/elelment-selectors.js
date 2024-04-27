console.log("Hello Guys !!!")

// ekama id eka dekakata dunnoth meken ganne hambena palaweni id eka

// id selectoir
let joinBtn = document.getElementById('btnJoin')
console.log(joinBtn)
joinBtn.style.backgroundColor = 'blue'
joinBtn.style.color = 'white'
joinBtn.style.width = '150px'
joinBtn.style.height = '40px'

    //button click event listner
joinBtn.addEventListener('click',let = () => {
    // console.log('Join Button Eka Click Kalo !!!')

    
    alert('Join Button Eka Click Kalo !!!') // msg eka alert ekak washayen eno..
})

let contact = document.getElementById('btnContact')
console.log(contact)



//class name selector
let boxi = document.getElementsByClassName('box')
console.log(boxi)

//class name eken alladdi ekama name eka thina set ekama pennannawa

// tag selector

let heading1 = document.getElementsByTagName('h1')
console.log(heading1)
// a tag eken thina okkoma elements tika pennanawa..lenth kiala enne thina elements gana

let heading2 = document.getElementsByTagName('h2')
console.log(heading2)
// mehema tag ekakwath naethnam length eka 0 widiyt enawa.


//query Selector

let btn =  document.querySelector('#btnContact')
console.log(btn)
//mekedi allaganna ona element eke id eka me brackets aehule # tag ekath ekka denna one.3 naethi unoth a value eka null widiyt pennanne.. a kianne ehema ekak hoya ganna nelu.

let test = document.querySelector('.testDiv') // methana class eken allana nisa . demme..meketh dot eka nethnam null.
console.log(test)

let box = document.querySelector('.box')
console.log(box)
//methnadi box kiala class name eka thina elements kiyak thibunath mulinma hambena kenawa thmai ganne.../return wenne.


let bxs = document.querySelectorAll('.box')
console.log(bxs)
//meken ekama class name eka thina elements okkoma return krnawa.

let bb = document.querySelector('#container .box')
console.log(bb)
//container kiana id eken thina palaweni box class element eka return kara ganne meken..a id eken thina box class name element okkoma gannawa nm aqueryselectAll denne.

