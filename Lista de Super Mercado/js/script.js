var items = [];

        document.querySelector('input[type=submit]')
        .addEventListener('click',()=>{
           var nomeproduto = document.querySelector('input[name=nomeproduto]'); 
           var precoProduto = document.querySelector('input[name=precoproduto]');
           items.push({
            nome: nomeproduto.value,
            valor: precoProduto.value,
           });
    
        /* <div class="produtos-single">
            <p id="item">Biscoitos:</p>
            <span id="preco">3,00R$</span>
           </div> 
        */
           
            let listaProdutos = document.querySelector('.produtos')
            listaProdutos.innerHTML="";
            let soma = 0;
            items.map(function(val){
            soma+=parseFloat(val.valor);    
            listaProdutos.innerHTML+=`      
           <div class="produtos-single">
            <p id="item">${val.nome}</p>
            <span id="preco">R$ ${val.valor}</span>
           </div>           
            `;
           })
           soma = soma.toFixed(2)
           nomeproduto.value = "";
           precoProduto.value = "";

           let elementoSoma = document.querySelector('#precoF')
           elementoSoma.innerHTML = " R$"+soma;

        });