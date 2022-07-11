var a=10;
/*function fn(){
    console.log("this is a fucntion")
}
// calling the function
fn()

//return from funcvtion
function fn(){
    return"this a fucntion";
}
console.log(fn())*/

//passing para to funct

// function sum(a,b){
//     var total=a+b;
//     return total;
// }
//calling without fucntions
// sum
// ƒ sum(a,b){
//     var total=a+b;
//     return total;
// }
// var x(10,20);
// var x=sum
// undefined
// x(10,20)
// 30


//built in  argument array inside the functions
function getcartTotal(){
   // console.log(arguments)
    var total=0;
    for(price of arguments){
        total+=price
    }
    return total;

}

//hoisting
// welcome()
// function welcome(){
//     console.log("welcome")
// }

// //declare in literal way
// var greet=function(){
//     console.log("greet")
// }
// greet()

//self calling function
(function(name){
    console.log(name,"self invoking")
})("aman")

function welcome(){
    return"welcome";
    //console.log("this is the next line")
}