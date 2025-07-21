export function renderProductos() {
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <div class="main-content">
      <h2 class="category-title"><b>Nuestros productos</b></h2>
      <p class="category-description">
        ¡Todo lo que imaginás está en un mismo lugar! Bienvenido a la sección de productos. <br>
        Diseñamos el mejor mobiliario para tu cocina, baño, oficina y más. Ergonómico, práctico, sencillo y con el mejor estilo.
      </p>

      <div class="products-container">
        <div class="product card-cocina" style="cursor:pointer;">
          <div class="product-clickable">
            <h3 class="product-title"><b>COCINA</b></h3>
            <img src="./IMG/5.jpg" alt="alacena y bajo mesada color blanco" />
            <p>Diseñamos el mejor mobiliario para tu cocina.</p>
          </div>
        </div>

        <div class="product">
          <h3 class="product-title"><b>BAÑO</b></h3>
          <img src="./IMG/Vanitory 1.png" alt="vanitory de pie color blanco" />
          <p>¿Soñás con un baño con estilo?</p>
        </div>

        <div class="product">
          <h3 class="product-title"><b>OFICINA</b></h3> 
          <img src="./IMG/escritorio 2.jpg" alt="escritorio color negro y blanco" />
          <p>Muebles a medida, elegancia y funcionalidad.</p>
        </div>

        <div class="product">
          <h3 class="product-title"><b>HABITACIÓN</b></h3>
          <img src="./IMG/Mesitadeluz.png" alt="mesita de luz color paraiso y blanco" />
          <p>Placares, vestidores, mesitas de luz, y más.</p>
        </div>

        <div class="product">
          <h3 class="product-title"><b>ABERTURAS</b></h3>
          <img src="./IMG/Puerta 1.png" alt="Puerta color roble claro" />
          <p>¿Sabías que también podés elegir el color?</p>
        </div>

        <div class="product">
          <h3 class="product-title"><b>OTROS</b></h3>
          <img src="./IMG/rack 2.png" alt="rack tv negro y madera" />
          <p>Racks, estantes, etc.</p>
        </div>
      </div>
    </div>
  `;

  // Hacer que toda la card de cocina sea clickeable
  document.querySelector('.card-cocina')?.addEventListener('click', e => {
    e.preventDefault();
    window.cargarSeccion('cocina');
  });
}
