// Função para adicionar ao carrinho ou atualizar a quantidade
function adicionarAoCarrinho(nome, preco) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  
    // Verificar se o produto já existe no carrinho
    let produtoExistente = carrinho.find(item => item.nome === nome);
  
    if (produtoExistente) {
      // Se o produto já existe, aumente a quantidade
      produtoExistente.quantidade += 1;
    } else {
      // Caso o produto não exista, adicione com quantidade 1
      carrinho.push({ nome, preco, quantidade: 1 });
    }
  
    // Salvar as alterações no localStorage
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  
    // Exibir o alerta
    alert(nome + " adicionado ao carrinho!");
  }
// Função para Carregar carrinho
function carregarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const lista = document.getElementById("lista-carrinho");
    const totalEl = document.getElementById("total");
    lista.innerHTML = "";
  
    let total = 0;
  
    carrinho.forEach((item, index) => {
      const subtotal = item.preco * item.quantidade;
      total += subtotal;
  
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center flex-wrap";
  
      li.innerHTML = `
        <div class="flex-grow-1">
          <strong>${item.nome}</strong><br>
          <div class="d-flex align-items-center gap-2 mt-2">
            <span class="badge bg-secondary">R$ ${item.preco.toFixed(2)}</span>
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
