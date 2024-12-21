
// games.js
export class Games {
    constructor(api) {
        this.api = api;
    }

    async fetchGames(category) {
        const response = await fetch(`${this.api}/games?category=${category}`, {
            headers: {
                'X-RapidAPI-Key': '<Your-API-Key>',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        });
        return await response.json();
    }
}

// details.js
export class Details {
    constructor(api) {
        this.api = api;
    }

    async fetchDetails(id) {
        const response = await fetch(`${this.api}/game?id=${id}`, {
            headers: {
                'X-RapidAPI-Key': '<Your-API-Key>',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        });
        return await response.json();
    }
}

// main.js
import { UI } from './ui.module.js';
import { Games } from './games.js';
import { Details } from './details.js';

const apiURL = 'https://free-to-play-games-database.p.rapidapi.com/api';
const ui = new UI();
const games = new Games(apiURL);
const details = new Details(apiURL);

const navbarLinks = document.querySelectorAll('.nav-link');
const btnClose = document.getElementById('btnClose');

navbarLinks.forEach(link => {
    link.addEventListener('click', async (e) => {
        e.preventDefault();
        const category = link.textContent.trim().toLowerCase();
        const gameData = await games.fetchGames(category);
        ui.displayGames(gameData);
    });
});

document.querySelector('.container .row').addEventListener('click', async (e) => {
    const card = e.target.closest('.card');
    if (card) {
        const gameId = card.dataset.id;
        const gameDetails = await details.fetchDetails(gameId);
        ui.displayDetails(gameDetails);
    }
});

btnClose.addEventListener('click', () => {
    ui.detailsSection.innerHTML = ''; // Clear details section
});
