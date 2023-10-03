require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

console.log(computadorSearch.results);

describe('1 - Teste a função fetchProducts', () => {
  
  it('Testa se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('Testa chamada da função com o parâmetro computador', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  });

  it('Testa retorno da URL com o parâmetro computador', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=$computador');
  });
  
  it('Testa retorno da função com o parâmetro computador', async () => {
    const expected = await fetchProducts('computador')
    expect(expected.results).toEqual(computadorSearch.results);
  });
  it('Testa função sem parâmetro', async () => {
    expect(fetchProducts()).rejects.toThrow('You must provide an url');
  });
  
});
