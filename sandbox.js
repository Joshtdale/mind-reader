const headText = document.getElementById('headText')
const example = document.getElementById('example')
const nextBtn = document.getElementById('next')
const resetBtn = document.getElementById('resetBtn')
var i = 0;


const pages = [
    {
    headText: 'I can read your mind',

    exampleText: '',
    resetBtn: 'GO'

},
{
    headText: 'Pick a number from 01-99',
    nextBtn: 'NEXT',
    exampleText: 'when you have your number\nclick next',
    resetBtn: ''
},
{
    headText: 'Add both digits together to get a new number',
    nextBtn: 'NEXT',
    exampleText: 'Ex: 14 is 1 + 4 = 5\nClick next to proceed',
    resetBtn: ''
},
{
    headText: 'Subtract your new number from the original number',
    nextBtn: 'NEXT',
    exampleText: 'Ex: 14 - 5 = 9\nclick next to proceed',
    resetBtn: ''
},
{
    headText: '',
    nextBtn: 'REVEAL',
    exampleText: 'Find your new number.\nNote the symbol beside the number',
    resetBtn: ''
},
{
    headText: '',
    nextBtn: 'REVEAL',
    exampleText: 'Your symbol is:\n${}',
    resetBtn: ''
},
]

function increment(){
    i++;
    console.log(i)
    update()
}

function update(){
    
if (i === 0){
    nextBtn.style.display = 'none';
    console.log('i = 0')
} else {
    nextBtn.style.display = 'block';
}
headText.innerText = pages[i].headText
nextBtn.innerText = pages[i].nextBtn
example.innerText = pages[i].exampleText
resetBtn.innerText = pages[i].resetBtn


}

resetBtn.addEventListener('click', () => {
    if (i === 0){
        increment()
    }
})

nextBtn.addEventListener('click', () => {
    if (i > 0){
increment()
    }
})



update()
// nextBtn.style.display = 'none';