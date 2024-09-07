
// butaao de pesquisa
function pesquisar () {
let newcard = document.getElementById("card-produtos");
let campoPesquisa = document.getElementById("campo-pesquisa").value

// verifica se o campo de pesquisa está vazio, caso seja, mostra a mensagem e não continua a busca
if (!campoPesquisa) {
    newcard.innerHTML = "Nada foi encontrado. Você precisa digitar o nome do acessório"
    return 
}

// transforma o texto digitado pelo usuário em minúsculo para facilitar a busca
campoPesquisa = campoPesquisa.toLowerCase();

let resultados = ""

// para cada dado dentro da lista de dados
for (let dado of dados) {
    if (dado.nomeProduto.toLowerCase().includes(campoPesquisa)) {
        resultados += `
        <div class="card">
            <h2>${dado.nomeProduto}</h2>
            <img src="${dado.img}" alt="${dado.alt}">
            <div class="descri">
                <p>${dado.preco}</p>
                <div class="avaliacion">
                    <p>${dado.avaliacao}</p>
                    <i class="bi bi-star-fill"></i>
                </div>
            </div>
            <div class="carrinho-de-compra">
                <button>carrinho</button>
                <i class="bi bi-basket2-fill"></i>
            </div>
        </div>
        `
    }
}

if (!resultados) {
    resultados = "Nada foi encontrado"
}

newcard.innerHTML = resultados;
}
