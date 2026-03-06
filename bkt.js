let Email=document.getElementById("email");
let Password=document.getElementById("password");
let rePassword=document.getElementById("check-password");


let buttonSubmit=document.getElementById("button");
buttonSubmit.addEventListener("click",(e)=>{
    let valueEmail=Email.value;
    let valuePassword=Password.value;
    let valueRePassword=rePassword.value;
    let user={
        email:valueEmail,
        password:valuePassword,
        rePassword:valueRePassword,
    };
    
    console.log(user);
    Email.value="";
    Password.value="";
    rePassword.value="";
});
