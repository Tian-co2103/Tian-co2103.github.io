const deportes = [
    {
      titulo: "Paracaidismo",
      descripcion: "Salto desde grandes alturas con paracaídas, una experiencia llena de adrenalina.",
      autor: "Carlos Mendoza",
      imagen: "assets/paracaidismo.jpg"
    },
    {
      titulo: "Escalada",
      descripcion: "Deporte de aventura que desafía la gravedad y la resistencia física.",
      autor: "Laura Rodríguez",
      imagen: "assets/escalada.jpg"
    },
    {
      titulo: "Surf",
      descripcion: "Montar olas en el mar con una tabla, uno de los deportes acuáticos más conocidos.",
      autor: "Andrés Pérez",
      imagen: "assets/surf.jpg"
    },
    {
      titulo: "Bungee Jumping",
      descripcion: "Salto al vacío sujeto con una cuerda elástica desde puentes u otras alturas.",
      autor: "Ana Torres",
      imagen: "assets/bungee.jpg"
    },
    {
      titulo: "Motocross",
      descripcion: "Carreras y acrobacias en motos todoterreno en circuitos con obstáculos.",
      autor: "David Gómez",
      imagen: "assets/motocross.jpeg"
    },
    {
      titulo: "Alpinismo",
      descripcion: "Ascenso a montañas desafiantes, requiere fuerza física y preparación.",
      autor: "Sofía Herrera",
      imagen: "assets/alpinismo.jpeg"
    },
    {
      titulo: "Snowboard",
      descripcion: "Deslizamiento sobre nieve con una tabla, muy practicado en invierno.",
      autor: "Pablo Ruiz",
      imagen: "assets/snowboard.jpg"
    },
    {
      titulo: "Rafting",
      descripcion: "Descenso de ríos rápidos en balsas neumáticas, deporte de equipo extremo.",
      autor: "Martina Díaz",
      imagen: "assets/rafting.jpg"
    },
    {
      titulo: "Wingsuit",
      descripcion: "Vuelo con traje aéreo que permite planear a gran velocidad desde alturas extremas.",
      autor: "José Ramírez",
      imagen: "assets/wingsuit.jpg"
    },
    {
      titulo: "Skateboarding",
      descripcion: "Trucos y desplazamientos sobre una tabla con ruedas, común en áreas urbanas.",
      autor: "Camila Vargas",
      imagen: "assets/skateboarding.jpg"
    }
  ];
  
  const galeria = document.getElementById("galeria");
  
  if (galeria) {
    deportes.forEach((deporte, index) => {
      const col = document.createElement("div");
      col.className = "col-md-4 mb-4";
      col.innerHTML = `
        <div class="card h-100" style="cursor:pointer" data-index="${index}" data-bs-toggle="modal" data-bs-target="#detalleModal">
          <img src="${deporte.imagen}" class="card-img-top" alt="${deporte.titulo}">
          <div class="card-body">
            <h5 class="card-title">${deporte.titulo}</h5>
            <p class="card-text">${deporte.descripcion.substring(0, 60)}...</p>
          </div>
        </div>
      `;
      galeria.appendChild(col);
    });
  
    document.querySelectorAll('[data-bs-toggle="modal"]').forEach(card => {
      card.addEventListener("click", () => {
        const index = card.getAttribute("data-index");
        const deporte = deportes[index];
        document.getElementById("modalTitulo").textContent = deporte.titulo;
        document.getElementById("modalImagen").src = deporte.imagen;
        document.getElementById("modalDescripcion").textContent = deporte.descripcion;
        document.getElementById("modalAutor").textContent = deporte.autor;
      });
    });
  }
  