var loginform=document.getElementById("loginform");





loginform.addEventListener("submit",function(e){
    e.preventDefault();
    //var uservalue=document.getElementById("username");
    //console.log(uservalue.value)
   // console.log(loginform.elements["username"].value)


    var username=loginform.elements["username"].value;
    var password=loginform.elements["password"].value;


    var logindata={
        username,
        password
    }
    console.log(logindata)
})