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
        article.setAttribute('data-tags', dataTags + ', Favoritos ❤');
    } else if (!checkbox.checked && dataTags.indexOf('Favoritos ❤') !== -1) {
        article.setAttribute('data-tags', dataTags.replace(', Favoritos ❤', ''));
    }

    localStorage.setItem(checkboxId, checkbox.checked);
}