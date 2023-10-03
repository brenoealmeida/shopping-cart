const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Testa se, ao executar saveCartItems, o método localStorage.setItem é chamado ', () => {
    saveCartItems();
    expect(localStorage.setItem).toHaveBeenCalled();
  })
});
