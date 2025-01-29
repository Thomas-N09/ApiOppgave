const getPokemon = (searchQuery) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery}/`)
    .then((response) => response.json())
    .then((pokeCharacter) => {
      const pokemonData = document.getElementById("pokemon-data");
      pokemonData.textContent = "";
      const h2 = document.createElement("h2");
      h2.textContent = pokeCharacter.name;
      pokemonData.appendChild(h2);
      const img = document.createElement("img");
      img.src = pokeCharacter.sprites.front_default;
      img.alt = pokeCharacter.name;
      pokemonData.appendChild(img);
      const p1 = document.createElement("p");
      p1.textContent = `Type: ${pokeCharacter.types[0].type.name}`;
      pokemonData.appendChild(p1);
      const p2 = document.createElement("p");
      p2.textContent = `Weight: ${pokeCharacter.weight}`;
      pokemonData.appendChild(p2);
      const p3 = document.createElement("p");
      p3.textContent = `Height: ${pokeCharacter.height}`;
      pokemonData.appendChild(p3);
    })
    .catch((error) => console.error(error));
};

// ***RANDOM ITEM BUTTON***

const itemsButton = document.querySelector(".items-button");
itemsButton.addEventListener("click", function (event) {
  event.preventDefault();

  fetch("https://pokeapi.co/api/v2/item?limit=1000")
    .then((response) => {
      console.log("Success");
      return response.json();
    })
    .then((data) => {
      const randomItem =
        data.results[Math.floor(Math.random() * data.results.length)];

      fetch(randomItem.url)
        .then((response) => {
          return response.json();
        })
        .then((itemData) => {
          const itemName = itemData.name;
          const itemSprites = itemData.sprites.default;

          const itemDataElement = document.getElementById("item-data");
          itemDataElement.textContent = "";
          const h2 = document.createElement("h2");
          h2.textContent = itemName;
          itemDataElement.appendChild(h2);
          const img = document.createElement("img");
          img.src = itemSprites;
          img.alt = itemName;
          itemDataElement.appendChild(img);
        })
        .catch((error) => console.error("Error:", error));
    })
    .catch((error) => console.error("Error:", error));
});

const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", function (event) {
  event.preventDefault();
  const searchInput = document.querySelector("#search-input");
  searchInput.value = "";
  const pokemonDataElement = document.getElementById("pokemon-data");
  pokemonDataElement.textContent = "";
  const itemDataElement = document.getElementById("item-data");
  itemDataElement.textContent = "";
});

const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("input", function (event) {
  const searchQuery = event.target.value;

  getPokemon(searchQuery);
});

// const searchButton = document.querySelector("#search-button");
// searchButton.addEventListener("click", function (event) {
//   event.preventDefault();

// const searchQuery = document.querySelector("#search-input").value;
// getPokemon(searchQuery);
//});
