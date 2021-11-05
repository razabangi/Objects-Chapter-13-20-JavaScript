// Chapter no 13 to 15 start

// Answer no 1:
// var studentNames = new Array(6);
// or
// var studentNames = [];

// Answer no 2:
// var studentNames = {};

// Answer no 3:
// var stdNames = ["Ali","Babar","Rizwan"];

// Answer no 4:
// var stdAges = [15,16,18,12,13,15];

// Answer no 5:
// var isStudent = [true,false];

// Answer no 6:
// var studentDetails = ["Muhammad Raza Bangi",23,"Associate Software Engineer",true,null,"BMJ"];

// Answer no 7:
// var qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M. Phil","PhD"];
// document.getElementById("heading").innerHTML = "Qualifications:";
// document.write("<ol>");
//     for (let i = 0; i < qualifications.length; i++) {
//         document.write(`<li>${qualifications[i]}</li><br>`);
//     }
// document.write("</ol>");

// Answer no 8:
// var studentNames = ["Michael","John","Tony"];
// var studentMarks = [320,230,480];
// var studentTotalMarks = 500;
// for (let i = 0; i < studentNames.length; i++) {
//     document.write(`Score of ${studentNames[i]} is ${studentMarks[i]}. Percentage: ${studentMarks[i] / studentTotalMarks * 100}%<br>`);
// }

// Answer no 9:
// var colorArr = ["blue","black","green","red"];
// document.write(`Colors: <b>${colorArr}</b><br>`); 
// var colorIndex = prompt(`Submit the position at which point you want to add color select from 0 to ${colorArr.length - 1}`);
// var colorIndexDelete = prompt(`Submit the position at which point you want to delete color select from 0 to ${colorArr.length - 1}`);
// var colorLengthDelete = prompt(`Submit the position for how many your want to delete colors`);
// var user = prompt("Submit the color which you want to show first");
// document.write("Here is your desire updated colors:<br>");
// A:
// colorArr.unshift(user);
// B:
// colorArr.push(user);
// C:
// colorArr.splice(0,0,user);
// D:
// colorArr.shift();
// E:
// colorArr.pop();
// F:
// colorArr.splice(colorIndex,0,user);
// G:
// colorArr.splice(colorIndexDelete,colorLengthDelete);
// document.write(`Colors: <b>${colorArr}</b>`); 

// Answer no 10:
// var studentMarks = [320,230,480,120];
// document.write(`<b>Scores of Students:</b> ${studentMarks}<br>`);
// var sortedMarks = studentMarks.sort();
// document.write(`<b>Ordered Scores of Students:</b> ${sortedMarks}<br>`);

// Answer no 11:
// var cities = ["karachi","lahore","islamabad","quetta","peshawar"];
// document.write(`Cities List:<br>${cities}<br>`);
// var selectedCities = cities.slice(2,4);
// document.write(`Selected Cities List:<br>${selectedCities}<br>`);

// // Answer no 12;
// var arr = ["This","is","my","car"];
// printData("Array:");
// printData(arr);
// printData("String:");
// var newArr = arr.join(" ");
// printData(newArr);

// Answer no 13:
// var device = ["keyboard","mouse","printer","monitor"];
// printData(device);
// printData("Out:");
// var keyboard = device.shift();
// printData(keyboard);
// var mouse = device.shift();
// printData("Out:");
// printData(mouse);
// var printer = device.shift();
// printData("Out:");
// printData(printer);
// var monitor = device.shift();
// printData("Out:");
// printData(monitor);

// Answer no 14:
// var device = ["keyboard","mouse","printer","monitor"];
// printData(device);
// printData("Out:");
// var keyboard = device.pop();
// printData(keyboard);
// var mouse = device.pop();
// printData("Out:");
// printData(mouse);
// var printer = device.pop();
// printData("Out:");
// printData(printer);
// var monitor = device.pop();
// printData("Out:");
// printData(monitor);

// Answer no 15:
// var brands = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
// printData("<select>");
// printData("<option>Select Brands</option>");
//     for (let i = 0; i < brands.length; i++) {
//         printData(`<option>${brands[i]}</option>`);
//     }
// printData("</select>");

// Chapter no 13 to 15 end

// Global Function
function printData(data){
    return document.write(`${data}<br>`);
}

function printDataWithPara(data,para){
    return document.write(`<b>${data}</b>${para}<br>`);
}

// Chapter no 15 to 20 start

// Answer no 1:
// var arr = [
//     [200,250,194]
// ];
// console.log(arr);

// Answer no 2:
// var arr = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];
// for (let i = 0; i < arr.length; i++) {
//     document.write(`${arr[i]}<br>`);
// }

// Answer no 3:
// for (let i = 1; i <= 10; i++) {
//     printData(`${i}<br>`);
// }

// Answer no 4:
// var table = +prompt("Enter a table number");
// var tableLength = +prompt("Enter a table length");
// for (let i = 1; i <= tableLength; i++) {
//     printData(`${table} x ${i} = ${table * i}`);
// }

// Answer no 5:
// var fruits = ["apple","banana","mango","orange","strawberry"];
// for (let i = 0; i < fruits.length; i++) {
//     printData(`${fruits[i]}`);
// }
// printData("<br>");
// for (let i = 0; i < fruits.length; i++) {
//     printData(`Element at index ${i} is ${fruits[i]}`);
// }

// Answer no 6:
// for (let i = 1; i <= 15; i++) {
//     document.write(`${i},`);
// }
// document.write(`<br>===============<br>`);
// for (let i = 10; i >= 1; i--) {
//     document.write(`${i},`);
// }
// document.write(`<br>===============<br>`);
// for (let i = 0; i <= 20; i = i + 2) {
//     document.write(`${i},`);
// }
// document.write(`<br>===============<br>`);
// for (let i = 1; i <= 20; i = i + 2) {
//     document.write(`${i},`);
// }
// document.write(`<br>===============<br>`);
// for (let i = 2; i <= 20; i = i + 2) {
//     document.write(`${i}k,`);
// }
// document.write(`<br>===============<br>`);

// Answer no 7:
// var bakkery = ["cake","apple pie","cookie","chips","patties"];
// var input = prompt("Welcome to RB Bakkery, What do you want to order sir/ma\'am");
// var isAvailable = 0;

// for (let i = 0; i < bakkery.length; i++) {
//     if(input == bakkery[i]){
//         document.write(`${bakkery[i]} is <b>available</b> at index ${i} in our bakkery`);
//         isAvailable = 1;
//     }
    
// }
// if(isAvailable == 0){
//     document.write(`We are sorry, ${input} is <b>not available</b> in our bakkery`);
// }

// Answer no 8:
// var numbers  = [24,53,78,91,12];
// var largest = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] > largest){
//         largest = numbers[i];
//     }
// }
// printData(`Array Items: ${numbers}`);
// document.write(`The largest number is: ${largest}`);

// Answer no 9:
// var numbers = [24,53,78,91,12];
// var smallest = numbers[0];

// for(var i = 1; i < numbers.length; i++){
//     if(numbers[i] < smallest){
//         smallest = numbers[i];   
//     }
// }
// printData(`Array Items: ${numbers}`);
// document.write(`The largest number is: ${smallest}`);

// Answer no 10:
// for (let i = 5; i <= 100; i = i + 5) {
//     document.write(`${i},`);
// }

// Chapter no 15 to 20 end

