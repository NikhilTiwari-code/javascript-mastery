// const play = document.querySelector("#play");
// const playAgain = document.querySelector("#play-again");
// const result = document.querySelector("#result");
// const game = document.querySelector("#game");

// play.addEventListener("click", function(e) {
//     e.preventDefault();
//     const gameValue = parseFloat(game.value);
//     const generatedNumber = Math.floor((Math.random()*10)+1)
//     console.log(generatedNumber);
    

//     if (isNaN(gameValue)) {
//         result.textContent = "Please enter a valid number.";
//     // } else {
//     //     console.log(gameValue);
//     //     result.textContent = `You entered: ${gameValue}`;
//      }

//     if(gameValue===generatedNumber){
//        result.innertext = `you entered the correct number ${generatedNumber}`
//     }else{
//         result.innerHTML= (`the random  number is ${generatedNumber} `)
//     }

// });

// playAgain.addEventListener("click",function(){
//      removeEventListener(play)
// })



const play = document.querySelector("#play");
const playAgain = document.querySelector("#play-again");
const result = document.querySelector("#result");
const game = document.querySelector("#game");

play.addEventListener("click", function () {
    const gameValue = parseFloat(game.value); // Get user input
    const generatedNumber = Math.floor(Math.random() * 10) + 1; // Generate random number between 1 and 10
    console.log(generatedNumber); // Log the random number for debugging

    if (isNaN(gameValue) || gameValue < 1 || gameValue > 10) {
        result.textContent = "Please enter a valid number between 1 and 10.";
        result.style.color = "#f44336"; // Red color for error message
    } else if (gameValue === generatedNumber) {
        result.textContent = `🎉 You entered the correct number: ${generatedNumber}`;
        result.style.color = "#4caf50"; // Green color for success message
    } else {
        result.textContent = `❌ The random number is ${generatedNumber}. Try again!`;
        result.style.color = "#f44336"; // Red color for incorrect guess
    }
});

playAgain.addEventListener("click", function () {
    game.value = ""; // Clear the input field
    result.textContent = ""; // Clear the result message
}); 