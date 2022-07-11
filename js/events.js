// function welcome(){
//     alert("you ")
// }

// var btn=document.getElementById("clickme");
// //btn.onclick=welcome;

// //event delegation
// //element.addEventListener(eventname,event handler)
// btn.addEventListener("click",welcome);


function taskone(e){
    console.log("taskone")
    e.preventDefault()
}

function tasktwo(){
    console.log("task teo")
}
function parentHandler(ev){
    console.log("this is parent ")
    //console.log(ev.target)
    console.log(ev.cuurentTarget)
}
function childHandler(){
    console.log("this is child")
}

var p1=document.getElementById("parent");
var p2=document.getElementById("parent1");
var c1=document.getElementById("child");
var c2=document.getElementById("child1");

p1.addEventListener("click",parentHandler)

// c1.addEventListener("click",parentHandler)
// c1.addEventListener("click",taskone)
// c1.addEventListener("click",tasktwo)

// p2.addEventListener("click",parentHandler,true)
// c2.addEventListener("click",childHandler,true)
var anc=document.getElementById("anc");
anc.addEventListener("click",taskone);



