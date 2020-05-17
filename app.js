/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Defining the scores variable
let scores, roundScore, activePlayer, gamePlaying;

newGame();

// // Uisng JS to change/ read the html  
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

// Selecting the button
// Creating what happens when the button is clicked
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // 1. We need a random number
        let dice = Math.floor(Math.random() * 6 + 1);

        // 2. Display the result
        let diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // 3. Display the round score only if the round score was not 1

        if (dice !== 1) {
            // adds the dice value to the round score 
            roundScore += dice;
            // This displays the value of the round score to
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            document.querySelector('.message0').style.display = 'none';
            document.querySelector('.message1').style.display = 'none';


        } else {// if active player rolls a one
            // Displays a message that says you rolled a 1
            document.querySelector('.message' + activePlayer).style.display = 'inline'
            // Changes the active player
            nextPlayer();
        }
    }


    // // If score of the active player is more than 100 and the roll dice button is clicked  // Start a new game
    // if (scores[activePlayer] >= 10) {
    //     newGame();
    // }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        //Add scores to global score // score[0] or score[1]
        let globalScore = (scores[activePlayer] += roundScore);
        document.querySelector('#score-' + activePlayer).textContent = globalScore;



        if (scores[activePlayer] >= 10) {
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            console.log('Winner');
            document.querySelector('#name-' + activePlayer).textContent = 'You Won!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            gamePlaying = false;
        } else {
            console.log('Loser');
            nextPlayer();
        }

    }


});

// This changes the player
function nextPlayer() {
    // Your round score becomes zero
    roundScore = 0;
    // Your round score is displayed as Zero
    document.querySelector('#current-' + activePlayer).textContent = roundScore;

    // Changes the active player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;


    // Swapping the active class
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

function resetName() {
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
}

function newGame() {
    gamePlaying = true;
    resetName();
    // Makes the dice disappear
    document.querySelector('.dice').style.display = 'none';
    // Resets the values of the variables
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    // Makes the scores all 
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    // Removes the winner class
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    // Adds the visual indicator to the class player 1
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');

    // Makes pLayer 1 the active player
    activePlayer === 0 ? activePlayer = 0 : activePlayer = 0;
}



// Calls the new game function and starts a new game
document.querySelector('.btn-new').addEventListener('click', newGame);


/****************************************
CODE CHALLENGES
****************************************/

//Challenge 1

//1. Player rolls 6 
// two variables - last roll  and current roll
// current round score = current roll + last roll + any previous rolls
//if previous roll === 6 && current roll === 6 // player score[activePlayer] = 0;
// if not then active score should be 
//2. player rolls 6 again
//3. Player loses all their score
//










// document.querySelector('#btn-hold').addEventListener('click', function () {
//     // Figure out current player


//     // Add scores to global score // score[0] or score[1]
//     score[activePlayer] += roundScore;

//     // Change player to other player

// })


 // if (dice !== '1') {
    //     // Add score
    //     roundScore += dice;
    //     document.querySelector('#current-' + activePlayer).textContent = roundScore;

    // } else if (dice === '1') {
    //     //Next player
    //     roundScore = 0;
    //     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;


    // }
