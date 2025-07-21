export function renderHome() {
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <div class="banner">
      <div class="image">
        <img src="./IMG/index-1.png" alt="Cocina color negro y madera">
      </div>

      <div class="text">
        <h2><b>¡Te damos la bienvenida a ARMANDO ARTE!</b></h2>
        <p>Creamos muebles impresionantes que transforman tu espacio con elegancia y estilo.</p>
      </div>
    </div>
    
    <div class="info">
      <div>
        <h3><b>Nuestra historia</b></h3>
        <p>Nuestra historia está enlazada con un compromiso con la calidad y el arte, superando desafíos de diseño con soluciones innovadoras que realzan su entorno.</p>
      </div>
      <div>
        <h3><b>Nuestro objetivo</b></h3>
        <p>Elevar tu espacio con arte. Contamos con un equipo apasionado dedicado a mejorar espacios habitables.</p>
      </div>
    </div>
    
    <div class="soluciones">
      <div class="text">
        <h2><b>Soluciones de diseño personalizadas</b></h2>
        <p>En base a nuestra experiencia en diseño para crear muebles que se adapten perfectamente a su estilo. Analizamos sus necesidades, alineamos nuestras creaciones con su visión y nos aseguramos de que cada pieza realce su espacio a la perfección.</p>
      </div>

      <div class="image2">
        <img src="./IMG/rack 2 index.png" alt="">
      </div>
    </div>
  `;
}