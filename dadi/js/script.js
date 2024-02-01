const userChoice = Math.floor(Math.random() * 6 + 1)
const computerChoice = Math.floor(Math.random() * 6 + 1)

document.getElementById("userNumber").innerHTML = `Il tuo numero è ${userChoice}`
document.getElementById("computerNumber").innerHTML = `Il numero del computer è ${computerChoice}`

if (userChoice == computerChoice) {
    document.getElementById("finalResult").innerHTML = "Pareggio"
} else if (userChoice > computerChoice) {
    document.getElementById("finalResult").innerHTML = "Hai vinto"
} else {
    document.getElementById("finalResult").innerHTML = "Hai perso"
}