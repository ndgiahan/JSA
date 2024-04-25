//CRUD
var task = [
    "Làm bài tập về nhà",
    "Học thêm môn Toán",
    "Học thêm môn Văn",
    "Tập thể dục"
]
//Lưu mảng vào localstorage
// localStorage.removeItem("MyTask")
var taskJson = JSON.stringify(task);
localStorage.setItem("MyTask", taskJson)


//Lấy mảng từ localstorage
var getTask = localStorage.getItem("MyTask")
var getTaskArray = JSON.parse(getTask)
console.log(getTaskArray);






// 1. In ra tất cả các công việc - READ
// function showTask() {
//     for (let i = 0; i<task.length;i++) {
//         console.log(task[i]);
//     }
// }
// showTask("Danh sách công việc là: ")

// 2. Thêm 1 công việc vào danh sách trên - CREATE
// function addTask() {
//     var addTask = prompt("Bạn muốn thêm công việc nào?")
//     task.push(addTask); // thêm 1 phần tử vào mảng
//     showTask("Danh sách công việc mới là: ");
// }
// addTask()

// 3. Khi người dùng nhập vào tên công việc, in ra thứ tự công việc mà người dùng đã nhập vào
// var searchTask = prompt("Bạn muốn tìm vị trí của công việc nào? ")
// var indexTask = task.indexOf(searchTask)+1;
// console.log("Vị trí công việc " +searchTask+ " là vị trí số: "+indexTask);

// 4. Xóa một công việc mà người dùng nhập vào ra khỏi danh sách công việc
// var deleteTask = prompt("Bạn muốn xóa công việc nào? ")
// var indexTask = task.indexOf(deleteTask);
// task.splice(indexTask,1);
// showTask()














