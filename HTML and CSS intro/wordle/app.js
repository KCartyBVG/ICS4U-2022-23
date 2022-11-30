const titleDisplay = document.querySelector('.tile-container') //using the dot means CLASS
const keyboard = document.querySelector('.key-container')
const messageDisplay = document.querySelector('.message-container')


const wordle = 'SUPER' //word we're trying to guess
const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '«',
]

const guessRows = [ //6 items with 5 items in each
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]

let currentRow = 0
let currentTile = 0 //these are the current positions 
let isGameOver = false

guessRows.forEach((guessRow, guessRowIndex) => {
    const rowElement = document.createElement('div') //creating a div
    rowElement.setAttribute('id', 'guessRow-' + guessRowIndex) // give the div an id of "guessRow" + index
    guessRow.forEach((guess, guessIndex) => { //for each guess in the guess row
        const tileElement = document.createElement('div')//creates each tile in the rows
        tileElement.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' +guessIndex)
        tileElement.classList.add('tile')//adding class to change style
        rowElement.append(tileElement)
    })
    titleDisplay.append(rowElement) //put that element in the title display
})  

keys.forEach(key => { // for each letter, creating a button
    const buttonElement = document.createElement('button') //create a button element
    buttonElement.textContent = key //added/printed the text to the button
    buttonElement.setAttribute('id', key) //setting an id
    buttonElement.addEventListener('click', () =>handleClick(key)) //when clicked
    keyboard.append(buttonElement) //put it in the keyboard
})

const handleClick = (letter) => {
    console.log('clicked', letter) //passing through the key so you knew which key was clicked
    if (letter === '«') {
        deleteLetter()
        return
    }
    if (letter === 'ENTER'){
        checkRow()
        return
    }
    addLetter(letter)
}

const addLetter = (letter) => { // btw --> = () => shows a function  instead of =function() =>
        if (currentTile < 5 && currentRow < 6)   {  
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)//gets tile id
        tile.textContent = letter
        guessRows[currentRow][currentTile] = letter //changing the array, adding the letter to its position
        tile.setAttribute('data', letter)//will use later when we add colours
        currentTile++ //adding one to the current tile so that it moves to the next tile
        console.log('guessRows', guessRows) //just to show the array, doesn't actually do anything for the wordle
    }
}

const deleteLetter = () => {
    if(currentTile > 0) {
        currentTile-- //goes to the previous tile (the last one with a letter)
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile) //gets tile id
        tile.textContent = ''// changing the tile to empty instead of the letter
        guessRows[currentRow][currentTile] = '' //changing the array element to empty
        tile.setAttribute('data', '')
    }
}

const checkRow = () => { //what happends when you press enter
    const guess = guessRows[currentRows].join('')

    if (currentTile < 4) {
        console.log('guess is ' + guess, 'wordle is' + wordle)
        flipTile()
        if (wordle == guess) {
            showMessage('Magnificent!')
            isGameOver = true
            return
        } else {
            if (currentRow >= 5) {
                isGameOver = false
                showMessage('Game Over')
                return
            }
            if (currentRow < 5) {
                currentRow++
                currentTile = 0
            }
        }
    }
}

const showMessage = (message) => {
    const messageElement = document.createElement('p')
    messageElement.textContent = message
    messageDisplay.append(message)
    setTimeout(() => messageDisplay.removeChild(messageElement), 2000) //message disapears after 2000 miliseconds
}

const addColourToKey = ((keyLetter, colour) => {
    const key = document.getElementById(keyLetter)
    key.classList.add(colour)
}

const flipTile = () => {
    const rowTiles = document.querySelector('#guessRow' + currentRow).childNodes // give all the children of the row
    let checkWordle = wordle
    const guess = []    
    rowTiles.forEach((tile, index) => {
        const dataLetter = tile.getAttribute('data')//gets each tiles data . atrtibute -> the letter
        
        setTimeout(() => {
            tile.classList.add('flip')
            if(dataLetter == wordle[index]) {
                tile.classList.add('green-overlay') // giving the class green-overlay when the letter is correct 
                addColourToKey(dataLetter, 'green-overlay')
            } else if (wordle.includes(dataLetter)) {
                tile.classList.add('yellow-overlay')
                addColourToKey(dataLetter, 'yellow-overlay')
            } else {
                tile.classList.add('grey-overlay')
                addColourToKey(dataLetter, 'grey-overlay')
            }
        }, 500 * index)
    })
}









