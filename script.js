// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
 const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const getCartArray = () => {
  const listCart = document.querySelector('.cart__items');
  const listArray = [...listCart.children];
  return listArray;
};

const getCartList = () => {
  const listCart = document.querySelector('.cart__items');
  return listCart;
};

const appendPrice = (price) => {
  const cartContainer = document.getElementsByClassName('cart')[0];
  const priceElement = document.createElement('p');
  priceElement.innerText = `Price: $${price}`;
  priceElement.className = 'total-price';
  cartContainer.appendChild(priceElement);
};

const removePreviousPrice = () => {
  const teste = document.getElementsByClassName('total-price');
  for (let i = 0; i < teste.length; i += 1) {
    teste[i].parentNode.removeChild(teste[i]);
  }
};

const sumCart = () => {
  removePreviousPrice();
  const listArray = getCartArray();
  let cartPrice = 0;
  listArray.forEach((item) => {
    const index = item.innerText.indexOf('$') + 1;
    const itemPrice = item.innerText.slice(index);
    cartPrice += Number(itemPrice);
  });
  appendPrice(cartPrice);
};

const cartItemClickListener = (id) => {
  const cartCollection = document.getElementsByClassName('cart__item');
  const cartArray = [...cartCollection];
  const item = cartArray.find((element) => element.innerText.includes(id));
  item.parentNode.removeChild(item);
  sumCart();
  saveCartItems();
};

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', () => cartItemClickListener(id));
  return li;
};

async function addProductsToCart() {
  const id = this.parentElement.childNodes[0].innerText;

  const item = await fetchItem(id);

  const listCart = getCartList();

  listCart.appendChild(createCartItemElement(item));

  sumCart();
  saveCartItems();
}

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
 const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  if (className === 'item__add') {
    e.addEventListener('click', addProductsToCart);
  }
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
 const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
};

const loadingRemove = () => {
  const loadingText = document.getElementsByClassName('loading')[0];
  loadingText.parentNode.removeChild(loadingText); 
};

const loading = () => {
  const listItems = document.querySelector('.items');
  const loadingText = document.createElement('p');
  loadingText.innerText = 'carregando...';
  loadingText.className = 'loading';
  listItems.appendChild(loadingText);
};

async function addProducts(product) {
  loading();
  const data = await fetchProducts(product);
  loadingRemove();
  
  const productsArray = data.results;
  
  const listItems = document.querySelector('.items');
  
  productsArray.forEach((item) => {
    listItems.appendChild(createProductItemElement(item));
  });
}

const emptyCart = () => {
  const cartList = getCartList();
  while (cartList.firstChild) {
    cartList.removeChild(cartList.lastChild);
  }
  sumCart();
  saveCartItems();
};

const emptyCartButton = document.getElementsByClassName('empty-cart');
emptyCartButton[0].addEventListener('click', emptyCart);

const addListenerToRecoveredCart = () => {
  const listArray = getCartArray();
  listArray.forEach((item) => {
    const id = item.innerText.slice(4, 17);
    item.addEventListener('click', () => cartItemClickListener(id));
  });
};

window.onload = () => { 
  addProducts(); 
  getSavedCartItems();
  addListenerToRecoveredCart();
};
