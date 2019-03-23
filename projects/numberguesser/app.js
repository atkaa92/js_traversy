let     min = 1, 
        max = 10, 
        winningNum = getRandomNumber(min, max), 
        guessesLeft = 3;
const   game = document.querySelector('#game'),
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num'),
        guessBtn = document.querySelector('#guess-btn'),
        guessInput = document.querySelector('#guess-input'),
        message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function(e){
    if (e.target.className === 'play-again') {
        window.location.reload()
    }
})

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red')
    }
    if (guess === winningNum) {
        gameOver(true, `${winningNum} is correct. You won.`)
    }else{
        guessesLeft--;
        if (guessesLeft == 0) {
            gameOver(false, `Game over. You lost. The correct number was ${winningNum}`)
        }else{
            guessInput.style.borderColor = 'red'
            guessInput.value = ''
            setMessage(`Guess is not correct. Guesses left ${guessesLeft}`, 'red')
        }
    }
})

function setMessage(mes, color) {
    message.style.color = color
    message.textContent = mes
}

function gameOver(won, msg) {
    let color;
    color = won === true ? 'green' : 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color
    setMessage(msg, color)
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

function getRandomNumber(min, max) {
    return Math.floor((Math.random()*(max-min+1)+min))
}