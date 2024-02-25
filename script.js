document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById('start');
    const guessList = document.getElementById('guess-list');
    let min = 1;
    let max = 100;
    let guess;

    startButton.addEventListener('click', startGame);

    function startGame() {
        guess = makeGuess(min, max);
        askGuess(guess);
    }

    function makeGuess(min, max) {
        return Math.floor(min + (max - min) / 2);
    }

    function askGuess(guess) {
        const li = document.createElement('li');
        li.textContent = `Is your number ${guess}?`;
        const yesButton = createButton('Yes', () => handleAnswer('yes', guess));
        const higherButton = createButton('Higher', () => handleAnswer('higher', guess));
        const lowerButton = createButton('Lower', () => handleAnswer('lower', guess));
        li.appendChild(yesButton);
        li.appendChild(higherButton);
        li.appendChild(lowerButton);
        guessList.appendChild(li);
    }

    function handleAnswer(answer, guess) {
        if (answer === 'yes') {
            alert(`I guessed it! Your number is ${guess}.`);
            min = 1;
            max = 100;
            clearList(guessList);
        } else if (answer === 'higher') {
            min = guess + 1;
            startGame();
        } else if (answer === 'lower') {
            max = guess - 1;
            startGame();
        }
    }

    function createButton(text, onClick) {
        const button = document.createElement('button');
        button.textContent = text;
        button.onclick = onClick;
        return button;
    }

    function clearList(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
});