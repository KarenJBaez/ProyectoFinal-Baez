export let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Guardar carrito en localStorage
function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Agregar un producto al carrito
export function agregarAlCarrito(producto) {
  const existe = carrito.find(item => item.id === producto.id);
  if (existe) {
    existe.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  guardarCarrito();

  Swal.fire({
    title: '¡Agregado!',
    text: `${producto.nombre} fue agregado al carrito.`,
    icon: 'success',
    confirmButtonColor: '#198754',
    timer: 2000,
    showConfirmButton: false
  });
}

// Renderizar contenido del carrito en el modal
export function renderCarrito() {
  const contenedor = document.getElementById('carrito-contenido');
  contenedor.innerHTML = '';

  const btnVaciar = document.getElementById('vaciar-carrito');
  const btnFinalizar = document.getElementById('finalizar-compra');

  if (carrito.length === 0) {
    contenedor.innerHTML = '<p class="text-center fw-bold text-secondary py-4">🛒 Tu carrito está vacío.</p>';
    btnVaciar.setAttribute('disabled', 'disabled');
    btnFinalizar.setAttribute('disabled', 'disabled');
    actualizarTotal();
    return;
  } else {
    btnVaciar.removeAttribute('disabled');
    btnFinalizar.removeAttribute('disabled');
  }

  carrito.forEach((producto, index) => {
    const item = document.createElement('div');
    item.className = 'd-flex align-items-center border-bottom py-2 gap-3';
    item.innerHTML = `
      <img src="${producto.imagen || './IMG/1.png'}" alt="${producto.nombre}" style="width:48px;height:48px;object-fit:cover;border-radius:8px;margin-right:10px;">
      <div class="flex-grow-1 text-start">
        <h6 class="mb-0">${producto.nombre}</h6>
        <small>$${producto.precio} x ${producto.cantidad} = <b>$${producto.precio * producto.cantidad}</b></small>
      </div>
      <button class="btn btn-sm btn-outline-danger eliminar-producto" data-index="${index}" title="Eliminar producto">🗑</button>
    `;
    contenedor.appendChild(item);
  });

  // Eventos para eliminar
  document.querySelectorAll('.eliminar-producto').forEach(btn => {
    btn.addEventListener('click', e => {
      const index = e.target.dataset.index;
      carrito.splice(index, 1);
      guardarCarrito();
      renderCarrito();
    });
  });

  actualizarTotal();
}

// Actualizar el total del carrito
function actualizarTotal() {
  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
  document.getElementById('carrito-total').textContent = `Total: $${total}`;
}

// Vaciar el carrito
const btnVaciar = document.getElementById('vaciar-carrito');
if (btnVaciar) {
  btnVaciar.addEventListener('click', () => {
    if (carrito.length === 0) return;

    Swal.fire({
      title: '¿Vaciar carrito?',
      text: 'Se eliminarán todos los productos.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, vaciar',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.isConfirmed) {
        carrito = [];
        guardarCarrito();
        renderCarrito();
      }
    });
  });
}

// Finalizar compra
const btnFinalizar = document.getElementById('finalizar-compra');
if (btnFinalizar) {
  btnFinalizar.addEventListener('click', () => {
    if (carrito.length === 0) {
      Swal.fire({
        icon: 'info',
        title: 'Tu carrito está vacío',
        text: 'Agregá productos antes de finalizar la compra.'
      });
      return;
    }

    Swal.fire({
      title: 'Compra realizada',
      text: '¡Gracias por tu compra!',
      icon: 'success',
      confirmButtonColor: '#198754'
    });

    carrito = [];
    guardarCarrito();
    renderCarrito();
  });
}
