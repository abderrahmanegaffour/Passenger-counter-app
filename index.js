// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step
let saveEl = document.getElementById("save-el")
let countEL = document.getElementById("count-el")
let count = 0
function increment(){
    count +=1
    countEL.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.innerText += countStr
    countEL.textContent = 0
    count = 0
}



