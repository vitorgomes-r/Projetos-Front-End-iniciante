const less = document.getElementById('less')
const more = document.getElementById('more')
const number = document.getElementById('number')
const reset = document.getElementById('reset')

const uptadeValue = () =>{
    number.innerHTML = count
}

let count = 0
let intervalId = 0

less.addEventListener('mousedown',()=>{
   intervalId = setInterval(()=>{
    count -= 1
    uptadeValue()
   },55)
})

more.addEventListener('mousedown',()=>{
    intervalId = setInterval(()=>{
        count +=1
        uptadeValue()
    },60)
})

document.addEventListener('mouseup', ()=> clearInterval(intervalId))



reset.addEventListener('click', ()=>{
    number.innerHTML = '0'
})