document.addEventListener('DOMContentLoaded', function () {
    // Recuperar el estado de todos los checkboxes desde el localStorage al cargar la página
    var checkboxes = document.querySelectorAll('.check');

    checkboxes.forEach(function (checkbox) {
        var article = checkbox.closest('.card-shop');
        var dataTags = article.getAttribute('data-tags');
        var checkboxId = 'favoriteState_' + article.id;

        var savedState = localStorage.getItem(checkboxId);

        console.log('Article ID:', article.id, 'Checkbox State:', savedState);

        if (savedState !== null) {
            checkbox.checked = savedState === 'true';
            toggleFavoritesTag(checkbox);
        }
    });
});

function toggleFavoritesTag(checkbox) {
    var article = checkbox.closest('.card-shop');
    var dataTags = article.getAttribute('data-tags');
    var checkboxId = 'favoriteState_' + article.id;

    if (checkbox.checked && dataTags.indexOf('Favoritos ❤') === -1) {
        // Agrega la palabra 'Favoritos ❤' al data-tags si el checkbox está marcado y aún no está presente
        article.setAttribute('data-tags', dataTags + ', Favoritos ❤');
    } else if (!checkbox.checked && dataTags.indexOf('Favoritos ❤') !== -1) {
        // Remueve la palabra 'Favoritos ❤' del data-tags si el checkbox está desmarcado y está presente
        article.setAttribute('data-tags', dataTags.replace(', Favoritos ❤', ''));
    }

    // Almacena el estado del checkbox en el localStorage
    localStorage.setItem(checkboxId, checkbox.checked);
}