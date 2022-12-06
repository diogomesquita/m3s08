
const url = "https://pokeapi.co/api/v2/pokemon/";
const qtty = prompt("quantos Pokemons quer listar?");

let card = document.querySelector('.card');
let list =  document.querySelector('.list');

async function getPokemon(url, qtty) {
    for( let pk = 1; pk <= qtty; pk++){
        const response = await fetch(`${url}${pk}/`);
        const data = await response.json();

        let listDiv = document.createElement('div');
        let butao = document.createElement('a');

        butao.innerText = data.name;
        butao.setAttribute('id', `${pk}`);

        listDiv.appendChild(butao);
        list.appendChild(listDiv);

        butao.addEventListener('click', (e) => {
            e.preventDefault();
            card.innerHTML = '';
            let imgDiv = document.createElement('div');
            let pokeImg = document.createElement('img');
            pokeImg.setAttribute('src', data.sprites.front_default);
            pokeImg.setAttribute('id', `${pk}`);
            imgDiv.appendChild(pokeImg);
            card.appendChild(imgDiv);
            
        })
    }
}

getPokemon(url, qtty);