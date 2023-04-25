function verificaChute(){
    const numero = +chute

    if (chute.toUpperCase()==='GAME OVER'){
        document.body.classList.add("game-over")
        document.body.innerHTML =`
        <h2>GAME OVER</h2>
        <h3>Que pena, o número secreto era ${numeroSecreto}</h3>
        <h3>Pressione o botão para tentar novamente</h3>
        <button id="jogar-novamente" class="btn-game-over">Jogar Novamente</button>
        `
    } else if(ChuteForInvalido(numero)){
        document.getElementById('hidden').classList.add("show")
        elementoChute.innerHTML += '<div>Valor Inválido</div>'
        return
    }

    if (chuteInScope(numero)){
        document.getElementById('hidden').classList.add("show")
        elementoChute.innerHTML += `<div>Valor Inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero===numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto){
        document.getElementById('hidden').classList.add("show")
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-circle-down"></i></div>
        `
    } else {
        document.getElementById('hidden').classList.add("show")
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-circle-up"></i></div>
        `
    }
}

function ChuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function chuteInScope(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})