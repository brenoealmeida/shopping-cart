const fetchProducts = async (searchTerm) => {
  const endPoint = `https://api.mercadolibre.com/sites/MLB/search?q=$${searchTerm}`;
  const response = await fetch(endPoint);
  const data = await response.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

// fetchProducts().then(console.log);
