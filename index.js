const button = document.querySelector(".button");
const showText = document.querySelector(".showText");
const typeText = document.querySelector(".hidden");

let scrambledWord; 
let originalWord; 

const words = [
  "apple","mango","orange","shubham","computer","laptop","mobile"
];


button.addEventListener('click', () => {
    if (button.innerHTML === "Start") {
      button.innerHTML = "Guess";
     
      typeText.classList.remove('hidden');
      typeText.focus();
  
      showWord(); // Show a scrambled word
    } else if (button.innerHTML === "Guess") {
      checkWord(); // Check the user's guess
    }
  });



const showWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  originalWord = words[randomIndex];
  scrambledWord = shuffleString(originalWord);
  showText.textContent = scrambledWord; // Display the scrambled word
}

const shuffleString = (inputString) => {
  return inputString.split('').sort(() => Math.random() - 0.5).join('');
}

const checkWord = () => {
  const userGuess = typeText.value.toLowerCase(); 

  if (userGuess === originalWord) { // Compare with the original word
    showText.textContent="Correct!";
  } else {
    showText.textContent="Wrong guess. Try again.";
  }

  // Reset the game
  button.innerHTML = "Start";
  typeText.value = "";
  typeText.classList.add('hidden');
  showText.textContent = "";
}


