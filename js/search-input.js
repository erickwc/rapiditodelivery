const imgSearch = document.querySelector('.img-search-shop');
const recomended = document.querySelector('.recomended');

document.addEventListener("keyup", e => {
    if (e.target.matches("#buscador")) {
        if (e.key === "Escape") e.target.value = "";

        const searchTerm = e.target.value.toLowerCase();
        const frutas = document.querySelectorAll(".name-shop-card");
        let foundMatch = false;

        frutas.forEach(fruta => {
            const cardShop = fruta.closest('.card-shop');

            if (fruta.textContent.toLowerCase().includes(searchTerm)) {
                cardShop.classList.remove("hidden");
                foundMatch = true;
            } else {
                cardShop.classList.add("hidden");
            }
        });

        if (foundMatch) {
            imgSearch.classList.add("hidden");
            recomended.classList.remove("hidden");
        } else {
            imgSearch.classList.remove("hidden");
            recomended.classList.add("hidden");
        }
    }
});
