let Name=document.querySelector("#name");
let pass=document.querySelector("#pass");
let cont=document.querySelector("#contact");
let email=document.querySelector("#email");
let btn=document.querySelector("button");
let pname=document.querySelector(".pname");
let ppass=document.querySelector(".ppass");
let pnum=document.querySelector(".pnum");
let pemail=document.querySelector(".pemail");
let flag=1;
 function validateform(){
    if(Name.value==""){
        pname.innerHTML="UserName is empty!";
        flag=0;
    }else if(Name.value.length<3){
        pname.innerHTML="username require min 3 char!";
        flag=0;
    }else{
        pname.innerHTML="";
        flag=1;
    }
    if(pass.value==""){
        ppass.innerHTML="Password is empty!";
        flag=0;
    }
    else if(pass.value.length<3){
        ppass.innerHTML="password require min 3 value!";
        flag=0;
    }
    else{
        ppass.innerHTML="";
        flag=1;
    }
    if(cont.value>10 && cont.value<10){
        pnum.innerHTML="Enter valid number!";
        flag=0;
    }
    else if(cont.value=" "){
        pnum.innerHTML="contact Number field is empty";
        flag=0;
    }
    else{
        pnum.innerHTML="";
        flag=1;
    }
    if(email.value==" "){
        pemail.innerHTML="Enter email!";
        flag=0;
    }
    else{
        pemail.innerHTML="";
        flag=1;
    }
    if(flag){
        return true;
    }
    else{
        return false;
    }
 }