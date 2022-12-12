// 1. plocka ut <p> ur DOM
// 2. ändra bakgrundsfärg: style.backgroundColor, CSS-klass
const welcomeP = document.querySelector('.welcome')
// welcomeP.style.backgroundColor = 'lightgreen'
welcomeP.classList.add('highlight')

// 1. plocka ut button ur DOM
// 2. lägga till en event listener (click)
// 3. toggla kursiv ?
const italicButton = document.querySelector('#italicButton')
let clickCount = 0
italicButton.addEventListener('click', event => {
	// Smidigast
	welcomeP.classList.toggle('selected')

	// Alternativ teknik
	// if( clickCount % 2 == 0 ) {
	// 	welcomeP.classList.add('selected')
	// } else {
	// 	welcomeP.classList.remove('selected')
	// }
	// clickCount++
})


// 1. plocka ut button ur DOM
// 2. lägga till event listener
// 3. console.log inuti
const button = document.querySelector('button')
console.log('Button är: ', button)

button.addEventListener('click', event => {
	console.log('Click event: ', event)

})

const x = {  // x är ett objekt
	y: true,   // y är property (key)
	z: () => {}  // z är metod (key)
}

const chatInput = document.querySelector('input')
const sendButton = document.querySelector('#send-button')
const messageHistory = document.querySelector('.message-history')
// console.log('Kontroll av DOM-element:', chatInput, sendButton)
sendButton.addEventListener('click', event => {
	// console.log('Send chat message')
	// innerHTML är för element som har ett innehåll <p> content </p>
	// value är för input-fält
	let userMessage = chatInput.value
	// console.log('user message:' ,userMessage)
	let element = document.createElement('li')
	element.innerText = userMessage
	messageHistory.appendChild(element)
})