var a=10; //global variable
function sum(){
    var b=20; //private variable without var it will be global
    return a+b
}
sum()
//console.log(b)

//lexical scope

var name="aman";
function parent(){
    var x=23;
    function child(){
        return x+20;
    }
    return child
}

var calc=parent()
calc()
