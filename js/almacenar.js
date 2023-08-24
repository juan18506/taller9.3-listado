const agregar = document.getElementById('agregar')
const limpiar = document.getElementById('limpiar')
const item = document.getElementById('item')
const ul = document.getElementById('contenedor')

const listaOnline = window.localStorage.getItem('lista')
let lista = listaOnline ? JSON.parse(listaOnline) : []

lista.forEach(item => {
  ul.innerHTML += `
    <li class="list-group-item">${item}</li>
  `
})

agregar.addEventListener('click', () => {
  const newValue = item.value
  if (!newValue) return 
  
  lista.push(newValue)
  window.localStorage.setItem('lista', JSON.stringify(lista))
  
  ul.innerHTML += `
  <li class="list-group-item">${newValue}</li>
  `
  
  item.value = item.defaultValue
})

limpiar.addEventListener('click', () => {
  window.localStorage.removeItem('lista')
  lista = []
  ul.innerHTML = ''
})