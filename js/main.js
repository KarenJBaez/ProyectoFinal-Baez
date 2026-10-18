import { renderHome } from './home.js';
import { renderCocina } from './cocina.js';
import { renderProductos } from './productos.js';
import { renderConocenos } from './conocenos.js';
import { renderContactanos } from './contactanos.js';
import { renderCarrito } from './carrito.js';
import { renderBano } from './bano.js';
import { renderHabitacion } from './habitacion.js';
import { renderAberturas } from './aberturas.js';
import { renderOficina } from './oficina.js';
import { renderOtros } from './otros.js';

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[data-seccion]');
  const main = document.getElementById('main-content');

  // Mostrar sección por defecto (Inicio)
  renderHome();

  // Manejo de navegación
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const seccion = link.dataset.seccion;
      cargarSeccion(seccion);
    });
  });

  // Botón flotante del carrito
  document.getElementById('ver-carrito').addEventListener('click', () => {
    renderCarrito(); // Llama a la función que rellena el modal
    const modal = new bootstrap.Modal(document.getElementById('modal-carrito'));
    modal.show();
  });
});

function cargarSeccion(seccion) {
  switch (seccion) {
    case 'home':
      renderHome();
      break;
    case 'cocina':
      renderCocina();
      break;
    case 'productos':
      renderProductos();
      break;
    case 'bano':
      renderBano();
      break;
    case 'habitacion':
      renderHabitacion();
      break;
    case 'aberturas':
      renderAberturas();
      break;
    case 'oficina':
      renderOficina();
      break;
    case 'otros':
      renderOtros();
      break;
    case 'conocenos':
      renderConocenos();
      break;
    case 'contactanos':
      renderContactanos();
      break;
    default:
      renderHome();
  }
}

window.cargarSeccion = cargarSeccion;
