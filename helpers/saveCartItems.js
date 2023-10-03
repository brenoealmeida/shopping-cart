const saveCartItems = () => {
  const cartList = document.getElementsByClassName('cart__items')[0];
  localStorage.setItem('cartItems', cartList.innerHTML);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
