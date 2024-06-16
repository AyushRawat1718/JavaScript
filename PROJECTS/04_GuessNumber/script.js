let randomNumber = parseInt(Math.random()*100 + 1);
const userInput = document.querySelector('.guessField')
const submitButton = document.querySelector('#submit')
const message_area = document.querySelector('.message')
const remainingGuesses = document.querySelector('.guesses_remaining')
const all_guesses = document.querySelector('.all_guesses')
const newGame = document.querySelector('.NewGame')

let guessCount = 0;

let playGame = true;

if (playGame){
  submitButton.addEventListener('click', (e) =>{
    e.preventDefault();
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}

const validateGuess = (guess) =>{
  //Check for the guessCount and then for the validity of the guess
  if (guessCount < 10){
    if(guess < 0 || guess > 100 || isNaN(guess)){
      displayMessage(`Provide a valid guess !!`)
    }
    else{
      checkGuess(guess)
      clearUpdate(guess)
    }
  }
  else{
    displayMessage(`Game over! Random Number was ${randomNumber}`)
    endGame()
  }
}

const clearUpdate = (guess) =>{
  //Update guessCount, clear input field, display given guess, update remaining guess count
  guessCount++;
  userInput.value = '';
  remainingGuesses.innerHTML = 10-guessCount
  all_guesses.innerHTML += `${guess}, `
}

const displayMessage = (content) =>{
  //Display all the required messages
  message_area.innerHTML = content
}

const checkGuess = (guess) =>{
  //Compare the guess number 
  if (guess === randomNumber){
    displayMessage(`Gotcha!! Correct Guess`)
    endGame();
  }
  else if (guess > randomNumber){
    displayMessage(`Your guess is too high!`)
  }
  else {
    displayMessage(`Your guess is too low!`)
  }
}

const endGame = () =>{
  //Clear input field, lock input field add a button for new game
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  newGame.innerHTML = `<button id = newGameButton>Start New Game</button>`
  playGame = false
  startGame()
}

const startGame = () =>{
  const newGameButton = document.querySelector('#newGameButton')
  newGameButton.addEventListener('click', () =>{
    guessCount = 0;
    remainingGuesses.innerHTML = 10-guessCount;
    randomNumber = parseInt(Math.random()*100 + 1);
    all_guesses.innerHTML = "";
    message_area.innerHTML = "";
    userInput.removeAttribute('disabled');
    newGame.innerHTML = "";
    playGame = true
  })
}