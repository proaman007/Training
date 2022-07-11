// var person ={
//     name:"aman",
//     mail:"sfgdgdfs@sd.com",
//     getName:function(){
//         return this.name
//     } ,
//     getmail: function(){
//         return this.mail
//     },
//     setname:function(name){
//         this.name=name
//     },
//     setmail:function(mail){
//         this.mail=mail
//     }
// }

// person.prof="training";
// person.setprofession=function(prof){
//     this.prof=prof
// }

// constructor pattern
// function Laptop(brand,ram){
//     this.brand=brand;
//     this.ram=ram;

//     this.getbrand=function(){
//         return this.brand
//     }
// } 
Laptop.prototype.os="dos";
// let Laptop1= new Laptop("hella","60GB");

function Car(type,wheels,power){
    this.type=type;
    this.wheels=wheels;
    this.power=power;

    this.getType=function(){
        return this.type;
    }
}

let car1=new Car("automatic","4","7000HP");
// let car2=new car("manual","6","6900HP");