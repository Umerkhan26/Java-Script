// let first = document.getElementById("first")
// let a = first.getAttribute("class") // Method used to get the value of attribute
// // console.log(a)
// console.log(first.hasAttribute("class"))//method to check for existance of  an atribute
// console.log(first.hasAttribute("Style")) // bcz it does not hve attribute "Style"
// first.setAttribute("hidden", "true")// method used to set the value of attribute
// first.setAttribute("class","true soman")
// first.removeAttribute("class")
// console.log(first.attributes) // collection of all attributes
// console.log(first.dataset)
// console.log(first.dataset.game)
// console.log(first.dataset.player)

// INSERTION METHOD // 
// let a = document.getElementsByTagName("div")[0]
// a.innerHTML =a.innerHTML + '<h1>Hello World</h1>';

// let div =document.createElement('div'); // we can write this by this method also we can create element on this method.
// div.innerHTML = '<h1>Hello world!</h1>';
// a.appendChild(div); // append in body
// a.append(div) // append at the end of node
// a.prepend(div) // Insert at beginning of node
// a.before(div)// Insert before node
// a.after(div)// Insert after node
// a.replaceWith(div)// replace node with given node


// INSERT ADJACENT HTML //

// first.insertAdjacentHTML('beforebegin','<div class ="test">beforebegin</div>');
// first.insertAdjacentHTML('beforeend','<div class ="test">beforeend</div>');
// first.insertAdjacentHTML('afterbegin','<div class ="test">afterbegin</div>');
// first.insertAdjacentHTML('afterend','<div class ="test">afterend</div>');
// first.romove()


// Classname_Classlist

// first.className = "text-black red"
// first.classList.add("red")// specefically add/ romove class we used "classList"
// first.classList.remove("red")
// first.classList.contains("red")
// first.classList.toggle("red")


// SETINTERVAL AND SETTIME_OUT

document.write("Hello")// SetTime_out = Allows us to run a function once after interval of time
// let a = setTimeout(function(){
//     alert("Hello i am inside setTimeout")
// }, 4000)
// let b =prompt("Do you want to setTime out")
// if("n" == b){
//     clearTimeout(a)
// }
// // clearTimeout(a) // To clear or cancel the time_out
// console.log(a)

// const sum = (a, b, c)=>{
//     console.log(" Yes I am running " + (a + b + c)); // arguments
//     a + b +c
// }

// setTimeout(sum, 1000, 1, 2, 7) // we can give so many argument (fun, delay, arg 1 arg 2)

// Setinterval  // it run the function regurly after given interval of time

// setInterval(function(){
//     alert("Set Interval")
// },3000)

// clearInterval // clear execution