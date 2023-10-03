require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Testa se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('Testa se fetchItem é uma chamada', () => {
    fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalled();
  });
  it('Testa se fetchItem utiliza o endPoint correto', () => {
    fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it('Testa se a função retorna o obejeto correto', async () => {
    const expected = await fetchItem('MLB1615760527');
    expect(expected).toEqual(item);
  })
  it('Testa o retorno de erro da função', () => {
    expect(fetchItem()).rejects.toThrow('You must provide an url');
  })

});
