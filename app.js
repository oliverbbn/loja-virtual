async function carregarProdutos(){

    try {
        let resposta = await fetch(`https://fakestoreapi.com./products`);

        if (!resposta.ok){
            throw new Error("Erro ao carregar o catáligo de produtos.");
        }
    
    let dadosJson = await resposta.json();


    listaProdutos = dadosJson;

    let vitrine = document.getElementById("vitrineProdutos");
      
    let cardsHtml = listaProdutos.map(produto => {
        return `
        <div class="col-md-3 md-4">
        <div class="card h-100 p-3>
            <img src="${produto.image}" class="card-img-top" alt="Imagem do Produto" style="height:200px; object-fit:contain;">
            <div class="card-body d-flex flex-column">
                <h6 class="card-title">${produto.title}</h6>
                <h5 class="text-success mt-auto">R$ ${produto.price}</h5>
                <button class="btn btn-primary w-100 mt-2">Comprar</button>
            </div>
        </div>
        </div>
        `;
    }).join('');

    vitrine = cardsHtml;

} catch (erroTratado){
    console.error(erroTratado);
}
}

vitrine.innerHTML=`${cardsHtml}`;