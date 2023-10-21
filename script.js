// Función para agregar una nueva tarea
function agregarTarea() {
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const listaTareas = document.getElementById("listaTareas");
    const nuevaTareaTexto = nuevaTareaInput.value.trim();

    if (nuevaTareaTexto !== "") {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = nuevaTareaTexto;
        nuevaTarea.classList.toggle("agregada");
        
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "delete";
      
        botonEliminar.onclick = function() {
             listaTareas.removeChild(nuevaTarea);
        };
        
        nuevaTarea.appendChild(botonEliminar);
        listaTareas.appendChild(nuevaTarea);
        nuevaTareaInput.value = "";
        }
    }

// Función para marcar una tarea como completada
    function marcarCompletada(tarea) {
        tarea.classList.toggle("completed");
    }

// Agregar evento de clic a las tareas para marcarlas como completadas
    document.getElementById("listaTareas").addEventListener("click",
    function(event) {
        if (event.target.tagName === "LI") {
        marcarCompletada(event.target);
        }
        });

// Agregar evento de clic al botón "Agregar"
    document.getElementById("agregar").addEventListener("click",
    agregarTarea);

//ejercitacion de tarea
function mostrarTareasCompletadas() {
    const tareas = document.querySelectorAll('li');
    tareas.forEach((tarea) => {
      if (tarea.classList.contains('completed')) {
        tarea.style.display = 'flex'; // Muestra las tareas completadas.
      } else {
        tarea.style.display = 'none'; // Oculta las tareas pendientes.
      }
    });
  }
  
  function mostrarTareasPendientes() {
    const tareas = document.querySelectorAll('li');
    tareas.forEach((tarea) => {
      if (!tarea.classList.contains('completed')) {
        tarea.style.display = 'flex'; // Muestra las tareas pendientes.
      } else {
        tarea.style.display = 'none'; // Oculta las tareas completadas.
      }
    });
  }
  
    document.getElementById('completadas').addEventListener('click', mostrarTareasCompletadas);
    document.getElementById('pendientes').addEventListener('click', mostrarTareasPendientes);
    
//Muestro todas las tareas sin importar el estado
  function mostrarTareas() {
    const tareas = document.querySelectorAll('li');
    tareas.forEach((tarea) => {
    
          tarea.style.display = 'flex'; 
        
      });
  }    

  document.getElementById('todas').addEventListener('click', mostrarTareas);
