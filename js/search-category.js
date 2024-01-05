document.addEventListener('DOMContentLoaded', function () {
    // Obtiene todas las etiquetas de categorías
    var categoryTags = document.querySelectorAll('.tag-second');

    // Asocia un manejador de clic a cada etiqueta de categoría
    categoryTags.forEach(function (tag) {
        tag.addEventListener('click', function () {
            // Obtiene el valor de la etiqueta seleccionada
            var selectedTag = tag.textContent.trim();

            // Oculta todos los comercios
            hideAllShops();

            // Muestra los comercios que tienen la etiqueta seleccionada
            showShopsByTag(selectedTag);
        });
    });
});

// Función para ocultar todos los comercios
function hideAllShops() {
    var allShops = document.querySelectorAll('.card-shop');
    allShops.forEach(function (shop) {
        shop.classList.add('hidden');
    });
}

// Función para mostrar los comercios que tienen una etiqueta específica
function showShopsByTag(tag) {
    var matchingShops = document.querySelectorAll('.card-shop[data-tags*="' + tag + '"]');
    matchingShops.forEach(function (shop) {
        shop.classList.remove('hidden');
    });
}




document.addEventListener('DOMContentLoaded', function() {
    const tags = document.querySelectorAll('.tag');

    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            toggleFullScreen(tag);
        });
    });

    function toggleFullScreen(tag) {
        if (tag.classList.contains('tag-active')) {
            tag.classList.remove('tag-active');
        } else {
            tags.forEach(img => img.classList.remove('tag-active'));
            tag.classList.add('tag-active');
        }
    }
});
