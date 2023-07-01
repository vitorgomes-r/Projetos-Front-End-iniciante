const gerar = document.getElementById('generate')//var para o generate

gerar.addEventListener('click', ()=>{
    const min = Number(document.getElementById('iminV').value)
    const max = Number(document.getElementById('imaxV').value)
    
    let result = Math.floor(Math.random() * (max - min))

    document.querySelector('#result > span').textContent = result

})

