let form=document.getElementById("posts")

var api_url="https://jsonplaceholder.typicode.com/posts"
form.addEventListener("submit",async function(e){
    e.preventDefault();
    var userid =form.elements["user"].value;
    var title=form.elements["title"].value;
    var body=form.elements["body"].value;

    let formdata={
        userid,
        title,
        body   
    }
    const response= await fetch(api_url,{
        method : 'POST' ,
        header: {
            'content-type':'application' 
               },
               body: JSON.stringify(formdata)
    })
console.log(response.json)
})