const fetchItem = async (id) => {
  const endPoint = `https://api.mercadolibre.com/items/${id}`;
  const response = await fetch(endPoint);
  const data = response.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
