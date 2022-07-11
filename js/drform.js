var dform=document.getElementById("drform");
dform.addEventListener("submit",function(e){
    e.preventDefault();
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var DOB=document.getElementById("dbirth").value;
    var DOA=document.getElementById("doa").value;
    var TOA=document.getElementById("toa").value;
    var surgery=document.getElementById("surgery").value;
    var visit=document.getElementById("visit").value;
    var feeling=document.getElementById("experiennxe").value;
    var detail={
        fname,lname,email,phone,DOB,DOA,TOA,surgery,visit,feeling
    }
    console.log(JSON.stringify(detail));

})