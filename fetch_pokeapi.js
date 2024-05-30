const API_POKEMONAPI = 'https://pokeapi.co/api/v2/';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json'
    }
};

let toNumber = 151;
let pokemonInPage = 1;
let pokemonForPage = 15;

let styleType = new Map();

styleType.set('grass', 'typePlant');
styleType.set('poison', 'typePoison')
styleType.set('fire', 'typeFire');
styleType.set('water', 'typeWater');
styleType.set('flying', 'typeFlying');
styleType.set('bug', 'typeBug');
styleType.set('normal', 'typeNormal');
styleType.set('electric', 'typeElectric');
styleType.set('ground', 'typeGround');
styleType.set('fairy', 'typeFairy');
styleType.set('fighting', 'typeFighting');
styleType.set('psychic', 'typePsychic');
styleType.set('rock', 'typeRock');
styleType.set('steel', 'typeSteel');
styleType.set('ice', 'typeIce');
styleType.set('ghost', 'typeGhost');
styleType.set('dragon', 'typeDragon')

const createElement = (tag, className, attributes = {}) => {
    // Creamos un nuevo elemento HTML del tipo especificado (tag)
    const element = document.createElement(tag);
    
    // Si se especificó una clase, la añadimos al elemento
    if (className) {
        element.classList.add(className);
    }
    
    // Iteramos sobre los atributos pasados como argumento y los añadimos al elemento
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    
    // Devolvemos el elemento creado
    return element;
};

const fetchMoviesGrid = async (toId, page = 1) => {
    // Seleccionamos el contenedor de películas de tendencia en el DOM
    const pokemonListContainer = document.querySelector('.pokemonListContainer');
    // Limpiamos el contenido previo del contenedor
    pokemonListContainer.innerHTML = '';

    for (let index = toId; index < toId+15; index++) {
        const response = await fetch(`${API_POKEMONAPI}/pokemon/${index}`, options);
        
        const data = await response.json();

        const pokemonContainer = createElement('div', 'pokemonContainer');
        const anchor = createElement('a', 'pokemonLink');
        anchor.href = '#'
        const pokemonImage = createElement('div', 'pokemonImage');
        const img = createElement('img', '', {
            src: `https://images.gameinfo.io/pokemon-trimmed/60/p${index}.webp`,
            alt: data.name,
            loading: 'lazy'
        });
        const pokemonInfo = createElement('div', 'pokemonInfo');
        const pokemonName = createElement('span', '');
        pokemonName.textContent = data.name;
        const pokemonTypes = createElement('div', 'types');
        const pokemonType = createElement('div', `${styleType.get(data.types[0].type.name)}`);
        pokemonType.classList.add('one');
        const pokemonTypeName = createElement('span', '');
        pokemonTypeName.textContent = `${data.types[0].type.name}`;
        const pokemonNumberPokedex = createElement('div', 'numberPokedex');
        pokemonNumberPokedex.textContent = data.id;

        pokemonListContainer.appendChild(pokemonContainer);
        pokemonContainer.appendChild(anchor);
        anchor.appendChild(pokemonImage);
        anchor.appendChild(pokemonInfo);
        pokemonImage.appendChild(img);
        pokemonInfo.appendChild(pokemonNumberPokedex);
        pokemonInfo.appendChild(pokemonName);
        pokemonInfo.appendChild(pokemonTypes);
        pokemonTypes.appendChild(pokemonType);
        pokemonType.appendChild(pokemonTypeName);
        
        if(data.types.length == 2 && styleType.has(data.types[1].type.name)){
            const pokemonType2 = createElement('div', `${styleType.get(data.types[1].type.name)}`);
            pokemonType2.classList.add('one');
            const pokemonTypeName2 = createElement('span', '');
            pokemonTypeName2.textContent = `${data.types[1].type.name}`;
            pokemonTypes.appendChild(pokemonType2);
            pokemonType2.appendChild(pokemonTypeName2);
        }
        if(index >= toNumber){
            pokemonInPage += (pokemonForPage);
            pokemonListContainer.parentElement.setAttribute('data-page', page);
            return;
        }
    }
    pokemonInPage += pokemonForPage;
    pokemonListContainer.parentElement.setAttribute('data-page', page);
    
};


document.querySelector('.anterior').addEventListener('click', () => {

    let currentPage = Number(document.querySelector('.pokemonListSection').getAttribute('data-page'));

    if (currentPage <= 1) return;

    pokemonInPage -= pokemonForPage*2;
    fetchMoviesGrid(pokemonInPage, currentPage - 1);
});

document.querySelector('.posterior').addEventListener('click', () => {

    let currentPage = Number(document.querySelector('.pokemonListSection').getAttribute('data-page'));

    if(currentPage >= Math.floor(toNumber/pokemonForPage) + 1) return;

    fetchMoviesGrid(pokemonInPage, currentPage + 1);
});


document.addEventListener('DOMContentLoaded', () => {

    fetchMoviesGrid(pokemonInPage);
});