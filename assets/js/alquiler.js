   for(let casas of alquiler){
    let misCasas = document.querySelector("#contenedor-alquiler")
    let fumar = ''
    let mascotas = ''
        if(casas.smoke === false){
            fumar = ' no se puede fumar'
        }
        else{
            fumar = ' si se puede fumar'
        }

        if(casas.mascotas === false){
            mascotas = ' No se permiten mascotas'
        }
        else{
            mascotas = ' Mascotas permitidas'
        }
        let nuevoDiv = document.createElement("div")
            nuevoDiv.classList.add("col-md-4","mb-4")
            nuevoDiv.innerHTML =`<div class="card">
              <img
                src=${casas.src}
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${casas.nombre}
                </h5>
                <p class="card-text">
                ${casas.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${casas.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${casas.habitaciones}
                  <i class="fas fa-bath"></i> ${casas.baños}
                </p>
                <p><i class="fas fa-dollar-sign"></i>${casas.costo}</p>
                <p class="text-danger">
                  <i class="fas fa-smoking-ban"></i>${fumar}
                </p>
                <p class="text-danger">
                  <i class="fa-solid fa-ban"></i> ${mascotas}
                </p>
              </div>
            </div>
          </div>`
            
            misCasas.appendChild(nuevoDiv)
}

