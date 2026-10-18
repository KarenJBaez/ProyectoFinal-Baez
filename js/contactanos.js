export function renderContactanos() {
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <h2 class="text-center mt-4">Contacto</h2>
    <form class="mt-4">
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre:</label>
        <input type="text" class="form-control" id="nombre" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Correo electrónico:</label>
        <input type="email" class="form-control" id="email" required>
      </div>
      <div class="mb-3">
        <label for="mensaje" class="form-label">Mensaje:</label>
        <textarea class="form-control" id="mensaje" rows="4" required></textarea>
      </div>
      <button type="submit" class="btn btn-dark">Enviar</button>
    </form>
  `;
}