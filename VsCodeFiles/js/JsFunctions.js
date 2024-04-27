
function sayHello(){
    console.log('Hello World !!!')
}
//basic function Declaration(Without parameters)

sayHello();
//method ekak calla kaloth witharai  a method eke thina ewa weda karanne
//Js type safty naethi nisa paramaters wlt data type ona nae.
function greeting(name){
    console.log('Good Morning ' + name)
    return name +' Gona'
    //return karaganne mehema..function ekt return type onath nae.
    //meke return statement eka naethuwa pahalin return ekak console.login deela thiye nm print wenne undefined..return wenne naethi nisa monawath.

}

 console.log(greeting('Kamal'))
greeting() // argument ekak nodunnoth undefined kiala enne.

greeting('kamal','Amal')
//method eke thina paramaeters gaanata witharak values set wenawa.

let realname = greeting(45)
console.log(realname)
//mona data type ekak pass kalath eya eka gannawa..

