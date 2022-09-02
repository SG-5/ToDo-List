
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

  let toDoArr = []
  let toDoImgArr=[]

document.addEventListener('click', (event) => {

  if (event.target.id===BUTTON) {
    if (input.value) {
      toDo = document.createElement('li')
      toDo.innerText = input.value
      container.appendChild(toDo)
      toDoArr.push(toDo)

      toDoimg=document.createElement('img')
      toDoimg.className='bin'
      toDo.appendChild(toDoimg)
      toDoImgArr.push(toDoimg)
      
      input.value = ''       
    }
  }
 
})


container.addEventListener('click', (event) => {
  event.target.classList.toggle('done')
  for (let i = 0; i <toDoImgArr.length; i++) {
    if (event.target === toDoImgArr[i]) {
      toDoArr[i].remove()
   }  
    
  }

})