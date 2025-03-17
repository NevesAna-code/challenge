let listaAmigos = [];

function adicionarAmigo() {
    let adicionar = document.querySelector('input').value;

    if (adicionar.trim() !== "") { 
        listaAmigos.push(adicionar);
        console.log(listaAmigos);
    } else {
        console.log("Nome inválido!");
    }

    limparCampo();
}

function limparCampo() {
    let amigo = document.querySelector('input');
    amigo.value = '';    
}

function sortearAmigo() {
    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length); 
    let amigoSorteado = listaAmigos[indiceSorteado];
    console.log(`${amigoSorteado} foi o amigo sorteado`);
    
    document.getElementById("resultado").innerText = `Amigo sorteado: ${amigoSorteado}`;
}

document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
