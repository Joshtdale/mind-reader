const headText = document.getElementById('headText')
const example = document.getElementById('example')
const nextBtn = document.getElementById('next')
const resetBtn = document.getElementById('resetBtn')

var i = 0;

// const allSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(']

// let symbols = []
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(']
// console.log(symbols[2])
let keySymbol = symbols[Math.floor(Math.random()*(symbols.length))]

const pages = [
    {
    headText: 'I can read your mind',

    exampleText: '',
    resetBtn: '<i class="">GO</i>'

},
{
    headText: 'Pick a number from 01-99',
    nextBtn: 'NEXT',
    exampleText: 'when you have your number\nclick next',
    resetBtn: '<i class="bi bi-arrow-counterclockwise"></i>'
},
{
    headText: 'Add both digits together to get a new number',
    nextBtn: 'NEXT',
    exampleText: 'Ex: 14 is 1 + 4 = 5\nClick next to proceed',
    resetBtn: '<i class="bi bi-arrow-counterclockwise"></i>'
},
{
    headText: 'Subtract your new number from the original number',
    nextBtn: 'NEXT',
    exampleText: 'Ex: 14 - 5 = 9\nclick next to proceed',
    resetBtn: '<i class="bi bi-arrow-counterclockwise"></i>'
},
{
    headText: '',
    nextBtn: 'REVEAL',
    exampleText: 'Find your new number.\nNote the symbol beside the number',
    resetBtn: '<i class="bi bi-arrow-counterclockwise"></i>'
},
{
    headText: keySymbol,
    nextBtn: '',
    exampleText: 'Your symbol is:' + keySymbol,
    resetBtn: '<i class="bi bi-arrow-counterclockwise"></i>'
},
]


// console.log(keySymbol)

function update(){
    
    if (i === 0 || i === 5){
        nextBtn.style.display = 'none';
        // console.log('i = 0')
    } else {
    nextBtn.style.display = 'block';
}
    headText.innerText = pages[i].headText
    nextBtn.innerText = pages[i].nextBtn
    example.innerText = pages[i].exampleText
    resetBtn.innerHTML = pages[i].resetBtn


}

function increment(){
    // if (i === 3){
    //     i = 5
    //     console.log('i = 4')
    // } else {
    i++;
    console.log(i)
    update()
    }
// }

function reset(){
    i = 0;
    update()
}

function answerKey(){
    for(n = 0; n < 100; n++){
        let x = Math.floor(Math.random()*symbols.length)
        const key = document.createElement('p')
        
        if (n < 10){
            n = '0' + n
        }

        if (n % 9 === 0){
            // symbols[0]
            
            headText.appendChild(key)
            key.innerText = n + ' - ' + keySymbol
        } 
        else {
            // symbols[x]
            headText.appendChild(key)
            key.innerText = n + ' - ' + symbols[x]
        }
        
        
        // key.innerText = i + symbols[x]
    }
    // console.log(symbols[keySymbol])
    // update()

}

resetBtn.addEventListener('click', () => {
    if (i === 0){
        increment()
    } else {
        reset()
    }
})



nextBtn.addEventListener('click', () => {
    
    if (i > 0){
increment()
}
    if (i === 4){
    answerKey()
    
}

})







update()
