const user = JSON.parse(sessionStorage.getItem("user"))
const token = sessionStorage.getItem("token")

document.getElementById("nav-nome").textContent = user.nome

//Cria as caixainhas para editar produtos
const dialog = document.createElement("dialog")
dialog.id = "editar"
dialog.innerHTML = `
    <button onclick="document.getElementById('editar').close()" class="fechar-edicao">X</button>
    <h1>Editar as informações do produto</h1>

    <div id="linha-cadastro">
        <div>
            <label>Nome:</label><br>
            <input type="text" id="nome-edit">
        </div>
        <div>
            <label>Categoria:</label><br>
            <input type="text" id="categoria-edit">
        </div>
    </div>

    <div id="linha-cadastro">
        <div>
            <label>Valor de venda:</label><br>
            <input type="number" id="preco-edit">
        </div>
        <div>
            <label>Imagem (URL):</label><br>
            <input type="text" id="imagem-edit">
        </div>
    </div>

    <div id="linha-cadastro">
        <div>
            <label>Descrição:</label><br>
            <input type="text" id="descricao-edit">
        </div>
        <div class="botoes-editar">
            <button class="btn-excluir-produto" onclick="excluirProduto()">Excluir Produto</button>
            <button class="btn-confirm-edicao" onclick="salvarEdicao()">Confirmar mudanças</button>
        </div>
    </div>
`
document.body.appendChild(dialog)



// Mostra todos os produtos da API
fetch("http://localhost:3000/produtos", {
    headers: {'Authorization': 'Bearer ' + token}
}).then(response => {
    if(!response.ok) alert("Ocorreu um erro")
    return response.json()
}).then(data => {
    const lista = document.getElementById("linhas")

    data.forEach(function(produto){
        const produtoItem = document.createElement("div")
        produtoItem.classList.add("card-produtos")
        produtoItem.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <div class="info-produtos">
            <h1>${produto.nome}</h1>
            <div class="linha-info">
                <div>
                    <p>Código do produto: <span><br> ${produto.codigo_barra}</span></p>
                    <p>Categoria: <span><br>${produto.categoria}</span></p>
                </div>
                <div>
                    <p>Valor de venda: <span><br> ${produto.preco}</span></p>
                    <p>Descrição: <span><br> ${produto.descricao}</span></p>
                </div>
            </div>
            <div class="botoes">
                <button class="btn-qrCode">Gerar QR code</button>
                <button class="btn-editarProduto" onclick="editarProduto('${produto.nome}', '${produto.categoria}', '${produto.preco}', '${produto.imagem}', '${produto.id_produto}', '${produto.descricao}')">
                    Editar dados do produto
                </button>
            </div>
        </div>
        `
        lista.appendChild(produtoItem)
    })
})

let idProdutoEditando = null
function editarProduto(nome, categoria, preco, imagem, id_produto, descricao) {
    idProdutoEditando = id_produto

    document.getElementById("nome-edit").value = nome
    document.getElementById("categoria-edit").value = categoria
    document.getElementById("preco-edit").value = preco
    document.getElementById("imagem-edit").value = imagem
    document.getElementById("descricao-edit").value = descricao

    document.getElementById("editar").showModal()
}


async function salvarEdicao() {
    const nome = document.getElementById("nome-edit").value
    const categoria = document.getElementById("categoria-edit").value
    const preco = document.getElementById("preco-edit").value
    const imagem = document.getElementById("imagem-edit").value
    const descricao = document.getElementById("descricao-edit").value

    try {
        const response = await fetch(`http://localhost:3000/produtos/${idProdutoEditando}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify({ nome, categoria, preco, imagem, descricao })
        })

        const dados = await response.json()

        if(!response.ok) {
            alert("Erro: " + JSON.stringify(dados))
            return
        }

        alert("Produto atualizado com sucesso!")
        window.location.href = "produtos.html"

    } catch (erro) {
        alert("Erro ao atualizar produto.")
    }
}


//Excluir produto
async function excluirProduto() {

    console.log("ID sendo excluído:", idProdutoEditando)
    if(!confirm("Tem certeza que deseja excluir este produto?")) return

    try {
        const response = await fetch(`http://localhost:3000/produtos/${Number(idProdutoEditando)}`, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + token
            }
        })

        if(!response.ok) {
            alert("Erro ao excluir produto!")
            const erro = await response.json();
            console.log(erro);
            alert(erro.error);
            return;
        }

        alert("Produto excluído com sucesso!")
        window.location.href = "produtos.html"

    } catch (erro) {
        alert("Erro ao excluir produto.")
    }
}



function sair(){
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("user")
    window.location.href = "login.html"
}