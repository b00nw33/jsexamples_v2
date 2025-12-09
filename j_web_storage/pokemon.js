function fetchData (){
    // via promises
    fetch("https://pokeapi.co/api/v2/pokemon?offset=1000&limit=5")      //(?) is a query parameter
    .then(res => {
        return res.json();
    }).then(res => {
        const returnedChars = res.results;
        if (!returnedChars.length) throw new Error("No characters found.");
        console.log(returnedChars);
    }).catch(err => {
        console.log(err.message);
    });
}

fetchData();
