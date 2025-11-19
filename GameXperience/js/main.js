document.addEventListener('DOMContentLoaded', () => {
  const addCartBtns = document.querySelectorAll('.addCartBtn');
  const cartModal   = document.getElementById('cartModal');
  const cartBtn     = document.getElementById('cartBtn');
  const closeCart   = document.getElementById('closeCart');
  const cartList    = document.getElementById('cartList');
  const searchBtn   = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');

  const openAuth    = document.getElementById('openAuth');
  const authModal   = document.getElementById('authModal');
  const closeAuth   = document.getElementById('closeAuth');

  let cart = [];

  // AÑADIR AL CARRITO
  addCartBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      const gameText = e.target.parentElement.querySelector('p').textContent;
      cart.push(gameText);
      alert(`${gameText} se ha añadido al carrito 🛒`);
    });
  });

  // MOSTRAR CARRITO
  cartBtn.addEventListener('click', () => {
    cartList.innerHTML = '';
    if (cart.length === 0) {
      const li = document.createElement('li');
      li.textContent = 'El carrito está vacío';
      cartList.appendChild(li);
    } else {
      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartList.appendChild(li);
      });
    }
    cartModal.style.display = 'flex';
  });

  // CERRAR CARRITO
  closeCart.addEventListener('click', () => {
    cartModal.style.display = 'none';
  });

  // ABRIR LOGIN / REGISTRO
  openAuth.addEventListener('click', (e) => {
    e.preventDefault();
    authModal.style.display = 'flex';
  });

  // CERRAR LOGIN / REGISTRO
  closeAuth.addEventListener('click', () => {
    authModal.style.display = 'none';
  });

  // BUSCADOR (filtra juegos en todas las secciones que tengan data-name)
  function filtrarJuegos() {
    const term = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('[data-name]');
    cards.forEach(card => {
      const nombre = card.getAttribute('data-name').toLowerCase();
      card.style.display = nombre.includes(term) ? 'block' : 'none';
    });
  }

  searchBtn.addEventListener('click', filtrarJuegos);
  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') filtrarJuegos();
  });

  // CERRAR MODALES AL HACER CLICK FUERA
  window.addEventListener('click', (e) => {
    if (e.target === cartModal) cartModal.style.display = 'none';
    if (e.target === authModal) authModal.style.display  = 'none';
  });
});
