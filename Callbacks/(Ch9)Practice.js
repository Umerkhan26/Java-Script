// QUESTION NO 1

// const loadScript = async (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script");
//         script.src = src;
//         script.onload = () => {
//             resolve(src + " Done src ");
//         };

//         document.head.append(script);
//     });
// };

// let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")

// a.then((value) => {
//     console.log(value)
// })

// QUESTION NO 2
// const loadScript = async (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script");
//         script.src = src;
//         script.onload = () => {
//             resolve(src + " Done src ");
//         };

//         document.head.append(script);
//     });
// };

// const main2 = async() => {
//     console.log(new Date())
//     let a =  await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
//     console.log(a)
//     console.log(new Date())
// }
// main2()

// QUESTION NO 3

// let p = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("Please  this is not accectable"));
//     }, 3000);
//   });
// };

// let a = async () => {
//   try {
//     let c = await p();
//     console.log(c);
//   }
//    catch (err) {
//     console.log("This error has been handled")
//    }
// };
// a();

// QUESTION NO 4

let p1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 2000);

  });

};

let p2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20);
    }, 1000);

  });

};

let p3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(30);
    }, 3000);

  });

};

const run = async () => {
    console.time("run")
    // let a1 = await p1()
    // let a2 = await p2()
    // let a3 = await p3()
    // console.log(a1, a2, a3)

    let a1 = p1() // Fetch first 10 product from database 
    let a2 = p2() // Fetch  another first 10 product from database 
    let a3 = p3() // Fetch another yet first 10 product from database 
    let a1a2a3 = await Promise.all([a1, a2, a3])
    console.log(a1a2a3) // this method will take less time and we execute in one "await promises" instead of write "await" with every promise
    // In this the "promises" will parellely execute
    console.timeEnd("run")
}
run()