let kenobiHealth = 100

// let stringHealth = String(kenobiHealth)
// let boolHealth = Boolean(kenobiHealth)

// console.log(boolHealth)

let theWinnerIs = "Kenobi is the winner"

let newWinner = theWinnerIs.replace('Kenobi', 'Anakin')

newWinner = newWinner.toUpperCase()
let newWinnerSplit = newWinner.split(' ')
let newWinnerKebab = newWinnerSplit.join('-')

// console.log(newWinnerKebab)

function isKenobiAlive() {
    if (kenobiHealth > 0) {
        console.log('Obi-wan is alive.')
    } else {
        console.log('RIP Kenobi.')
    }
}

isKenobiAlive()

function surpriseAttack(attack) {
    kenobiHealth -= attack
}

let kenobiDefense = 15

function readyAttack(attack) {
    kenobiHealth -= (attack - kenobiDefense)
    isKenobiAlive()
}

surpriseAttack(20)

readyAttack(30)

// function greeting(person1, person2) {
//     return `${person1} greeets ${person2}`
// }


// const greeting = function (person1, person2) {
//     return `${person1} greets ${person2}`
// }

// ARROW FUNCTION 
// IMPLICIT RETURN
// const greeting = (person1, person2) => `${person1} greeets ${person2}`

// EXPLICIT RETURN
// const greeting = (person1, person2) => {
//     return `${person1} greets ${person2}`
// }

console.log (greeting('Alec', 'Jeddy'))