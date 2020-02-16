const gamesUrl = "https://api.rawg.io/api/games/4200";


fetch(gamesUrl)
    .then(createGamesDetails)
    .then(handleJson);
   
function createGamesDetails(response) {
    return response.json();

}

function handleJson(json) {
    const resultsContainer = document.querySelector(".results");
    const results = json.results;
    console.dir(results);

  

    

    resultsContainer.innerHTML = html;
}
