//const use karanne variable ekakata eka initialize karata passe aye values assign wenne naethnam witharai..mekath final keyword eka wage..
//let use kalama a variable scope eka aethule witharai access karanna puluwan.
//var use kaloth a function eke ona thenaka idan access karanna puluwan.
//let - block scope (const ekath block scope)
//var - function Scope -- function ekak aethule hdna eka
//var walin variable ekak heduwoth windows walinuth access karanna puluwan..windows kianne web page wla inspect kalama thina global object ekak..
//let walin heduwoth windows object eken access karanna bae.



// function iterateNumbers(){
//     for(let i; i<10;i++){
//         console.log('for loop eka aethule me : ',i)
//     }
//     console.log('function eka thula for loop eken pita : ',i)
//     //error
// }

function iterateNumbers(){
    for(var i =0; i<10;i++){
        console.log('for loop eka aethule me : ',i)
    }
    console.log('function eka thula for loop eken pita : ' + i)
    //error
}

iterateNumbers()