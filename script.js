const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  }
 
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')
  
  let contador = 0

  function addTodo() {
    const tituloTarea = prompt('Que tarea quieres agregar?')
    if (tituloTarea != undefined && tituloTarea != ""){
        contador++
        itemCountSpan.innerHTML = contador
        let li = document.createElement("li")
        let cb = document.createElement("input")
        cb.type = 'checkbox'
        cb.onclick = function() {  noChequeados(this) }
         li.appendChild(cb)
        li.appendChild(document.createTextNode(tituloTarea))
        list.appendChild(li)
        uncheckedCountSpan.innerHTML++
    }

  function noChequeados(cb) {

    let uno  
    if (cb.checked)
       uno = -1
       else
       uno = 1
    let ind = uncheckedCountSpan.innerHTML
    ind = parseInt(ind)
    ind = ind + uno
    uncheckedCountSpan.innerHTML = ind 

  }

  }