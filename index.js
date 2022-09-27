const email=document.getElementById('form1Example13');
const passWord=document.getElementById('form1Example23');

document.getElementById('submit').addEventListener('click',()=>{
    fetch("https://localhost:5000/authUser/signin", {
     
        // Adding method type
        method: "POST",
         
        // Adding body or contents to send
        body: JSON.stringify({
           email:email.value,
           password:passWord
        }),
         
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
     
    // Converting to JSON
    .then(response => response.json())
     
    // Displaying results to console
    .then(json => console.log(json));



})