document.querySelector("#btn2").addEventListener("click",google);
document.querySelector("#btn3").addEventListener("click",register);
document.querySelector("#btn").addEventListener("click",login);


var registeredUserdata = JSON.parse(localStorage.getItem("registeredUserdata"))||[];

function register(event){
    event.preventDefault();
    var Email = document.querySelector("#Email").value;
    // var Password = document.querySelector(".password");
    // Password.setAttribute("value","12345");
    console.log(Email);
    
    var obj={
        emailid:Email,
        // password:Password,
    }
    registeredUserdata.push(obj);
    localStorage.setItem("registeredUserdata",JSON.stringify(registeredUserdata));
    // window.loction.href="login.html";

}

function login(){
    var email= document.querySelector(".Email").value;
    // var pass = document.querySelector("#password").value;

    if(email =="admin"){
        window.location.href = Admin.html;
    }
    else{
        var isUser=false;
        registeredUserdata.map(function(elem){
            if(elem.emailid==email){
                // console.log(elem);
               isUser=true
                // break;
            }
        })
    }
    if(isUser==true){
        alert("login Successful");
        window.location.href="index.html";
      
    }
    else{
        alert("check the credentials");
      
    }
}


function google(){
    window.location.href="https://accounts.google.com/signin/v2/identifier?hl=en&continue=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fu%2F0%2Ffolders%2F1P1Fik2v6GObfMb8K9yrB2YmKbUo7PP6q&service=writely&ec=GAlAMQ&flowName=GlifWebSignIn&flowEntry=AddSession";
}