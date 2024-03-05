const players = require('./players.json')

let playerScore = [];

function getScore(score) {
    score.forEach(scoreData => {
        playerScore.push(scoreData.scorePoints)
    });

    console.log(Math.max(...playerScore)); 
}

getScore(players)