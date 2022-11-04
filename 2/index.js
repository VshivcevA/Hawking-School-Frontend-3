const textArea = document.querySelector('#textarea');
const button = document.querySelector('#button')

textArea.value = localStorage.getItem("text")

button.addEventListener('click', () => {
  localStorage.setItem('text', textArea.value)
})
