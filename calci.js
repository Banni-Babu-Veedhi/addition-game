let numOne = document.getElementById("firstNumber");
let numTwo = document.getElementById("secondNumber");
let inPut = document.getElementById("userInput");
let resultElement = document.getElementById("gameResult");

let randamNumberOne;
let randamNumberTwo;

function reset() {
    randamNumberOne = Math.ceil(Math.random() * 100);
    randamNumberTwo = Math.ceil(Math.random() * 100);
    numOne.textContent = randamNumberOne;
    numTwo.textContent = randamNumberTwo;
    inPut.value = "";
    resultElement.textContent = "";
    resultElement.style.backgroundColor = "#f5f7fa";
}

function check() {
    let total = (randamNumberOne + randamNumberTwo);
    let answer = parseInt(inPut.value);
    if (total === answer) {
        resultElement.textContent = "Congratulations! You got it right.";
        resultElement.style.backgroundColor = "#028a0f";
    } else {
        resultElement.textContent = "Please Try Again!";
        resultElement.style.backgroundColor = "#1e217c";
        inPut.value = "";
    }
}