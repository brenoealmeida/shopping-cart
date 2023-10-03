const getSavedCartItems = () => {
  const recoveredCart = localStorage.getItem('cartItems');
  const listCart = document.querySelector('.cart__items');
  listCart.innerHTML = recoveredCart;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
