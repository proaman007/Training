// var users=[
//     {name:"aman",mail:"df@b"},
//     {name:"chaubey",mail:"sdcfv@km"}
// ]
// var promise=new Promise(function(resolve,reject){
//     try{
//         resolve(users)
//     } catch(error){
//         reject(error)
//     }
// });

//var url="data.json";
var api="https://jsonplaceholder.typicode.com/todos";

fetch(api)
  .then(response => response.json())
  .then(json => console.log(json))






fetch(api)
.then(res=>res.json())
.then((data)=>{
    displayUsersGrid(data)
})
.catch((err)=>console.log(err))


// promise
//     .then((res)=>{
//         displayUsersGrid(res)
//     })
//     .catch((err)=>console.log(err))

    function displayUsersGrid(users){
        // dom operations
        let usersE1=document.getElementById('users');

        let output="";
        for(user of users){
            let statusClass = user.completed ? "success" : "error"
            output+=`<div class="${user.complete}">
                   <div>${user.id}</div>
                   <div>${user.completed}</div> 
                   </div>`
        }
        usersE1.innerHTML=output;
    }