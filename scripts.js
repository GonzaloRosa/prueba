const formTarea = document.getElementById('formTarea');
const listaTareas = document.getElementById('listaTareas');

formTarea.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('nuevaTarea');
    agregarTarea(input.value);
    input.value = '';
});

function agregarTarea(texto) {
    const li = document.createElement('li');
    li.textContent = texto;

    // Botón para completar tarea
    const completarBtn = document.createElement('button');
    completarBtn.textContent = '✔';
    completarBtn.addEventListener('click', () => li.classList.toggle('completed'));

    // Botón para eliminar tarea
    const eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = '✖';
    eliminarBtn.addEventListener('click', () => li.remove());

    li.appendChild(completarBtn);
    li.appendChild(eliminarBtn);

    listaTareas.appendChild(li);
}
