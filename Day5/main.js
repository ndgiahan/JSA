
var nameInp = document.getElementById("userNameInp");
var passInp = document.getElementById("passInp");

 function InRaManHinh() {
    localStorage.setItem('TenDN', nameInp.value);
    localStorage.setItem('MatKhau', passInp.value);
    document.getElementById("userNameOutp").innerHTML = localStorage.getItem('TenDN');
    document.getElementById("passOutp").innerHTML = localStorage.getItem('MatKhau')
 }