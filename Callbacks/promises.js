// INTRODUCTION TO PROMISES //THE solution to callbacks hell is "Promises"
// Promises uses for parallel execution
// Two properties in "promises" 1:state, 2:result
// State = Initially pending then change to either "fullfilled" when resolve is called or "rejected " when reject is called  
// result = Initially undefined then changes to value if "resolve" then it will give ("resolve value") or if "rejected" then it will give ("reject error")

// let promise = new Promise(function(resolve, reject){
//     alert("hello")
//     resolve(56)
// })

// console.log("Hello one")
// setTimeout(function(){
//     console.log("Hello Two in 2 seconds")
// }, 2000)

// console.log("My name is " + "Hello three")
// console.log(promise)


// THEN AND CATCH // The cunsuming code can recieve the final result of promise through "then" and "catch"

// let p1 = new Promise((resolve, reject) => {
//     console.log("promise is pending")
//     setTimeout (() =>{
//         // console.log("I am promise and I am resolved") // it we use then and catch then we dont use console
//         resolve(true)
//     }, 5000)
// })

// let p2 = new Promise((resolve, reject) => {
//     console.log("promise is pending")
//     setTimeout(() =>{
//         // console.log("I am promise and I am rejected")
//         reject(new Error("I am an error"))
//     }, 5000)
// })

// // To get the value
// p1.then((value)=>{
//     console.log(value)
// })

// // To catch the error
// p2.catch((error)=>{
//     console.log("Some error occured in p2") // though "catch" we can handler "error" so we will not see an error in console 
// })

// // we can acces error through "then" also
// // p2.then((value) =>{
// //     console.log(value)
// // }, (error) =>{
// //     console.log(error)
// // })



// PROMISE_CHAINING // we can chain promises and make them pass the resolved value to one another

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("Resolved after 2 seconds")
//         resolve(56)
//     }, 2000)
// })

// p1.then((value)=>{
//     console.log(value)
//     let p2 = new Promise((resolve, reject) => {
//         setTimeout(()=>{ resolve("Promise 2")}, 2000)  
//     })
//     return p2

// }).then((value)=>{
//     console.log("We are done")
//     return 2
// }).then((value)=>{
//     console.log("We are already done now")
// })


// USING LOADSCRIPT 

// const loadScript = (src) => {
//     return new Promise ((resolve, reject) =>{
//         let script = document.createElement("script")
//         script.type ="text/javascript"
//         script.src = src;
//         document.body.appendChild(script)

//         script.onload = () => {
//             resolve(1)
//         }

//         script.onerror = ()=>{ reject(0) }
//     })
// }

// let p1 = loadScript("http://localhost:3000/index.js")
// p1.then((value)=>{
//     console.log(value)
//     return loadScript = ("https:cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js") 
// // by using "chaining" they pass the result to one another
// }).then((value) =>{
//     console.log("Here as second script") // we will return so many scripts by not using callbacks..

// }).catch((error) => {
//     console.log("We are sorry but we have problem loading this script")
// })


// MULTIPLE HANDLER // They don,t pass the result to each other instead they process it independly

// let p1 = new Promise((resolve, reject) => {
//     console.log("Promise is not resolved")

//     setTimeout(() => {
//         resolve(1)
//     },3000);

// })
// p1.then(()=>{
//     console.log("Congrution promised is now resolved")
// })

// p1.then(()=>{
//     console.log("Hello")
// })


// PROMISE API //

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("value 1")
//         // reject(new Error("error")) // for makinng error in promises
//     }, 1000);
// })

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("value 2")
//         reject(new Error("error"))// used this for any
//     }, 2000);
// })

// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("value 3")
//     }, 3000);
// })

// p1.then((value) => {
//     console.log(value)
// })

// p2.then((value) => {
//     console.log(value)
// })

// p3.then((value) => {
     
// console.log(value)})


// for using promuse api
// let promise_all = Promise.all([p1, p2, p3])//Wait for all the promises to resolved and return the array of their results

// let promise_all = Promise.allSettled([p1, p2, p3]) // used for if any of promise have error then this will resolved other promises 

// let promise_all = Promise.race([p1, p2, p3]) //wait for the promise to settle and its result/error becomes outcome

// let promise_all = Promise.any([p1, p2, p3])//


// promise_all.then((value) =>{
//     console.log(value)
// })