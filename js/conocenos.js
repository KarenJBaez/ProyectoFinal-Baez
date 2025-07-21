export function renderConocenos() {
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <div class="main-content">
      <h2 class="section-title">Conocé más sobre nosotros</h2>
      <p class="section-description">
        Somos una empresa joven con una trayectoria de 10 años dentro del rubro de muebles. Nuestro sueño comenzó con la idea de tener un taller propio, dejar nuestro trabajo en relación de dependencia y poder ser parte del sueño de todos nuestros clientes. Diseñamos y fabricamos una amplia gama de mobiliarios y estamos abiertos a cualquier desafío que el usuario nos proponga.
      </p>

      <h3 class="section-title">Departamento de diseño</h3>
      <p class="section-description">
        Te presentamos a quienes conforman el departamento de diseño, ellos se encargan de codificar la idea del usuario y lograr el mobiliario ideal según las necesidades planteadas.
      </p>

      <div class="row row-cols-1 row-cols-md-2 g-4 team-container">
        <div class="col team-member text-center">
          <img src="./IMG/arqui1.jpg" alt="Miembro del departamento de diseño" class="img-fluid rounded">
          <h3 class="mt-2">Miembro 1</h3>
          <p>Diseñador creativo con años de experiencia.</p>
        </div>
        <div class="col team-member text-center">
          <img src="./IMG/arquui2.jpg" alt="Miembro del departamento de diseño" class="img-fluid rounded">
          <h3 class="mt-2">Miembro 2</h3>
          <p>Especialista en diseño de interiores.</p>
        </div>
      </div>

      <h3 class="section-title mt-5">Equipo de carpintería</h3>
      <p class="section-description">
        Te presentamos al equipo de carpintería, en conjunto con el equipo de arquitectos, llevan a cabo la confección del mueble que soñás para conformar tu espacio.
      </p>

      <div class="row row-cols-1 row-cols-md-2 g-4 team-container">
        <div class="col team-member text-center">
          <img src="./IMG/carpintero1.jpg" alt="Carpintero" class="img-fluid rounded">
          <h3 class="mt-2">Miembro 1</h3>
          <p>Carpintero experto en detalles y acabados.</p>
        </div>
        <div class="col team-member text-center">
          <img src="./IMG/carpintero2.jpg" alt="Carpintero" class="img-fluid rounded">
          <h3 class="mt-2">Miembro 2</h3>
          <p>Encargado de la fabricación a medida.</p>
        </div>
      </div>
    </div>
  `;
}