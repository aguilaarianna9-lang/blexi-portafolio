// Selección del botón de modo oscuro
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Comprobar si el usuario ya tenía una preferencia guardada en su navegador
const savedMode = localStorage.getItem('darkMode');

if (savedMode === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>'; // Cambia el icono a sol
}

// Escuchar el clic en el botón de modo oscuro
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Cambiar el icono del botón según el modo activo
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('darkMode', 'enabled'); // Guarda la preferencia
    } else {
        darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('darkMode', 'disabled');
    }
});