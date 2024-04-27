let student = {}
console.log("Student :",student);
console.log("Type of student",typeof student);

student = {

    firstName: "Kamal",
    lastName: "Perera",
    email:"kamalperera@gmail.com",
    phoneNumber:'076788987',
    age:18,
    isRegistered:true

}
console.log("Student :",student);

console.log("Student Email(using dot notation) :",student.email);
console.log("Student Email(using square brackets notation) :",student["email"]);

//using dot notation
student.age = 20
console.log("Student age",student.age);
console.log("Student:",student);


//using square brackets notation
student.age = 18
console.log("Student age",student['age']);
console.log("Student:",student);


//================
console.log('====================')

let person = {
    name: "Kamal",
    age: 20,
    phone: '0762590356',
    greeting: () => {
        console.log("Object ekak Aethule thiyaganna puluwan function ekakuth")
    }
}

 console.log(person.greeting())

 console.log('====================')

 console.log('Iterating over properties')
 console.log('')

 var i =0;
 // i ekak demme meka iterate wena bawa pennanna.methana object eke properties access karanne key eka use karagena
 for(let key in person){
    i++;
    console.log(key + ' : ' + person.key +" " + i)
 }

 console.log("  ")

 console.log(person.age)
 console.log(person['age'])
 //object eke properties access karana normal widi deka

 