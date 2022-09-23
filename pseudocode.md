### Elements

headText
example
next
resetBtn
symbols[array of symbols]
pages[array containing objects, objects contain values]
---

### Functions

update(){
    init page state
    get values from pages[] with index
}

increment(){
    add 1 to index
    re-init page state with **update()**
    should change page index values to new page
}

reset(){
    reset index to 0
    this will set all pages[] values to page 1
    update() re-init page with new index value
}

answerKey(){
    Loop through numbers
    if number is divisible by 9
    then add selected symbol from symbols array
    randomize remaining symbols and add them to remaing numbers
}

---
Start

update()

if goBtn = clicked {
increment()
}

if resetBtn = clicked {
    reset()
}

if nextBtn = clicked {
    increment()
    if (index === 4){
        answerKey()
    }
    this will run every time btn is clicked until 4
}


