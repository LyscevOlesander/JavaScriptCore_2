//Task1
// let number = +prompt('Please enter number');
// if (number > 0) {
//     console.log(1);
// } else if (number < 0) {
//     console.log(-1);
// } else if (number == 0) {
//     console.log(0);
// }

//Task2
// let asqLogin = prompt('Who`s there?');
// if (asqLogin == null) {
//     console.log("Canceled.");
// } else if (asqLogin == "Admin") {
//     let asqPassword = prompt('Password?');
//     if (asqPassword == null) {
//         console.log("Canceled.");
//     } else if (asqPassword == "TheMaster") {
//         console.log("Welcome!");
//     } else {
//         console.log("Wrong password");
//     }
// } else {
//     console.log("I don`t know you");
// }

//Task3
// let asqLogin = prompt('Who`s there?');
// switch (asqLogin) {
//     case null:
//         console.log("Canceled.");
//         break;
//     case "Admin": {
//         let asqPassword = prompt('Password?');
//         switch (asqPassword) {
//             case null:
//                 console.log("Canceled.");
//                 break;
//             case "TheMaster":
//                 console.log("Welcome!");
//                 break;

//             default:
//                 console.log("Wrong password");
//                 break;
//         }
//         break;
//     }
//     default:
//         console.log("I don`t know you");
// }