function sayHello() {
  alert("Hello World!")
}

function changeBackground() {
  const body = document.querySelector("body")
  body.style.backgroundColor = "darkgrey"
}


function deleteText() {
  const elemToDeleteText = document.querySelector("#to-delete")
  elemToDeleteText.textContent = "Inhalt gelöscht"
}

function incrementCounter() {
  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  num = num -1
  numberElement.textContent = num
}

function incrementCounter() {
  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  num = num +1
  numberElement.textContent = num
}

function decrementCounter() {
  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  num = num +1
  numberElement.textContent = num
}

function decrementCounter() {
  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  num = num -1
  numberElement.textContent = num
}

function resetCounter() {
}

function writeText(){
}


function writeText (){
const InputElem = document.querySelector ("#input")
const OutputElem = document.querySelector ("#output")

const InputValue = InputElem.value
const OutputValue = OutputElem.textContent

const newValue = OutputValue +"\n"+ inputValue

OutputElem.textContent = newValue
}