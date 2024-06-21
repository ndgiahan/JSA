//Bước 1: Lấy giá trị trong từng ô
var nameInp = document.getElementById("userNameInp");
var passInp = document.getElementById("passInp");

 function InRaManHinh() {
  //Lưu vào local storage bằng cú pháp setItem. TRong đó'TenDN' gọi là key; 'nameInp.value' là biến đã lấy giá trị ở bước 1
    localStorage.setItem('TenDN', nameInp.value);
    localStorage.setItem('MatKhau', passInp.value);
  //Lấy dữ liệu từ local storage in ra màn hình
    document.getElementById("userNameOutp").innerHTML = localStorage.getItem('TenDN');
    document.getElementById("passOutp").innerHTML = localStorage.getItem('MatKhau')
 }
