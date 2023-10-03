# README - Projeto de Listagem de Produtos e Carrinho de Compras

Este projeto tem como objetivo desenvolver uma aplicação que permite a listagem de produtos da API do Mercado Livre e a interação com um carrinho de compras. Abaixo, você encontrará uma descrição detalhada das funcionalidades desenvolvidas, bem como os testes associados a cada uma delas.

## Funcionalidades Desenvolvidas

### 1. Testes de Cobertura para a Função `fetchProducts`

Nesta etapa, foram desenvolvidos testes para garantir a integridade da função `fetchProducts`. Os requisitos dos testes incluem:

- Verificar se `fetchProducts` é uma função;
- Executar `fetchProducts` com o argumento `'computador'` e verificar se a função `fetch` foi chamada;
- Verificar se, ao chamar a função `fetchProducts` com o argumento `'computador'`, a função `fetch` utiliza o endpoint `'https://api.mercadolibre.com/sites/MLB/search?q=computador'`;
- Testar se o retorno da função `fetchProducts` com o argumento `'computador'` é uma estrutura de dados igual ao objeto `computadorSearch`;
- Testar se, ao chamar a função `fetchProducts` sem argumento, retorna um erro com a mensagem: `'You must provide an url'`.

### 2. Criação da Listagem de Produtos

Nesta etapa, utilizamos a função `fetchProducts` para criar uma listagem de produtos através da API do Mercado Livre. A listagem de produtos foi implementada na página HTML.

- Utilizamos o endpoint `https://api.mercadolibre.com/sites/MLB/search?q=computador` para obter os produtos;
- Os produtos foram exibidos na página HTML com a ajuda da função `createProductItemElement()`;
- Cada produto foi adicionado como filho do elemento `<section class="items">`.

### 3. Testes de Cobertura para a Função `fetchItem`

Nesta etapa, foram desenvolvidos testes para a função `fetchItem` para garantir seu funcionamento correto. Os requisitos dos testes incluem:

- Verificar se `fetchItem` é uma função;
- Executar `fetchItem` com o argumento do item "MLB1615760527" e verificar se a função `fetch` foi chamada;
- Verificar se, ao chamar a função `fetchItem` com o argumento do item "MLB1615760527", a função `fetch` utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527";
- Testar se o retorno da função `fetchItem` com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto `item`;
- Testar se, ao chamar a função `fetchItem` sem argumento, retorna um erro com a mensagem: `'You must provide an url'`.

### 4. Adição de Produto ao Carrinho de Compras

Nesta etapa, foi implementada a função `fetchItem` para retornar dados de um produto e adicioná-lo ao carrinho de compras. Os requisitos incluem:

- Realizar uma requisição para obter os detalhes de apenas **um** produto;
- Utilizar o endpoint `https://api.mercadolibre.com/items/$ItemID`, onde `$ItemID` é o `id` do produto;
- Utilizar a função `createCartItemElement()` para criar os componentes HTML referentes a um item do carrinho;
- Adicionar o elemento retornado da função `createCartItemElement(product)` como filho do elemento `<ol class="cart__items">`.

### 5. Remoção de Produto do Carrinho de Compras

Nesta etapa, implementamos a funcionalidade de remover um item do carrinho de compras ao clicar nele.

### 6. Testes de Cobertura para a Função `saveCartItems`

Foram desenvolvidos testes para a função `saveCartItems` para garantir seu correto funcionamento. Os requisitos dos testes incluem:

- Verificar se, ao executar `saveCartItems` com um `cartItem` como argumento, o método `localStorage.setItem` é chamado;
- Verificar se, ao executar `saveCartItems` com um `cartItem` como argumento, o método `localStorage.setItem` é chamado com dois parâmetros, sendo o primeiro a chave 'cartItems' e o segundo o valor passado como argumento para `saveCartItems`.

### 7. Testes de Cobertura para a Função `getSavedCartItems`

Foram desenvolvidos testes para a função `getSavedCartItems` para garantir seu correto funcionamento. Os requisitos dos testes incluem:

- Verificar se, ao executar `getSavedCartItems`, o método `localStorage.getItem` é chamado;
- Verificar se, ao executar `getSavedCartItems`, o método `localStorage.getItem` é chamado com o 'cartItems' como parâmetro.

### 8. Carregamento do Carrinho de Compras ao Iniciar a Página

Ao iniciar a página, o estado atual do carrinho de compras é carregado do LocalStorage. Isso permite que os itens do carrinho sejam mantidos entre as sessões do usuário.

### 9. Cálculo do Valor Total dos Itens do Carrinho de Compras

Foi implementada uma lógica para calcular o valor total dos produtos no carrinho de compras de forma assíncrona. O valor total é exibido na página principal.

### 10. Limpeza do Carrinho de Compras

O botão "Esvaziar carrinho" permite limpar o carrinho de compras, removendo todos os itens.

### 11. Indicação de "Carregando" durante Requisições à API

Durante as requisições à API, um elemento com o texto "carregando..." é exibido para informar ao usuário que a requisição está em andamento.
