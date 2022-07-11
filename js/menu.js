var btn=document.getElementById("btn");
var navitems=["home","about","service","faq","contact"]
var navitemsLength=navitems.length;

function generatemenu(navitems){
var navel=document.getElementById("menu");
var output="<ul>";
for(navitem of navitems){
    output+= `<li> <a href="${navitem}.html">${navitem}</a></li>`
    
}
output+="<ul>"
console.log(output)
navel.innerHTML=output;
}
function createmenu(){
 generatemenu(navitems)   
}
btn.addEventListener("click",createmenu);

var promise=new promise(function(resolve,reject){
    try{
        resolve(navitems)
    } catch(error){
        reject(error)
    }
});
promise.then((navitems)=>{
    generatemenu(navitems)
})

