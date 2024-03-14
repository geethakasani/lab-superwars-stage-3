
const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// Initialize players with image and strength
const initPlayers = (players) => {
    let usedNames = new Set();
    let detailedPlayers = players.map((player, i) => {
        let playerName = player;
        while (usedNames.has(playerName)) {
            playerName = `${player} ${Math.floor(Math.random() * 1000)}`;
        }
        usedNames.add(playerName);
        let playerIndex = players.indexOf(player);
        let playerImage = `images/super-${playerIndex + 1}.png`;
        let playerStrength = getRandomStrength();
        let playerType = Math.random() > 0.5 ? "hero" : "villain";
        return { name: playerName, strength: playerStrength, image: playerImage, type: playerType };
    });

    return detailedPlayers;
}

// Getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = players
        .filter(player => player.type === type && player.strength !== undefined)
        .map((player, i) => {
            return `<div class="player">
                            <img src="${player.image}" alt="">
                            <div class="name">${player.name}</div>
                            <div class="strength">${player.strength}</div>
                        </div>`;
        })
        .join('');

    return fragment;
}


// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players.filter(player => player.type === 'hero'), 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players.filter(player => player.type === 'villain'), 'villain');
}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}
