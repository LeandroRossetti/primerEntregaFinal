
 let inputEmail=document.getElementById("email");
 let inputPassword=document.getElementById("password");
 let inputName=document.getElementById("name");
 


 let btnRegister= document.getElementById("register")
 btnRegister.addEventListener("click",saveDate)

 function saveDate(){
    if (inputEmail.value==localStorage.getItem('nameEmail')) {
        alert("Ya te encuentas registrado");
        
    }
    else

  localStorage.setItem('nameEmail',inputEmail.value)
  localStorage.setItem('password',inputPassword.value)
  alert("Registro exitoso, inicia sesion con tus datos")
 }



let btnLogin= document.getElementById("login")
 btnLogin.addEventListener("click",checkLogin)
 
 function checkLogin(){
    if (inputEmail.value==localStorage.getItem('nameEmail')&&) {
        alert('Redirigiendo...')
        location.href="./index.html";
     
        
    }
    else
    alert('Email sin registrar')
 }

 let btnGuest= document.getElementById("invitado")
 btnGuest.addEventListener("click",guest)
 function guest(){
    location.href="./index.html";

 }