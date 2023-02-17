const buttons = document.querySelectorAll('button');
const resultbox = document.querySelector('.textbox');
const results = document.createElement('div'); 
const choices = document.createElement('div'); 




buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());
    });
});


// Chooses the computer's move
function computerPlay() { 
    const moves = ['rock','paper','scissors']; 
    const random = Math.floor(Math.random() * 3);
    return moves[random]
}

function playRound(playerChoice, computerChoice) { 

    resultbox.textContent = ""
    results.textContent = ""
    

    if (playerChoice === computerChoice) {
        results.classList.add('results');
        choices.classList.add('choice');
        results.textContent = 'It\'s a tie!'
        choices.textContent = "Both you and the computer chose " + playerChoice;
        resultbox.appendChild(results);
        resultbox.appendChild(choices);

    } else if (
    (playerChoice === "rock" && computerChoice === "paper") || 
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")) {
        results.classList.add('results');
        choices.classList.add('choice');
        results.textContent = "You Lost!\n"
        choices.textContent = "You chose " + playerChoice + " and the computer chose "+ computerChoice;
        resultbox.appendChild(results);
        resultbox.appendChild(choices);

    } else {
    results.classList.add('results');
    choices.classList.add('choice');
    results.textContent = "You won!\n"
    choices.textContent = "You chose " + playerChoice + " and the computer chose "+ computerChoice;
    resultbox.appendChild(results);
    resultbox.appendChild(choices);

    }
    
};