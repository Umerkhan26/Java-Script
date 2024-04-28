// console.log("Hello World")
// var a = 65;
// console.log(a)
// a = "Umar"
// console.log(a)


// Var , let & const //

// var a = 25;
// let b = "Umar";  // let are block level . It can updated but not re-decleared //
// const author = "Umar"
// /*let author = 5   Throws an error because const can not be changed. Not upadated or Re-declered*/
// var c = null
// var e=  undefined

// {
//     let b = "This"   // if we use var then the value will execute in same manner which we given in brackets //
//     console.log(b)    // but in "let" first the value in bracket will execute and then outside bracket //
// }
// console.lob(b)



// Primitive data type  //

//  NN BB SS U //

// let a = null;
// let b = 345;
// let c = true 
// let d = BigInt("566") + BigInt("4")
// let e = "Umar"
// let f = Symbol("This is symbol")
// let g = undefined
// console.log( a, b ,c, d ,e, f ,g)
// console.log(typeof d)

// Non-primitive/Object //

// const item = {
//     "Umar": true,
//     "Ahmed": false,
//     "Amar": 70,
//     "Rehan": undefined
    
// }
// console.log(item["Umar"])
// console.log(item["Amar"])
// console.log(item["Rehan"])
// console.log(item["Moiz"])



// Chapter N0 1 
// Q1

// let a = "Umar"
// let b= 10
// console.log(a + b)

// Qno2

// console.log(typeof (a+b))

// Qno3

// const a1 = {
//     name:"Umar",
//     section:1,
//     ispricipal: false
// }
// a1 = 45

// Qno4

// a1['friend'] = "Ahmed"
// a1['name'] = "Aman"
// console.log(a1)

// Qno5

// const dict = {
//     appreciate:"reconize the full worth of.",
//     ataxaxia:"a state of freedom from emotion and anxiety",
//     yakka: "work, especially hardwork"
// }
// console.log(dict.yakka)



//      OPERATORS  //

// console.log("Operator in js")
// let a = 45;
// let b = 4;

// Arithemetic operator

// console.log("a + b = " , a+b)
// console.log("a - b = " , a-b)
// console.log("a / b = " , a/b)
// console.log("a * b = " , a*b)
// console.log("a ** b = " , a**b)
// console.log("a % b = " , a%b)
// console.log("++a = " , ++a) 
// console.log("a++ = " , a++)
// console.log("--a = " , --a)
// console.log("a-- = " , a--)
// console.log("a = " , a)
// console.log("a-- = " , a--)
// console.log("--a = " , --a)


// Assignment operator

// let Assignment = 1;
// Assignment += 5; // Same as a = a + 5
// console.log(Assignment)
// Assignment -= 5; // Same as a = a - 5
// console.log(Assignment)
// Assignment *= 5; // Same as a = a * 5
// console.log(Assignment)
// Assignment /= 5; // Same as a = a / 5
// console.log(Assignment)


// Comparison operator

// let com1 = 6;
// let com2 = 7;
// console.log("com1 == com2 is " , com1 == com2)
// console.log("com1 != com2 is " , com1 != com2)
// console.log("com1 === com2 is " , com1 === com2)  // if "eg" "Com1" is number and "Com2" is string  are same then in case the triple equal will "false" because they are different  even when they are same //
// console.log("com1 !== com2 is " , com1 !== com2)
// console.log("com1 > com2 is " , com1 > com2)


// // Logical operator

// let x = 5;
// let y = 6;
// console.log(x<y && x==5)
// console.log(x>y && x==5)
// console.log(x>y || x==5)
// console.log(x<y || x==5)
// console.log(!true)
// console.log(!false)




//      CONDITION   //

// let a = prompt("hey whats your age")
// console.log(typeof a)
// a = Number.parseInt(a) // converting string to a number
// console.log(typeof a)
// if(a<0){
//     alert("This is invalid age");
// }
// else if(a<9){
//     alert("you are kid and you cannot even think of driving");  
// }
// else if(a<18 && a>=9){
//     alert("you are kid and you can  think of driving after 18");  
// }
// else{
//     alert("you can now drive as you are above 18")
// }
// console.log("you can",(a>18? "not drive" :"drive"))  // Ternary Operator


// switch

// const value = prompt("what is your age");
// switch(value){
//     case '1':
//         console.log("you are kid");
//         break;
    
//     case '2':
//         console.log("now you are boy");
//         break;
        
//     case '3':
//         console.log("you are men");
//         break;
        
//     default:
//         console.log("invalid")    
// }



// Chapter 2 practice 
// Problem No 1

// let age = prompt("what is your age ");
// if(age>10 && age<20){
//     console.log("your age lies between 10 and 20");
// }
// else{
//     console.log("your age  does not lies between 10 and 20");
// }


// Problem No 2

// let age = prompt("what is your age ")
// switch(age){
//     case '12':
//         console.log("your age is 12");
//         break;
//     case '13':
//         console.log("your age is 13 ");
//         break;
//     case '14':
//         console.log("your age is 14 ");
//         break;
//     case '15':
//         console.log("your age is 15 ");
//         break;

//     default:
//         console.log("your age is not special") ;   
    
// }


// Problem No 3

// let num = prompt("what is your age?")
// num = Number.parseInt(num)
// if(num % 2 == 0 && num % 3 == 0){
//     console.log("Your number is divisble by 2 and 3")
// }
// else {
//     console.log("Your number is not divisble by 2 and 3")

// }


// Problem No 6

// let age = 19; // age = 12 " you cannot drive"
// let a = age > 18? "you can drive ": "you cannot drive";
// console.log(a)





