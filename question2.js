const gamesUrl = "https://api.rawg.io/api/games";

fetch(gamesUrl)
    .then(createGames)
    .then(handleJson);
    
function createGames(response) {
    return response.json();

}

function handleJson(json) {
    const resultsContainer = document.querySelector(".results");
    const results = json.results;
    console.dir(results);

  

    let html = "";

    results.forEach(function(result) {
        html +=  `<div class="game">
        <h2>${result.name}</h2>
        <img src="${result.background_image}" alt="Name of game">
        </div>`;
    });

    resultsContainer.innerHTML = html;
}







