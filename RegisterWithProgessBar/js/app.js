const Age=document.querySelector("#age");
const email =document.querySelector("#email");
const psw1 =document.querySelector("#psw1");
const psw2 =document.querySelector("#psw2");



function boxWarning(box){
    box.classList.add("BoxWarning");
    setTimeout(()=>{
        box.innerText="";
        box.classList.remove("BoxWarning");
          },2500);
      
}


function isEmpty(entries){
if(entries.value.length===0){
    alert(" lütfen zorunlu alanları doldurunuz");
    boxWarning(entries);
}
}


function ageControl(){
    isEmpty(Age);
if(!isNaN(Age)){
    if(Age.value<18){
        alert("18 yaşından küçükler adına hesap açılamaz!!!");
     boxWarning(Age);
    }
}
}


function emailControl(){

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    isEmpty(email);
    if (!emailRegex.test(email.value)) {
        alert("Girilen değer e-posta adresi formatında değildir.");
        boxWarning(email);
      }
}



function passwordControl(){
 

    isEmpty(psw1);
    isEmpty(psw2);
        if(psw1.value!=psw2.value){
           alert("Şifrelerin aynı olması gerekiyor.");
           boxWarning(psw1);
           boxWarning(psw2);
        }
        else{
          alert("Kayıt işlemi başarılı");
        }
    }
  
