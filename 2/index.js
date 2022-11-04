const textArea = document.querySelector('#textarea');
const buttonSave = document.querySelector('#button-save')
const buttonDelete = document.querySelector('#button-delete')


textArea.value = localStorage.getItem("text")

buttonSave.addEventListener('click', () => {
  localStorage.setItem('text', textArea.value)
})
buttonDelete.addEventListener('click', () => {
  localStorage.removeItem('text')
})
