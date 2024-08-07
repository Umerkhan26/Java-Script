const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');
const recipeContainer= document.querySelector('.recipe-container');


const fetchRecipes = async (query) =>{
    const data = await fetch(`https:www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata${query}`);
    const response = await data.json();
    console.log(response)
}


searchBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    fetchRecipes(searchInput);
    console.log("button clicked")
});