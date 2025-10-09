// --- LÓGICA PARA LA ANIMACIÓN DE SCROLL ---

// Selecciona todos los elementos que tienen la clase 'hidden'
const hiddenElements = document.querySelectorAll('.hidden');

// Crea un "observador" que vigilará los elementos
const observer = new IntersectionObserver((entries) => {
    // Itera sobre cada elemento que el observador está vigilando
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Si el elemento está visible en la pantalla, le añade la clase 'show'
            entry.target.classList.add('show');
        } else {
            // Opcional: si quieres que la animación se repita cada vez que entras y sales
            // entry.target.classList.remove('show'); 
        }
    });
});

// Le dice al observador que vigile a cada uno de los elementos 'hidden'
hiddenElements.forEach((el) => observer.observe(el));

console.log("Página festiva del proyecto Cocotrón 2025 cargada.");