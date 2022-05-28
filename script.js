const screenInput = document.getElementById('screen-input')

window.onload = function () {
    screenInput.focus()
}

const calcButton = document.querySelectorAll('.calc-button')

console.log(calcButton)

calcButton.forEach(button => {
    if (button.innerHTML !== '=') {
        button.addEventListener('click', showOnScreen)
    } else {
        button.addEventListener('click', solve)
    }
})

const deleteButton = document.getElementById('delete')
deleteButton.addEventListener('click', () => {
    let newArray = screenInput.value.split('')

    newArray.splice(-1, 2)

    screenInput.value = ''

    newArray.forEach(element => {
        screenInput.value += element
    })

})

function showOnScreen(e) {
    screenInput.focus()
    screenInput.value += e.target.innerHTML
}

function solve() {
    const answer = eval(screenInput.value)
    screenInput.value = answer
}