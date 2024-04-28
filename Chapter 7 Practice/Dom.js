// document.getElementsByTagName("ul")[0].firstElementChild.style.color="red"
// // document.getElementsByTagName("ul")[0].lastElementChild.innerHTML= "khattak"
// // document.getElementsByTagName("ul")[0].lastElementChild.style.color = "red"


// let element = document.querySelectorAll(".first")[0].innerHTML="bangash"

// let element = document.querySelector(".first");


// element.innerHTML= 'islamia'
// element.style.color ="red"

// console.log(element.contains(first))

// QN03
// document.getElementsByTagName("ul")[0].firstElementChild.style.color = "green"
// document.getElementsByTagName("ul")[0].lastElementChild.style.color = "green"

// // Q NO 4
// Array.from(document.getElementsByTagName("li")).forEach((element) =>{
//     element.style.background = "cyan"
// })


//EXERCISE NO 2 //

// let user = prompt("Enter S, W or G")
// let cpuI = Math.floor(Math.random() * 3);
// let cpu = ["S", "W", "G"][cpuI]
// const match = (cpu, user)=>{
//     if(cpu === user){
//     return "Nobody"
// }
//     else if(cpu === "S" && user === "W"){
//     return"cpu"
//     }

//     else if(cpu === "S" && user === "G"){
//         return"user"
//         }

//     else if(cpu === "G" && user === "W"){
//     return"user"
//     }

//     else if(cpu === "G" && user === "S"){
//         return"cpu"
//         }
    
//     else if(cpu === "W" && user === "S"){
//             return"user"
//         }  
        
//     else if(cpu === "W" && user === "G"){
//             return"cpu"
//     }         
// }
// let result = match(cpu, user)
// document.write(`CPU: ${cpu}  <br> User: ${user} <br> The winner is : ${result.toUpperCase()}`)

// INNER HTML AND OUTER HTML
// let x = document.getElementsByTagName('span')[0]
// console.log(x)
// let y = document.getElementsByTagName('span')[0]
// console.dir(y) // used for element of an object with in properties
// console.log(document.body.firstChild.nodeName)
// console.log(document.body.firstElementChild.nodeName)

// This will shown on browser //

// first.innerHTML // it allows you to get element inside element of a String
// '<b>HI</b>Hey how are you'
// first.innerHTML = "<i>hey i am italic </i>"
// '<i>hey i am italic</i>'
// first.outerHTML // it contain full HTML, innerhtml + the element itself
// <'span id ="first"><i>hey i am italic</i></span>'
// first.outerHTML = "<div>HEllo</div>"
//   '<div>hey</div>'

// document.body.firstChild.data // showing data
// console.log(document.body.textContent)
// // we can "Hidden" to hide element inside string 