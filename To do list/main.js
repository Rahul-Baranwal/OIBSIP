let addbutton = document.getElementById('addingin')
let todocontainer = document.getElementById('todocontainer')
let inputfield = document.getElementById('text')

addbutton.addEventListener('click',function(){
    var para = document.createElement('p')
    para.classList.add('paragraph-style')
    para.innerText = inputfield.value
    todocontainer.appendChild(para)
    inputfield.value= " "
    para.addEventListener('click',function(){
        para.style.textDecoration= "line-through"
    })
    para.addEventListener('dblclick',function(){
        todocontainer.removeChild(para)
    })
})