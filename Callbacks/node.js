// Synchronous // They are action that initiate and finish one by one

// let a = prompt("hey what is you name")
// let b = prompt("what is your age ")
// let c = prompt("what is your favorite color")
// console.log(a + " is " + b + " Years old and has " + c + " favorite Color .")

// Asynchronous // They are the action that we initiate now and they finish later.

// console.log("start")
// setTimeout(function (){
//     console.log("Hey how are you")
// },3000)
// console.log("End")


// CALLBACK // it is function passed as an argument to another function

// function loadScript(src, callback ){
//     let script =document.createElement("script")
//     script.src = src;

//     script.onload = function(){
//         console.log("Loaded script with SRC : " + src ) // Through which the script will loads
//         callback(null, src);
//     }
        // Use for error handling
//     script.onerror = function(){
//         console.log("Script error with src : " + src)
//         callback(new Error("src got some error")); // for any error in "load script"
//     }

//     document.body.appendChild(script);
// }
// // For using function we should be used whatever function we used
// function hello(error, src){
//     if(error){
//         console.log(error)
//         return
//     }
//     alert("Hello" + src)
// }

// // function goodmorning (){
// //     console.log("Good morning")
// // }

// function goodmorning(error, src){
//     if(error){
//         console.log(error)
//         return
//     }
//     alert("Good morning" + src) // for checking an error in good morning also
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" , hello)



// CALLBACK HELL AND PYRAMID OF DOM //


// function loadScript(src, callback) {
//     let script = document.createElement("script")
//     script.src = src;

//     script.onload = function () {
//         console.log("Loaded script with SRC : " + src)  loads
//         callback(null, src);
//     }

//     script.onerror = function () {
//         console.log("Script error with src : " + src)
//         callback(new Error("src got some error"));
//     }

//     document.body.appendChild(script);
// }

// function hello(error, src) {
//     if (error) {
//         console.log(error)
//         return
//     }
//     alert("Hello" + src)
// }

// function goodmorning(error, src) {
//     if (error) {
//         console.log(error)
//         sendEmegencyMessageToCEO();
//         return
//     }
//     alert("Good morning" + src)
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
//     if (error) {
//         console.log(error)
//         sendEmegencyMessageToCEO();
//         return
//     }
//     // alert("Good morning" + src) // if use load script function insted of this function 
//     loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
//         if (error) {
//             console.log(error)
//             sendEmegencyMessageToCEO();
//             return
//         }

//         loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
//             if (error) {
//                 console.log(error)
//                 sendEmegencyMessageToCEO();
//                 return
//             }

//             loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
//                 if (error) {
//                     console.log(error)
//                     sendEmegencyMessageToCEO();
//                     return
//                 }

//                 loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) { })
//             })
//         })
//     })

// NOTE : For using callback we can see that the function is not easy to read  from user perspective so that,s the problem with callabck








