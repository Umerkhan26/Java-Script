// DOM //  Document Object Model 

// console.log(window) // Window = Global Object
// // window.console.log(window) Same as upper 
// // console.log(document)
// console.log(document.body) // Document = Javascript representaion
// document.body.style.background = "yellow" // It makes style background

// // BOM  // Browser Object Model = Reprent Additional Obj provided by the Browser.
// Alert, conform, prompt are BOM

// CHAPTER 6 PROBLEMS  //
// Problem No 1

// let age = prompt("Enter you age")
// age = Number.parseInt(age)

// const canDrive = (age)=>{
//     return age>=18?true:false
// }
// if(canDrive(age)){
//     alert("You can drive")

// }
// else{
//     alert("You cannot drive")
// }

// Problem No 2


// let runAgain = true;

// const canDrive = (age)=>{
//     return age>=18?true:false
// }
// while (runAgain){
//     let age = prompt("Enter you age")
//     age = Number.parseInt(age) 

// if(canDrive(age)){
//     alert("You can drive")

// }
// else{
//     alert("You cannot drive")
// }
// runAgain = confirm("Do you want to play again?")
// }


// Problem No 3

// let runAgain = true;

// const canDrive = (age)=>{
//     return age>=18?true:false
// }
// while (runAgain){
//     let age = prompt("Enter you age")
//     age = Number.parseInt(age) 
//     if (age<0){
//         console.error("Please enter a valid age")
//         break;
//     }

// if(canDrive(age)){
//     alert("You can drive")

// }
// else{
//     alert("You cannot drive")
// }
// runAgain = confirm("Do you want to play again?")
// }


// Problem No 4

// let number = prompt("Enter your number")
// number = Number.parseInt(number)

// if(number > 4){
//     location.href = "http://google.com"
// }



// Problem No 5

// let color = prompt("Enter the background color")
// document.body.style.background = color

// CHAPTER 2  PROBLEM
// let arr=['snake','water','gun'];
//         alert("you are playing snake water and gun game,")
//         let round=1;
//         let userGuesses=0;
//         let computerGuesses=0;
//         while(round<=3)
//         {
//             let userInput=prompt("enter your guess");
//             let computerInput=arr[Math.floor(Math.random()*3)];
//             if((userInput=='snake' && computerInput=='water') || (userInput=='gun' && computerInput=='snake') || (userInput=='water' && computerInput=='gun')){
//                 userGuesses++;
//             }
//             else{
//                 computerGuesses++;
//             }
//             round++;
//         }

//         if(computerGuesses>userGuesses)
//         {
//             alert("Ohh no You lose the computer scores more than you");
//         }
//         else{
//             alert("yeh thats my boy tu hi jeetega pata hi tha mujhe");
//         }


// WALKING ON DOM // Dom Tree refers to Html where all nodes are object

// In DOM we can search any document on server side just like....
// document.body
// document.head
// document.documentElement
// document.title "it will return string always " etc ....


// CHILDREN OF AN ELEMENT //  Direct as well deeply nested element of an element
 // Child Nodes = Element that are direct children "e.g" "Head" and "Body" are direct children of html

// console.log(document.body.firstChild) // first Child Element
// console.log(document.body.lastChild) // last Child element
// console.log(document.body.childNodes) // All Child Nodes


// Nodes on DOM Collection

// They are read only
//They are iterable using For ..... of loop


// Siblings and Parent

// Siblings are nodes that are children of same node 
// "$0.nextsibling"  type in browser
// console.log(document.body.firstChild)
// a = document.body.firstChild
// console.log(a.parentNode)
// console.log(a.parentElement)


// Matches, Contains, Closest // 

let id1 = document.getElementById("id1")
let sp1 = document.getElementById("sp1")
console.log(id1)
console.log(id1.matches(".class"))// it will return false bcz there is no class in id1
console.log(id1.matches(".box"))// it will return true  bcz it has "box " name class
// "MATCHES" = To check if element matches the given Selector //
console.log(sp1.closest("#sp1"))
console.log(sp1.closest(".box"))
console.log(id1.contains(sp1))
console.log(sp1.contains(sp1))
console.log(sp1.contains(id1)) // it will return false bcz "sp1" does not contain "id1"
