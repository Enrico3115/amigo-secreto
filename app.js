let amigos = [];

function limpaEntrada(){
    let input = document.querySelector('input');
    input.value = "";
    input.focus();
}

function adicionarAmigo() {
    let input = document.querySelector('input');
    let nome = input.value.trim();
    if (nome === "") {
        alert('Por favor, insira um nome.');
        limpaEntrada();
        return;
    }
    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado. Por favor, insira um nome diferente.');
        limpaEntrada();
        return;
    }
    amigos.push(nome);
    atualizarAmigos();
    limpaEntrada();
}

function atualizarAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for(let i=0;i<amigos.length;i++){
        let itemLista = document.createElement('li');
        itemLista.innerHTML = amigos[i];
        lista.appendChild(itemLista);
    }
}

function sortearAmigo(){
    if(amigos.length){
        let botaoSortear = document.getElementById('botao-sortear');
        botaoSortear.disabled = true;
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = 'Sorteando ...';
        setTimeout(() => {
            resultado.innerHTML = amigos[Math.floor(Math.random()*amigos.length)];
            botaoSortear.disabled = false;
        }, 3000);
    }
    else    alert('Insira pelo menos um amigo.');
}

function reiniciar(){
    amigos = [];
    atualizarAmigos();
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "";
    limpaEntrada();
}