
const BUTTON ='add'
let input= document.getElementById('todoInput')
let button = document.getElementById('add')
const container = document.querySelector('.container ')


input.addEventListener('input', (e) => {
  if (e.target.value) {
    button.disabled=false
  } else {
    button.disabled=true
  }
  
})

 

document.addEventListener('click', (event) => {

  if (event.target.id===BUTTON) {
    if (input.value) {
      toDo = document.createElement('li')
      toDo.innerText = input.value
      container.appendChild(toDo)

      toDoimg=document.createElement('img')
      toDoimg.className='bin'
      toDo.appendChild(toDoimg)
      
      
      input.value = ''       
    }
  }
 
})


container.addEventListener('click', (event) => {
    if (event.target.className === 'bin') {
   event.target.parentElement.remove()  
  }  
  event.target.classList.toggle('done')
    

})