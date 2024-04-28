// FETCH API // javascript can be used to send and return information from network when needed (AJAX)
// it is used to get data over network
// it was made two stages process that,s why we use two ".then"

// let p = fetch("https://www.ncdc.noaa.gov/cdo-web/")//without option a "get" request is send
// p.then((response) => {
//     console.log(response.status) // The http status code "e.g" = 200
//     console.log(response.ok)// True if HTTP status will between 200 to 299..
//     console.log(response.headers)
//     return response.json // it will resolved in json response
//     // console.log(response.text) // we can,t use json two times
// }).then((value2) => {
//     console.log(value2)
// })

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact")
const btn = document.querySelector("#btn")


// const getFacts = async () => {
//   console.log("getting data ....")
//   let response = await fetch(url);
//   console.log(response);
//   console.log(response.status)
//   console.log(response.ok)
//   let data = await response.json() // it return second promise ("Input is  "JSON" output is "JS object" )
// //   console.log(data[0])
// //   console.log(data[0].text)
// // if we write apis in "HTML" then
// factpara.innerText = data[0].text;

// }

// NY CHAINUNG
function getFacts(){
    fetch(URL).then((response) => {
        return response.json()
        
    }).then((data) =>{
        console.log(data)
        factPara.innerText = data[2].text;
        // factPara.innerText = data[3].text;

    })
}

    btn.addEventListener("click", getFacts);
