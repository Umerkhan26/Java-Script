// For loops //

// for( let i=0; i<5; i++){
//     console.log(i)
// }

// program to add first n natural number
// let sum = 0;
// let n = prompt("Enter the value of n");
// n = Number.parseInt(n)
// for( let i = 0; i<n; i++){
//     sum += i+1
//     // console.log((i+1), "+")
// }
// console.log(" Sum of first " + n + " Natural number is " + sum)


// for in loop
/*
let obj = {
    Umar: 90,
    Amar:70,
    Aman:80,
    Anas:70,
    Maaz:75
}

for ( let a in obj){
    console.log("Marks of " + a + " are " + obj[a])
}

// for of loop

for ( let b of "Umar"){
    console.log(b)
}

*/

// While loop

// let n1 = prompt("Enter the value of n1")
// n1 = Number.parseInt(n1)

// let i = 0;
// while(i<n1 ){
//     console.log(i);
//     i++;
// }

// do while loop

// let n1 = prompt("Enter the value of n1")
// n1 = Number.parseInt(n1)

// let i = 0;
//  do{
//     console.log(i);
//     i++;
// }while(i<n1 )


// FUNCTION //

// const hello = ()=>{
//     console.log("hello i am fine ") // Function with no paremeters
// }


// function onePlusAvg(x, y){
//     // console.log("Done") // In function we write once it will print in every lines
//     return 1 + (x + y) /2
// }

// const sum =(p, q)=>{  // function for sum of two values 
//     return p + q
// }

// let a = 1;
// let b = 2;
// let c = 3;

// hello(); // For calling hello function 
// console.log("One plus Average of a and b is ", onePlusAvg(a, b)) //=> same as like  1 + (x + Y)/2 in Function    // if we print something like "Done " in console.log we can write in every line but in "Function" we can write once.
// console.log("One plus Average of b and c is ", onePlusAvg(b, c)) 
// console.log("One plus Average of a and c is ", onePlusAvg(a, c)) 
// console.log(sum( 5, 6))



// STRINGS //

// let name1 = "Umar"
// console.log(name1)
// console.log(name1.length)
// console.log(name1[0])
// console.log(name1[1])
// let friend = "Moiz"
// console.log(friend)

// // Template literal

// let boy1 = "Amar"
// let boy2 ="Maaz"
// // suppose we print amar is friend of maaz
// let sentence = `${boy2} is friend of ${boy1}`  // `` => called backtic we will use this because we are printing frinds
// console.log(sentence)

// // Escape sequence

// let fruit = 'Bana\'na' // use for one or more string in a variable
// console.log(fruit)  //  "\n" new line



// STRINGS METHODS

// let name1 = "Umar"
// console.log(name1.length) // for finding lenght
// console.log(name1.toUpperCase())
// console.log(name1.toLowerCase())
// console.log(name1.slice(2,4))
// console.log(name1.slice(1)) // in this the index 1 value will print 
// console.log(name1.replace("mar" , "rar"))

// let friend1 = "Noman"
// console.log(name1.concat(" is a friend of " , friend1," ok ")) //concatenate the strings"+"
// let friend2 = "     Aman   "
// console.log(friend2.trim()) // Remove spaces

// let fr = "Umair" + "uzair" + "Usama"
// console.log(fr[0])
// console.log(fr[1])
// console.log(fr[2])
// console.log(fr[3])
// fr[4] = "0"  // This is not possible
// console.log(fr) // to print all
// Note: string  cannot be changed 

// CHAPTER NO 4 PRACTICE //

// // QNO1
// let str = "Uma\""
// console.log(str.length)

// // QNO3
// let str2 = "Please give Rs 1000"
// let amount = Number.parseInt(str2.slice(15))
// console.log(amount)
// console.log(typeof amount)

// // QNO5
// let friend = "Huzaifa"
// friend[3] = "R"
// console.log(friend) // friend is not changed, because string in immutable or cannot be changed