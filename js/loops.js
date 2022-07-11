//var i=0;
//while loop
//while(i<=10){
  //  console.log("the value of is i:",i);
    //i++;
//}
//do while

//do{
    //console.log("the value of is i:",i);
  //  i++;
//} while(i<=20);

//for (var i= 0; i <=10; i++) {
//    console.log(i);
    
//}

//console.time("brands")
//var brands=["poco","dell","apple","1+"];
//brands[0]
/*var brandslength= brands.length;
for (var i= 0; i <brandslength ; i++) {
   console.log("brand name is:",brands[i])
    
}
console.timeEnd("brands")


console.time("student")
var student=["aman","pandey","shady"];
for (var i=0;i<student.length;i++){
    console.log("the names are:",student[i])
}

console.timeEnd("student")*/


/*for (brand of brands){
    console.log(brand)
}

for (brand in brands){
    console.log(brands[brand])
}*/


/*var person={
  name:"aman",
  age:23,
  mail:"nknknk@dcd"
}

for(prop in persons){
  console.log(prop, persons[prop])
}*/

var persons=[
  {
    name:"aman",
    age:23,
    mail:"sdncjdnc"
  },
  {
    name:"ree",
    age:33,
    mail:"xscxscxscsd"
  },
  {
    name:"mlml",
    age:33,
    mail:"kfvbmfkfl"
  }
]
/*for(prop in persons){
  console.log(prop, persons[prop])
}


for(prop of persons){
  console.log(prop.name)
  console.log(prop.age)
  console.log(prop.mail)
}*/

for(prop of persons){
  for(key in prop)
  console.log(key ,prop[key])
}