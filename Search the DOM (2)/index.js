// changing the card title tro red
let cardtitle = document.getElementById("Firstcardtitle")
cardtitle.style.color = "red"

// Query selectors
let cardtitles = document.querySelectorAll(".card-title")
cardtitles[0].style.color = "red"
cardtitles[1].style.color = "blue"
cardtitles[2].style.color = "green"
console.log(cardtitles)

document.querySelector(".this").style.color = "red"// changing btn color
document.querySelector(".this").style.background = "black"// changing btn background

console.log(document.getElementsByTagName("a")) // For finding tagname
console.log(document.querySelector(".card").getElementsByTagName("a"))

console.log(document.getElementsByName("Search"))