//single line comment
//alert("welcome to javascript");

/* multi line comment*/


//primitive data types

//string "java script"
//number 12000.98
//boolean true/false
undefined
null


//name -> identifier(all variable name)
//var is keyword to declare any variable

var name="java script";
var price= 90;

//var 8name="";//not correct
//var @name="";//not correct
// var firstName="";


//alert(name);
//console.log(name);

var brand , price ,battery , category , ram , processor , warranty , main , series;

series="13pro ";
brand="iphone";
//main= brand +" "+ series;
category="mobile";
price= 12000;
ram= "8 GB";
processor="qualcomm snapdragon processor";
battery=" 45000 mah";
warranty="2 years ";


// template literals
var main=`welcome${brand} ${series}`;

//complex datatypes

//arrays

var students=["aman",{name:"aman"},23,null,main,[4,2,1,[72,007]]];
console.log(students[1].name);

//object data type

var dog={
    color:"goldenbrown",
    height:"2ft",
    work:["loyalty","play","eats"],
    address:{
        city:"banglore",
        met:function(){}
    },
    runs:function(){
        console.log("dog runs")
    },
    eats:function(){
        console.log("dog eats")
    }
}

//Objectname.propertyname
console.log(dog.color);
console.log(dog.work);

//functions
//function fn(){
//    var lang="english";
//    console.log(lang);
//}
//fn()

function cook(param1, param2, param3){
    var result= `by using ${param1} and ${param2} and ${param3} i made receipe`
    return result;
}
console.log(cook("rice","chicken","masala"));
var res=cook("rice","chicken","masala")

function sum(a,b){
    return a+b;

}
sum(20,39)
console.log(sum);




