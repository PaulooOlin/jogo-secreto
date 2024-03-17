let listaDeNumeroSorteados = [];
let numeroLimite = 50;
let numerosecreto = gerarNúmeroAleatório();
let tentativas = 1;

function exibirTextonaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextonaTela('h1', 'jogo do numero secreto');
    exibirTextonaTela('p', 'Escolha um número entre 1 e 50');
}
exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
   
    if (chute == numerosecreto) {
        exibirTextonaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa'
        let memsagemtentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextonaTela('p', memsagemtentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numerosecreto) {
            exibirTextonaTela('p', 'o número é menor');
        } else {
            exibirTextonaTela('p', 'o número secreto é maior');
        }
        tentativas++
        limparCampo() 
    }

}

function gerarNúmeroAleatório() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementoDaLista = listaDeNumeroSorteados.length;

    if (quantidadeDeElementoDaLista == 3) {
        listaDeNumeroSorteados = [];
    }

    if (listaDeNumeroSorteados.includes(numeroEscolhido)){
        return gerarNúmeroAleatório();
    } else {
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log (listaDeNumeroSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value='';
}

function reiniciarJogo() {
    numerosecreto = gerarNúmeroAleatório();
    limparCampo();
    tentativas= 1;
    exibirMensagemInicial()
    document.getElementById('Reiniciar').setAttribute('disabled', true);
}

