/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
const totalScore = {playerScore : 0}
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
    const rps = [`Rock`, `Paper`, `Scissors`]
    const index = Math.floor(Math.random() * rps.length)
    return rps[index];
  }
  
  // ** getResult compares playerChoice & computerChoice and returns the score accordingly **
  // human wins - getResult('Rock', 'Scissors') 👉 1
  // human loses - getResult('Scissors', 'Rock') 👉 -1
  // human draws - getResult('Rock', 'Rock') 👉 0
  function getResult(playerChoice, computerChoice) {
    // return the result of score based on if you won, drew, or lost
    /*
    r-s = 1
    p-r = 1
    s-p = 1
    r-r, p-p, s-s = 0
    else(score = -1)
    player choice or computr choice function k argument mr jab bhi usko call krenge to dom se le sakte hai or loop k sath
    */
  
  
    // All situations where human draws, set `score` to 0
    let score;
    if (playerChoice == computerChoice) {
      score = 0
    }
      
  
    // All situations where human wins, set `score` to 1
     else if(playerChoice=='Rock' && computerChoice=='Scissors'){
       score = 1
     }
    else if (playerChoice=='Paper'&&computerChoice=='Rock'){
      score = 1
    }
    else if(playerChoice=='Scissors'&& computerChoice=='Paper'){
      score = 1
    }
   
    // make sure to use else ifs here
  
  
    // Otherwise human loses (aka set score to -1)
   else{
     score = -1
   }
  
    // return score
    return score;
  }
  
  // ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
  function showResult(score, playerChoice, computerChoice) {
    // Hint: on a score of -1
    // You should do result.innerText = 'You Lose!'
    // Don't forget to grab the div with the 'result' id!
    const result = document.getElementById('result')
    const hands = document.getElementById('hands')
    const playerScore = document.getElementById('player-score')
    if(score==-1){
      result.innerText=`You Lose! Better Luck Next Time😔👍`
    }
    else if(score==1){
      result.innerText=`You Win! Hurry!!😍🙌🥳`
    }
    else{
      result.innerText=` Mamamia It's a Draw😁`
    }
    hands.innerText = `👨‍${playerChoice} vs 🤖${computerChoice}`
    playerScore.innerText =  `Your Score: ${totalScore.playerScore}`
  }
  
  // ** Calculate who won and show it on the screen **
  function onClickRPS(playerChoice) {
    const pCh = playerChoice.value
    const cCh = getComputerChoice()
    const score = getResult(pCh, cCh)
    totalScore.playerScore += score;
    showResult(score, pCh, cCh )
    
  
  }
  
  
  // ** Make the RPS buttons actively listen for a click and do something once a click is detected **
  function playGame() {
    // use querySelector to select all RPS Buttons
      const rps = document.querySelectorAll('.rpsButton')
    // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
    rps.forEach((n)=>n.addEventListener('click', () => onClickRPS(n)))
  
    // 1. loop through the buttons using a forEach loop
    // 2. Add a 'click' event listener to each button
    // 3. Call the onClickRPS function every time someone clicks
    // 4. Make sure to pass the currently selected rps button as an argument
  
    const eGame = document.getElementById('endGameButton')
    // Add a click listener to the end game button that runs the endGame() function on click
    eGame.addEventListener('click',()=>endGame(totalScore));
  }
  
  // ** endGame function clears all the text on the DOM **
  function endGame(totalScore) {
  const result = document.getElementById('result')
    const hands = document.getElementById('hands')
    const playerScore = document.getElementById('player-score')
    result.innerText='';
    hands.innerText='';
    playerScore.innerText='';
    totalScore.playerScore=0
    
  }
  
  playGame()