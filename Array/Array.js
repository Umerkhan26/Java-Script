// ARRAY //  Collection of items

// let marks = [80, 89, 78, 68, false, "Not Present"]

// console.log(marks[0])
// console.log(marks[1])
// console.log(marks[2])
// console.log(marks[3])
// console.log(marks[4])
// console.log(marks[5])
// console.log(marks.length) // for finding lenght
// marks[0] = 96 // Changing a value an array
// console.log(marks)
// console.log(typeof marks)

// ARRAY METHODS

// let num = [1, 2, 3, 34,4]
// let b = num.toString() // it will convert to string
// console.log(b, typeof b)
// let c =num.join("_")
// console.log(c) // it will "jointly print with "b"
// let r = num.pop() // removing last element of array // also pop return the popped element
// console.log(num)
// console.log(r)
// let r = num.push(36)
// console.log(num,r)
// let r = num.shift() // it wil remove first element to the start of array
// console.log(r,num)

// let r = num.unshift(67)
// console.log(r,num)  // it will add first element to the start of array

// OTHER ARRAY METHODS

// let num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let num_more = [ 11, 12, 13, 14, 15, 16, 17, 18, 19];
// let num_even_more = [ 211, 212, 213, 214, 215, 216, 217, 218, 219];
// delete num[0] // it will delete first element of array
// console.log(num)
// console.log(num.length) //the lenght of array will be exactly"10"in this case if we delete element

// let newArray = num.concat(num_more,num_even_more) // concate the arrays
// console.log(newArray)

// Sort Method

// let compare = (a, b)=>{
//     return a - b // ascending
//     // return b - a // decending order
// }
// let num = [ 511, 72, 332, 4, 6, 7, 8, 654, 634, 76];
// // num.sort() // it make changes in origional array starting from 1 the 2 and up to so on
// num.sort(compare) // it will print  ascending order with the help of function
// // num.reverse()
// console.log(num)

// Splice And Slice

// let num = [ 511, 72, 332, 4, 6, 7, 8, 654, 634, 76];
// let deleted_values = num.splice(2, 3, 1021, 1022, 1023, 1024) // In splice first we will write "position to add" and then "No of element that removed" and last "Numbers which are added"
// console.log(num)
// console.log(deleted_values) // it will show deleted value in array

// let num = [ 511, 72, 332, 4, 6, 7, 8, 654, 634, 76];
// let newNum = num.slice(3)
// // let newNum = num.slice(3,5)
// console.log(newNum) // it will remove first 3 element

// ARRAY LOOPS //

// let num = [1, 2, 3, 4, 5, 6];

// for(let i=0; i<num.length; i++){
//     console.log(num[i])
// }

// Foreach loop
// num.forEach((element)=>{
//     console.log(element*element) // sqaure of each element or again and againt run
// })

// // Array.from

// let name = "Umar"
// let  arr = Array.from(name) // used to create an array from any other object
// console.log(arr)

// // For ....of

// for(let item of num){
//     console.log(item)  // it is shortcut of any array to print directly without write for loop in this case
// }

// // For ....in

// for(let i in num){
//     console.log(i) // for printing key of array "e.g"= (0,1,2,3.....)
// }

//  MAP, FILTER AND REDUCE  //

// Array map Method
// let arr1 = [43, 26, 15] // value = 43, 26 ... index = 0, 1, 2,....  array = full array
// // console.log(arr)
// let a = arr1.map((value, index, array)=>{
//     console.log(value, index, array)  // Map is used when we make new array
//     return value + 1

// })
// console.log(a)

// Array filter method   // it is array that passes a test "true " or false 

// let arr2 = [43, 26, 15, 1, 3, 6];
// let a2 = arr2.filter((a) => {
//   return a < 10;
// });
// console.log(a2);

// // Array reduce method  // it add the function value 

// let arr3 = [1, 2, 3, 5, 7, 8, 1];
// const reduce_func = (h1, h2) =>{
//     return h1 + h2
// }
// let newarr3 = arr3.reduce(reduce_func)  // we can write new array outside function also
// console.log(newarr3)

// CHAPTER 5 PROBLEMS

// Problem No 1

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// let a = prompt("Enter a number")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// Problem No 2

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// let a;
// do {
//    a = prompt("Enter a number")
//   a = Number.parseInt(a)
//   arr.push(a)
// } while(a !=0)
//   console.log(arr)

// Problem No 3

// let arr = [1, 2, 30, 4, 50, 660, 70, 8]
// let n = arr.filter((x)=>{
//   return x%10 == 0
// })
// console.log(n)

// Problem No 4

// let arr = [1, 2, 30, 4, 50, 660, 70, 8]
// let n = arr.map((x)=>{
//   return x*x  // array.map also used for squares of numbers
// })
// console.log(n)

// Problem No 5

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let u = arr.reduce((x1, x2)=>{
//   return x1 * x2
// })
// console.log(u)




// ALERT PROMPT CONFORM //

// alert("Enter value of a")  // Alert take value as a string
// let a = prompt("Enter a here", "577") // sec value called default value  "promt" = used to take user output or sting
// a = Number.parseInt(a) // Alert = used to invoke a little with a msg
// alert("You entered a of type" + (typeof a)) 
// let write = confirm(" Do you want to write it to the page")

// if(write){

// document.write(a)  // it write value in server
// } 
// else{
//   document.write("Please allow me to write")
// }