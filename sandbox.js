const headText = document.getElementById('headText')
const example = document.getElementById('example')
const nextBtn = document.getElementById('next')
var i = 0;


const pages = [
    {
    headText: 'I can read your mind',
    exampleText: 'Example text'

},
{
    headText: 'Pick a number from 01-99',
    exampleText: 'New exampleText'
}
]
headText.innerText = pages[i].headText
// exampleText.innerText = pages[i]

nextBtn.addEventListener('click', () => {
i++;
console.log(i)
headText.innerText = pages[i].headText
})

