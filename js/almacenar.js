const addButton = document.getElementById('agregar')
const clearButton = document.getElementById('limpiar')
const searchInput = document.getElementById('item')
const ul = document.getElementById('contenedor')

const localList = window.localStorage.getItem('list')
const list = localList ? JSON.parse(localList) : []

list.forEach(item => {
  ul.innerHTML += `
    <li class="list-group-item">${item}</li>
  `
})

addButton.addEventListener('click', () => {
  const newValue = searchInput.value
  if (!newValue) return 
  
  list.push(newValue)
  window.localStorage.setItem('list', JSON.stringify(list))
  
  ul.innerHTML += `
  <li class="list-group-item">${newValue}</li>
  `
  
  searchInput.value = searchInput.defaultValue
})

clearButton.addEventListener('click', () => {
  window.localStorage.removeItem('list')
  while (list.length > 0) list.pop()
  ul.innerHTML = ''
})