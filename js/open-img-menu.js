document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.img-menu-shop .img-menu');

    images.forEach(image => {
        image.addEventListener('click', function() {
            toggleFullScreen(image);
        });
    });

    function toggleFullScreen(image) {
        if (image.classList.contains('img-full-screen')) {
            image.classList.remove('img-full-screen');
        } else {
            images.forEach(img => img.classList.remove('.img-full-screen'));
            image.classList.add('img-full-screen');
        }
    }
});