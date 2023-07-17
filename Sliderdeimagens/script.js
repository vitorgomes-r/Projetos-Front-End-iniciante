{
    /* Variáveis do scopo */

    let img = document.getElementById('minhasImagens')
    let logos = document.getElementById('logo')
    let currentImageIndex = 1

    var imagemP = ()=>{
        img.classList.add('minhasImagens1')
    }

    /* Funções de cada slide */
    var imagem1 = ()=>{
        img.classList.add('minhasImagens1')
        logos.innerHTML = '<a target="_blank" href="https://store.steampowered.com/app/418370/Resident_Evil_7_Biohazard/"><img src="imagens/re7logo.png"  alt="Resident evil" ></a>'
        if(img.classList.contains('minhasImagens2')){
            img.classList.remove('minhasImagens2')
        }
        if(img.classList.contains('minhasImagens3')){
            img.classList.remove('minhasImagens3')
        }
        if(img.classList.contains('minhasImagens4')){
            img.classList.remove('minhasImagens4')
        }
        if(img.classList.contains('minhasImagens5')){
            img.classList.remove('minhasImagens5')
        }
        currentImageIndex = 1
}
var imagem2 = ()=>{
    img.classList.add('minhasImagens2')
    logos.innerHTML = '<a target="_blank" href="https://store.steampowered.com/app/883710/Resident_Evil_2/"><img src="imagens/re2logo.png"  alt="Resident evil" ></a>'
    if(img.classList.contains('minhasImagens1')){
        img.classList.remove('minhasImagens1')
    }
    if(img.classList.contains('minhasImagens3')){
        img.classList.remove('minhasImagens3')
    }
    if(img.classList.contains('minhasImagens4')){
        img.classList.remove('minhasImagens4')
    }
    if(img.classList.contains('minhasImagens5')){
        img.classList.remove('minhasImagens5')
    }
    currentImageIndex = 2
}
var imagem3 = ()=>{
    img.classList.add('minhasImagens3')
    logos.innerHTML = '<a target="_blank" href="https://store.steampowered.com/app/952060/Resident_Evil_3/"><img src="imagens/re3logo.png"  alt="Resident evil" ></a>'
    if(img.classList.contains('minhasImagens1')){
        img.classList.remove('minhasImagens1')
    }
    if(img.classList.contains('minhasImagens2')){
        img.classList.remove('minhasImagens2')
    }
    if(img.classList.contains('minhasImagens4')){
        img.classList.remove('minhasImagens4')
    }
    if(img.classList.contains('minhasImagens5')){
        img.classList.remove('minhasImagens5')
    }
    currentImageIndex = 3
}
var imagem4 =()=>{
    img.classList.add('minhasImagens4')
    logos.innerHTML = '<a target="_blank" href="https://store.steampowered.com/app/1196590/Resident_Evil_Village/"><img src="imagens/re8logo.png"  alt="Resident evil" ></a>'
    if(img.classList.contains('minhasImagens1')){
        img.classList.remove('minhasImagens1')
    }
    if(img.classList.contains('minhasImagens2')){
        img.classList.remove('minhasImagens2')
    }
    if(img.classList.contains('minhasImagens3')){
        img.classList.remove('minhasImagens3')
    }
    if(img.classList.contains('minhasImagens5')){
        img.classList.remove('minhasImagens5')
        currentImageIndex = 4
    }
}
var imagem5 = ()=>{
    img.classList.add('minhasImagens5')
    logos.innerHTML = '<a target="_blank" href="https://store.steampowered.com/app/2050650/Resident_Evil_4/"><img src="imagens/re4logo.png"  alt="Resident evil" ></a>'
    if(img.classList.contains('minhasImagens1')){
        img.classList.remove('minhasImagens1')
    }
    if(img.classList.contains('minhasImagens2')){
        img.classList.remove('minhasImagens2')
    }
    if(img.classList.contains('minhasImagens3')){
        img.classList.remove('minhasImagens3')
    }
    if(img.classList.contains('minhasImagens4')){
        img.classList.remove('minhasImagens4')
    }
    currentImageIndex = 5
}

    // Função pra avançar para a próxima imagem
    var nextImage = () => {
        if (currentImageIndex < 5) {
            // Se não for a ultima imagem, vai para a próxima
            currentImageIndex++
        } else {
            // Se for a ultima imagem, volta para a primeira
            currentImageIndex = 1
        }

        // Atualiza a imagem e o botão de rádio
        switch (currentImageIndex) {
            case 1:
                imagem1()
                document.getElementById('iimg1').checked = true
                break
            case 2:
                imagem2()
                document.getElementById('iimg2').checked = true
                break
            case 3:
                imagem3()
                document.getElementById('iimg3').checked = true
                break
            case 4:
                imagem4()
                document.getElementById('iimg4').checked = true
                break
            case 5:
                imagem5()
                document.getElementById('iimg5').checked = true
                break
        }
    }

    // Define o intervalo de tempo para avançar para a próxima imagem
    setInterval(nextImage, 8000)
}