let score = JSON.parse(localStorage.getItem('score')) || {
                Wins: 0,
                Losses: 0,
                Ties: 0
            };

        updateScoreElement();

        /* if (!score) {
            score = {
                Wins: 0,
                Losses: 0,
                Ties: 0 
            };
        } */

let isAutoPlaying = false;
let intervalId;

function autoplay() {
    if(!isAutoPlaying) {
        intervalId = setInterval(() => {
        const playerMove = pickComputerMove();
        playGame(playerMove);
        },1000);
        isAutoPlaying = true;
        } else {
            clearInterval(intervalId);
            isAutoPlaying = false;
        }
    }

document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('Rock');
 });

 document.querySelector('.js-paper-button').addEventListener('click', () => {
    playGame('Paper');
 });

 document.querySelector('.js-scissor-button').addEventListener('click', () => {
    playGame('Scissor');
 });

 document.body.addEventListener('keydown', (event) => {
    if(event.key === 'r') {
        playGame('Rock');
    } else if (event.key === 'p') {
        playGame('Paper');
    } else if (event.key === 's') {
        playGame('Scissor');
    }
 });

        function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'Scissor') {
           if(computerMove === 'Rock') {
            result = 'You Lose.';
        } else if (computerMove === 'Paper') {
            result = 'You Win.';
        } else if (computerMove === 'Scissor') {
            result = 'Tie.';
        }

        } else if (playerMove === 'Paper') {
            if(computerMove === 'Rock') {
                result = 'You Win.';
            } else if (computerMove === 'Paper') {
                result = 'Tie.';
            } else if (computerMove === 'Scissor') {
                result = 'You Lose.';
        }

        }else if (playerMove === 'Rock') {
             if(computerMove === 'Rock') {
                result = 'Tie.';
            } else if (computerMove === 'Paper') {
                result = 'You Lose.';
            } else if (computerMove === 'Scissor') {
                result = 'You Win.';
            }
        }

        if (result === 'You Win.') {
            score.Wins += 1;
        } else if (result === 'You Lose.') {
            score.Losses += 1;
        } else if (result === 'Tie.') {
            score.Ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));

        updateScoreElement();

        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML = `You 
        <img src="img/${playerMove}-emoji.png" alt="Rock" class="move-icon">
        <img src="img/${computerMove}-emoji.png" alt="Scissor" class="move-icon">
        Computer`; 


        /* alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`); */
        }

        function updateScoreElement() {
            document.querySelector('.js-score').innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
        }

        function pickComputerMove() {
            const randomNumber = Math.random();

            // Scope is only inside this function
            let computerMove = '';

            if(randomNumber >= 0 && randomNumber < 1/3) {
                computerMove = 'Rock';
            } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
                computerMove = 'Paper';
            } else if (randomNumber >= 2/3 && randomNumber < 1){
                computerMove = 'Scissor'
            }
            return computerMove;
        }