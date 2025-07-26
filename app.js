// array para armazenar os amigos
const amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    // Verifica se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        input.focus();
        return;
    }

    // Evita duplicados ignorando maiúsculas/minúsculas
    if (amigos.some(a => a.toLowerCase() === nome.toLowerCase())) {
        alert("Este amigo já foi adicionado.");
        input.focus();
        return;
    }

    // Adiciona o amigo ao array
    amigos.push(nome);
    input.value = "";
    input.focus();
    atualizarLista();
}

// Função para atualizar a lista de amigos na interface
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    // Verifica se há amigos para exibir
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    const input = document.getElementById('amigo');

    // Verifica se há amigos para sortear
    if (amigos.length === 0) {
        resultado.innerHTML = "<li>Adicione pelo menos um amigo para sortear.</li>";
        input.focus();
        return;
    }

    // Sorteia um amigo aleatoriamente e remove da lista
    const indice = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos.splice(indice, 1)[0];

    // Exibe o resultado e atualiza a lista
    resultado.innerHTML = `<li>O amigo sorteado foi: <strong>${sorteado}</strong></li>`;
    atualizarLista();

    // Limpa o campo de entrada
    input.value = "";
    input.focus();
}
