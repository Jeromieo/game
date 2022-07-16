const computerChoice = document.getElementById('computer-choice')
const yourChoice = document.getElementById('your-choice')
const result = document.getElementById('result')
const outcome = document.querySelectorAll('button')
let choice
let compute
let results

outcome.forEach(outcome => outcome.addEventListener('click', (e) =>{
    choice = e.target.id
    yourChoice.innerHTML = choice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * outcome.length + 1)
    console.log(randomNumber)

    if(randomNumber === 1){
        compute ='rock'
    }
    if(randomNumber === 2){
        compute ='scissors'
    }
    if(randomNumber === 3){
        compute ='paper'
    }

    computerChoice.innerHTML = compute
}

function getResult(){

    if( choice === compute){
        results = 'draw'
    }

    if( choice === 'rock' && compute === 'scissors'){
        results = 'you win'
    }
    
    if( choice === 'rock' && compute === 'paper'){
        results = 'you lose'
    }

    if( choice === 'paper' && compute === 'scissors'){
        results = 'you lose'
    }
    if( choice === 'paper' && compute === 'rock'){
        results = 'you win'
    }
    
    if( choice === 'scissors' && compute === 'rock'){
        results = 'you lose'
    }
    
    if( choice === 'scissors' && compute === 'paper'){
        results = 'you win'
    }
    result.innerHTML = results
}
