const textareas = document.querySelectorAll('.textArea');

function adjustTextareaHeight(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
}

// Ajusta la altura de todos los textarea al cargar la página
window.addEventListener('load', function () {
    textareas.forEach(function (textarea) {
        adjustTextareaHeight(textarea);
    });
});

// Ajusta la altura del textarea al escribir
textareas.forEach(function (textarea) {
    textarea.addEventListener('input', function () {
        adjustTextareaHeight(this);
    });
});

