// var name="aman";

// let lang="javascript";
// const data="english";

// const menu=["home","about"]

// menu.push("services")

// function welcome(){
//     console.log("welcome here")
//}

// let welcome=()=>{console.log("welcome here")
// }
let welcome=() =>"welcome here"

//let sum=(a,b) =>a+b;
let greet=name => `welcome to ${name}`;


//welcome()

// rest and spread operator


//var nums=[12,45,38,923,98]

function sum(...data){
    var total=0;
    for(price of data){
        total+=price
    }
    return total;
}

var nums=[12,45,38,923,98]
let [a, ...b]=nums;

var person={
    name:"aman",
    email:"vsvv@dfvfd"

}

var {name : fname,email}=person
console.log(fname)
console.log(email)


