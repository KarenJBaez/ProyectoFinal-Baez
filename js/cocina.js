import { agregarAlCarrito } from './carrito.js';

export function renderCocina() {
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <h2 class="text-center mt-4">Cocina</h2>
    <div class="row row-cols-1 row-cols-md-3 g-4 card_container mt-2"></div>
  `;

  fetch('./Js/data/cocina.json')
    .then(res => res.json())
    .then(productos => {
      const contenedor = document.querySelector('.card_container');

      productos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'col';
        card.innerHTML = `
          <div class="card h-100">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">${producto.descripcion}</p>
              <p class="fw-bold mt-auto">$${producto.precio}</p>
              <button class="btn btn-primary agregar-carrito">Agregar al carrito</button>
            </div>
          </div>
        `;

        card.querySelector('.agregar-carrito').addEventListener('click', () => {
          agregarAlCarrito(producto);
        });

        contenedor.appendChild(card);
      });
    });
}
