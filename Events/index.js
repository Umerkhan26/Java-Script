 // Event // An event is a signal that something has happened "Note" = All the DOM nodes generate such signals

let a = document.getElementsByClassName("container")[0]
a.onclick = () => {
    let b = document.getElementsByClassName("container")[0]
    b.innerHTML = "Hello world!"
}
let btn = document.querySelector("#btn")

btn.onclick = (evt)=>{
    console.log(evt) // used to  print event object values
    console.log(evt.type)
    console.log(evt.target)
}


// ADD EVENT LISTNER // it is used to assign multiple handles to an event

let btn = document.querySelector("#btn")
btn.addEventListener("click", (evt) =>{
    console.log("Button1 was clicked")
    console.log(evt)
    console.log(evt.type)
})

btn.addEventListener("click", () =>{
    console.log("Button2 was clicked " ) // With addEvent listen we can multiple works together as they are same also
})

// FOR REMOVE_EVENT LISTNER //
let btn = document.querySelector("#btn")
 // when we use Remove the "callback Handkler should be same"

btn.addEventListener("click", (evt) =>{
    console.log("Button1 was clicked Handler_1")
  
})
btn.addEventListener("click", (evt) =>{
    console.log("Button2 was clicked Handler_2")
    
})
const Handler_3 =  (evt) =>{
    console.log("Button3 was clicked Handler_3")  // This will use when we user "RemoveE"
}
btn.addEventListener("click",Handler_3) // Used for Remove handle3

btn.addEventListener("click", (evt) =>{
    console.log("Button4 was clicked Handler_4")
   
})

btn.removeEventListener("click", Handler_3)// we can pass handler just like variable

// practice Qs
let modeBtn =document.querySelector("#mode")
let currMode = "light";
modeBtn.addEventListener("click", () =>{
    if (currMode === "light"){
        currMode = "dark"
        document.querySelector("body").style.backgroundColor = "black"
    }
    else{
        currMode = "light"
        document.querySelector("body").style.backgroundColor = "white"
    }

    console.log(currMode)
})


 // CHAPTER NO 8 PRACTICE //

// QNO 5//
setInterval(async function() {
    document.querySelector("#bulb").classList.toggle("bulb")
},300 )


// TEll ME A JOKE EXERCISE //

let myjokes =  [
    
        {
            "category": "Programming",
            "type": "single",
            "joke": "There are only 10 kinds of people in this world: those who know binary and those who don't.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 35,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "A byte walks into a bar looking miserable.\nThe bartender asks it: \"What's wrong buddy?\"\n\"Parity error.\" it replies. \n\"Ah that makes sense, I thought you looked a bit off.\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 24,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Eight bytes walk into a bar.\nThe bartender asks, \"Can I get you anything?\"\n\"Yeah,\" reply the bytes.\n\"Make us a double.\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 34,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "UDP is better in the COVID era since it avoids unnecessary handshakes.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 259,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "\"Honey, go to the store and buy some eggs.\"\n\"OK.\"\n\"Oh and while you're there, get some milk.\"\nHe never returned.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 18,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "I've got a really good UDP joke to tell you but I don’t know if you'll get it.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 0,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "// This line doesn't actually do anything, but the code stops working when I delete it.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 12,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Have a great weekend!\nI hope your code behaves the same on Monday as it did on Friday.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 44,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Debugging: Removing the needles from the haystack.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 40,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Two SQL tables sit at the bar. A query approaches and asks \"Can I join you?\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 221,
            "safe": true,
            "lang": "en"
        }
    ]

    let index = Math.floor(Math.random() * (myjokes.lenght * 1))
    console.log(index)
    joke.innerHTML = myjokes[index].joke
    
