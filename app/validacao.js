function verificaChute(){
    const numero = +chute

    if(ChuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor Inválido</div>'
        return
    }

    if (chuteInScope(numero)){
        elementoChute.innerHTML += `<div>Valor Inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero===numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-circle-down"></i></div>
        `
    } else {
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
