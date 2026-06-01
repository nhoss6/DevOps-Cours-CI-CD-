const healthElement = document.querySelector('#health');
const productsElement = document.querySelector('#products');
const reloadButton = document.querySelector('#reload');
const orderButton = document.querySelector('#create-order');
const orderResult = document.querySelector('#order-result');

async function loadHealth() {
  try {
    const response = await fetch('/api/health');
    const data = await response.json();
    healthElement.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    healthElement.textContent = `Erreur API: ${error.message}`;
  }
}

function formatPrice(cents) {
  return `${(cents / 100).toFixed(2)} €`;
}

async function loadProducts() {
  productsElement.innerHTML = '<p>Chargement...</p>';

  try {
    const response = await fetch('/api/products');
    const payload = await response.json();

    productsElement.innerHTML = payload.data.map(product => `
      <article class="product">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">${formatPrice(product.price_cents)}</p>
        <p>Stock : ${product.stock}</p>
      </article>
    `).join('');
  } catch (error) {
    productsElement.innerHTML = `<p>Erreur: ${error.message}</p>`;
  }
}

async function createOrder() {
  try {
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customerName: 'Client DevOps',
        items: [
          { productId: 1, quantity: 1 },
          { productId: 2, quantity: 2 }
        ]
      })
    });

    const data = await response.json();
    orderResult.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    orderResult.textContent = `Erreur: ${error.message}`;
  }
}

reloadButton.addEventListener('click', () => {
  loadHealth();
  loadProducts();
});

orderButton.addEventListener('click', createOrder);

loadHealth();
loadProducts();
