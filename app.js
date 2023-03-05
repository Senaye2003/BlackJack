let player = {
    name: "Senaye",
    chips: 100
}

let cards = []
let score = 0
let hasBJ = false;
let isAlive = false
let message = ""
let messageId = document.getElementById("message-id")
let scoreId = document.getElementById("score-id")
let cardsId = document.getElementById("cards-id")
let playerId = document.getElementById("player-id")

playerId.textContent = `${player.name}: \$${player.chips}`

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function start() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    score = firstCard + secondCard
    renderGame()
}

function renderGame(){
   do {
     cardsId.textContent = "Cards: "
     for (let i = 0; i < cards.length; i++) {
         cardsId.textContent += cards[i] + " "
     }
     
     scoreId.textContent = `Score: ${score}`
     if (score <= 20) {
         message = "Do you want to draw a new card?"
     } else if (score === 21) {
         message = "You've got Blackjack!"
         hasBlackJack = true
     } else {
         message = "You're out of the game!"
         isAlive = false
     }
     messageId.textContent = message
   } while (condition);
}


function drawNewCard() {
    do {
        if (isAlive === true && hasBJ === false) {
            let card = getRandomCard()
            score += card
            cards.push(card)
            renderGame()        
        }
    } while (condition);
}