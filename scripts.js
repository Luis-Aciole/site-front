function adicionarAoCarrinho(id, nome, preco, imagem) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  
    let produtoExistente = carrinho.find(item => item.id === id);
  
    if (produtoExistente) {
      produtoExistente.quantidade += 1;
    } else {
      carrinho.push({ id, nome, preco, quantidade: 1, imagem });
    }
  
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert(nome + " adicionado ao carrinho!");
  }
  
  
// Função para Carregar carrinho
function carregarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    console.log(carrinho); // Adicionando log para depuração
    const lista = document.getElementById("lista-carrinho");
    const totalEl = document.getElementById("total");
    lista.innerHTML = "";

    let total = 0;

    carrinho.forEach((item, index) => {
        // Garantir que o preço seja um número
        const preco = parseFloat(item.preco);
        if (isNaN(preco)) {
            console.error(`Preço inválido para o item ${item.nome}: ${item.preco}`);
            return;  // Ignorar esse item se o preço for inválido
        }

        const subtotal = preco * item.quantidade;
        total += subtotal;

        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center flex-wrap";

        li.innerHTML = `
            <div class="flex-grow-1">
                <strong>${item.nome}</strong><br>
                <div class="d-flex align-items-center gap-2 mt-2">
                    <span class="badge bg-secondary">R$ ${preco.toFixed(2)}</span>
                    <button class="btn btn-sm btn-outline-primary" onclick="alterarQuantidade(${index}, -1)">−</button>
                    <span>${item.quantidade}</span>
                    <button class="btn btn-sm btn-outline-primary" onclick="alterarQuantidade(${index}, 1)">+</button>
                </div>
            </div>
            <div class="text-end">
                <span class="d-block mb-2 fw-bold">Subtotal: R$ ${subtotal.toFixed(2)}</span>
                <button class="btn btn-sm btn-outline-danger" onclick="removerItem(${index})">🗑</button>
            </div>
        `;

        lista.appendChild(li);
    });

    totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
}

  
// Função para alterar quantidade
function alterarQuantidade(index, delta) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho[index].quantidade += delta;

    if (carrinho[index].quantidade <= 0) {
        carrinho.splice(index, 1);
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    carregarCarrinho();
}
// Função para remover item
function removerItem(index) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    carregarCarrinho();
}

  // Carregar o carrinho ao carregar a página
  document.addEventListener("DOMContentLoaded", carregarCarrinho);
  

// Função para limpar o carrinho
function limparCarrinho() {
    localStorage.removeItem("carrinho");
    location.reload();
}

function abrirModal(id, nome, imagem, descricao, preco) {
    document.getElementById('modalProdutoLabel').textContent = nome;
    document.getElementById('modalImagem').src = imagem;
    document.getElementById('modalDescricao').textContent = descricao;
    document.getElementById('modalPreco').textContent = `R$ ${preco.toFixed(2).replace('.', ',')}`;
  
    const botao = document.getElementById('modalBotaoAdicionar');
    botao.onclick = function () {
      adicionarAoCarrinho(id, nome, preco, imagem);
      const modal = bootstrap.Modal.getInstance(document.getElementById('modalProduto'));
      modal.hide();
    };
  
    new bootstrap.Modal(document.getElementById('modalProduto')).show();
  }
  
