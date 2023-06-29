const gerar = document.getElementById('generate')

gerar.addEventListener('click', ()=>{
    const minV = Number(document.getElementById('iminV').value)
    const maxV = Number(document.getElementById('imaxV').value)

    let result = Math.floor(Math.random() * (maxV - minV + 1)) +minV

    document.querySelector('#result > span').textContent = result
})