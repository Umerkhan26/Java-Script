// ASYNC _ AWAIT
// it is special syntex to work with promises in javascript
// it always return promise
// we can make every "function" 'Async' and after we   will 'Await' promise
// we can use "then" also. So Async ensures that Function return "promise" and  Wraps "non promise" in it.

// async function umar() {
//   let lahoreWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("deg 36");
//     }, 2000);
//   });

//   let peshawerWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("deg 25");
//     }, 4000);
//   });

// // lahoreWeather.then(alert)
// // peshawerWeather.then(alert)

// // we can use awaits also for then "Async functions"
// console.log("Fetching Lahore Weather please wait ... ")
// let lahoreW = await lahoreWeather//first it will resolved and then after "func" will go to another
// console.log("Feteched Lahore Weather: " + lahoreW)
// console.log("Feteching Peshawer Weather please wait ... ")
// let peshawerW = await peshawerWeather
// console.log("Feteched Peshawer Weather:" + peshawerW)
// return[lahoreW, peshawerW]

// }

// // let suppose if we make another function then will execute pararelly
// const cherry = async () => {
//     console.log("Hey I am cherry and I am waiting")
// }

// // we can create "main" function through. So first they will wait for "first function"
// // execution then after execution the "Second function" will runs
// const main1 =async () => {
// console.log("Welcome to weather control room")
// let a = await umar()
// let b = await cherry()

// // a.then((value) =>{
// //     console.log(value) // we can,t use "then" in function
// // })

// }
// main1()

// TRY CATCH //
// it allows us to catch errors than the script instead of dying can do somethoing more reasonable
// it works synchronously

// setTimeout(() => {
//     console.log("Hacking wifi.... Please wait... ")
// }, 1000);

// // suppose we want to print
// // console.log(Maaz)
// // so it will throw an error instead of this we can use "try" and "catch"
// try{
//     console.log(maaz)
// }

// catch(error){
//     console.log(error)
//     // console.log("balle balle")
// }

// // NOTE: if we use "settimeout" under "Try & catch" then it will not work. we will make another "Try & catch" under settimeout

// setTimeout(() => {
//     console.log("Fetchig username and password.... Please wait... ")
// }, 2000);

// setTimeout(() => {
//     console.log("Hacking Ahmed facebook id.... please wait... ")
// }, 3000);

// setTimeout(() => {
//     console.log("Username and password of Ahmed (0321388441) Feteched.... please wait...")
// }, 4000);

// ERROR OBJECT //

// try{
//     // console.log(Umar)
//     // throw new ReferenceError("Umar is not good")
//     let age = prompt("Enter your age")
//     age = Number.parseInt(age)
//     if(age > 150){
//         throw new ReferenceError("This is probably not true ")
//     }
// } catch(error){
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error.stack)
// }

// console.log("The script is still running")

// FINALLY CLAUSE // The try ... catch contructs may have one more code clause : finally

// const f = () => {
 
//     try {
//     let a = 0;
//     // console.log(program);
//     console.log("Program ran successfully");
//     return // if there is no error in "try" and if we use return under try the "finally" will be run
//   } 
//   catch (err) {
//     console.log("This is an error");
//     console.log(P);
//   }
//    finally {
//     console.log("I am a good boy");
//     // Close the file
//     // Exit the loop
//     // Write to the log file
//   }
// };

// f();// it will run after return whether we use another console just like
// console.log("End")
