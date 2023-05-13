const getAllValues = document.querySelectorAll('[data-value="value"]')
const remainder = document.querySelector('[data-value="remainder"]')
const result = document.querySelector('[data-value="result"]')
const sum = document.querySelector('[data-sum]')
const substract = document.querySelector('[data-substract]')
const multiplication = document.querySelector('[data-multiplication]')
const division = document.querySelector('[data-division]')
const equal = document.querySelector('[data-equal]')
const back = document.querySelector('[data-back]')
const clean = document.querySelector('[data-clean]')
const percentage = document.querySelector('[data-percentage]')

const signs = {
    sum: '➕',
    negative: '➖',
    divide: '➗',
    multiplication: '✖',
    percentage: '%',
    back: 'Back',
    ac: 'AC',
    equal: '='
}

let numsToResolve = []
let calculation

getAllValues.forEach(value => {
    value.addEventListener('click', () => {
        if(remainder.textContent == 0){
            remainder.textContent = ""
        }
        if(remainder.textContent.includes('.') && value.textContent === '.') return
        remainder.textContent += value.textContent
    })
})
const handleOperationButtonClick = (operation) => {
    if(remainder.textContent == 0) return
    if(numsToResolve.length >= 2) return
    numsToResolve.push(remainder.textContent)
    numsToResolve.push(operation)
    remainder.textContent = 0
    console.log(numsToResolve)
}
sum.addEventListener('click', () => {
    handleOperationButtonClick(signs.sum)
})
substract.addEventListener('click', () => {
    handleOperationButtonClick(signs.negative)
})
multiplication.addEventListener('click', () => {
    handleOperationButtonClick(signs.multiplication)
})
division.addEventListener('click', () => {
    handleOperationButtonClick(signs.divide)
})
clean.addEventListener('click', () => {
    numsToResolve = []
    calculation = 0
    result.textContent = 0
    remainder.textContent = 0
})
back.addEventListener('click', () => {
    let resultRemainder = remainder.textContent
    let newNumber = Number(String(resultRemainder).slice(0, -1))
    remainder.textContent = newNumber
})

equal.addEventListener('click', () => {
    const toNumber = parseFloat(remainder.textContent)
    if(numsToResolve.length == 2 && toNumber){
       numsToResolve.push(toNumber)
       if(numsToResolve.includes(signs.sum)){
            const firstNumber = parseFloat(numsToResolve[0])
            const secondNumber = numsToResolve[numsToResolve.length - 1]
            calculation = firstNumber + secondNumber
            result.textContent = calculation
            remainder.textContent = calculation
        }
        if(numsToResolve.includes(signs.negative)){
            const firstNumber = parseFloat(numsToResolve[0])
            const secondNumber = numsToResolve[numsToResolve.length - 1]
            console.log(numsToResolve)
            calculation = firstNumber - secondNumber
            result.textContent = calculation
            remainder.textContent = calculation
        }
        if(numsToResolve.includes(signs.multiplication)){
            const firstNumber = parseFloat(numsToResolve[0])
            const secondNumber = numsToResolve[numsToResolve.length - 1]
            calculation = firstNumber * secondNumber
            result.textContent = calculation
            remainder.textContent = calculation
        }
        if(numsToResolve.includes(signs.divide)){
            const firstNumber = parseFloat(numsToResolve[0])
            const secondNumber = numsToResolve[numsToResolve.length - 1]
            calculation = firstNumber / secondNumber
            result.textContent = calculation
            remainder.textContent = calculation
        }
        numsToResolve = []
    }
})

