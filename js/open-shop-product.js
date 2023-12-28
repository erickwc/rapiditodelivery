/*btn-amounts*/

// const productContainers = document.querySelectorAll('.product-card');

// productContainers.forEach((container) => {
//     const addBtn = container.querySelector('.add');
//     const removeBtn = container.querySelector('.remove');
//     const numberProductHeader = container.querySelector('.name-product .NumberProduct');
//     const numberProductSection = container.querySelector('.amount-product .NumberProduct');

//     let total = 0;

//     function updateNumberProduct() {
//         numberProductHeader.textContent = total;
//         numberProductSection.textContent = total;
//     }

//     function Add() {
//         total += 1;
//         updateNumberProduct();
//     }

//     function Remove() {
//         if (total > 0) {
//             total -= 1;
//             updateNumberProduct();
//         }
//     }

//     addBtn.addEventListener("click", Add);
//     removeBtn.addEventListener("click", Remove);
// });

/*btn-actions*/

function assignEventsBtnActions() {
    const btnEdit = document.querySelectorAll('.btnEdit');
    const btnDelete = document.querySelectorAll('.btnDelete');
    const btnUpdate = document.querySelectorAll('.btn-update');
    const amountSections = document.querySelectorAll('.amount-product');
    const btnSections = document.querySelectorAll('.btn-actions');

    function showSection(index) {
        amountSections[index].style.display = 'flex';
        btnSections[index].style.display = 'none';
        btnUpdate[index].style.display = 'block';
    }

    function removeSection(index) {
        amountSections[index].style.display = 'none';
        btnSections[index].style.display = 'flex';
        btnUpdate[index].style.display = 'none';
    }

    btnEdit.forEach((btn, index) => {
        btn.addEventListener("click", () => showSection(index));
    });

    btnUpdate.forEach((btn, index) => {
        btn.addEventListener("click", () => removeSection(index));
    });
}


/**/


const btnAddProduct = document.querySelector('.btn-add-product');
const productsContainer = document.querySelector('.products-added');

function AddedProduct() {

    const descProduct = document.querySelector('.descP').value;
    const numberProduct = document.querySelector('.numberP').value;

    if (descProduct.trim() !== "" && numberProduct.trim() !== "") {
        let cardProduct = document.createElement('article');
        cardProduct.classList.add('product-card');

        let sectionTextProduct = document.createElement('section');
        sectionTextProduct.classList.add('grid');
        cardProduct.appendChild(sectionTextProduct)

        let ProductNumber = document.createElement('h2');
        ProductNumber.innerHTML = 'Producto - Cantidad(<span class="NumberProduct">' + numberProduct + '</span>)';
        ProductNumber.classList.add('name-product');
        sectionTextProduct.appendChild(ProductNumber);

        let descriptProductCard = document.createElement('textarea');
        descriptProductCard.textContent = descProduct;
        descriptProductCard.classList.add('desc-product');
        sectionTextProduct.appendChild(descriptProductCard)

        let sectionAmountBtn = document.createElement('section');
        sectionAmountBtn.classList.add('amount-product');
        cardProduct.appendChild(sectionAmountBtn)

        let btnRemove = document.createElement('button');
        btnRemove.classList.add('remove', 'btn-amount');
        btnRemove.textContent = '-';
        sectionAmountBtn.appendChild(btnRemove);

        let numberProductAdd = document.createElement('p');
        numberProductAdd.classList.add('NumberProduct', 'original'); // Asigna una clase específica, por ejemplo, 'original'
        numberProductAdd.textContent = numberProduct;
        sectionAmountBtn.appendChild(numberProductAdd);


        let btnAdd = document.createElement('button');
        btnAdd.classList.add('add', 'btn-amount');
        btnAdd.textContent = '+';
        sectionAmountBtn.appendChild(btnAdd);

        let btnActions = document.createElement('section');
        btnActions.classList.add('flex', 'btn-actions');
        cardProduct.appendChild(btnActions);

        let btnEdit = document.createElement('a');
        btnEdit.classList.add('btn', 'btn-primary', 'btnEdit');
        btnEdit.textContent = 'Editar'
        btnActions.appendChild(btnEdit);

        let btnDelete = document.createElement('a');
        btnDelete.classList.add('btn', 'btn-third', 'btnDelete');
        btnDelete.textContent = 'Eliminar'
        btnActions.appendChild(btnDelete);

        let btnUpdateSection = document.createElement('section');
        btnUpdateSection.classList.add('flex', 'btn-update');
        cardProduct.appendChild(btnUpdateSection);

        let btnUpdate = document.createElement('a');
        btnUpdate.classList.add('btn', 'btn-primary');
        btnUpdate.textContent = 'Guardar Cambios'
        btnUpdateSection.appendChild(btnUpdate);

        productsContainer.appendChild(cardProduct);

        assignEventsBtnActions();
        assignEventsBtnAmount();
    }
    else {
        alert("Agrega datos bruto");
    }
}

btnAddProduct.addEventListener('click', AddedProduct)

function assignEventsBtnAmount() {
    const productContainers = document.querySelectorAll('.product-card');

    productContainers.forEach((container) => {
        const addBtn = container.querySelector('.add');
        const removeBtn = container.querySelector('.remove');
        const numberProductAdd = container.querySelector('.amount-product .NumberProduct');

        // Obtén el valor inicial del elemento NumberProduct
        let numberProduct = parseInt(numberProductAdd.textContent) || 0;

        function updateNumberProduct() {
            const numberProductTitle = container.querySelector('.name-product .NumberProduct');
            if (numberProductAdd && numberProductTitle) {
                numberProductAdd.textContent = numberProduct;
                numberProductTitle.textContent = numberProduct;
            }
        }

        function Add() {
            numberProduct++;
            updateNumberProduct();
        }

        function Remove() {
            if (numberProduct > 0) {
                numberProduct--;
                updateNumberProduct();
            }
        }

        if (addBtn && removeBtn) {
            addBtn.addEventListener("click", Add);
            removeBtn.addEventListener("click", Remove);
        }
    });
}






// function assignEventsBtnAmount() {
//     const productContainers = document.querySelectorAll('.product-card');

//     productContainers.forEach((container) => {
//         const addBtn = container.querySelector('.add');
//         const removeBtn = container.querySelector('.remove');
//         const numberProductAdd = container.querySelector('.amount-product .NumberProduct');
//         const numberProductTitle = container.querySelector('.grid .NumberProduct');

//         // Obtén el valor inicial del elemento NumberProduct
//         let numberProduct = parseInt(numberProductAdd.textContent) || 0;

//         function updateNumberProduct() {
//             if (numberProductAdd && numberProductTitle) {
//                 numberProductAdd.textContent = numberProduct;
//                 numberProductTitle.textContent = numberProduct;
//             }
//         }

//         function Add() {
//             numberProduct++;
//             updateNumberProduct();
//         }

//         function Remove() {
//             if (numberProduct > 0) {
//                 numberProduct--;
//                 updateNumberProduct();
//             }
//         }

//         if (addBtn && removeBtn) {
//             addBtn.addEventListener("click", Add);
//             removeBtn.addEventListener("click", Remove);
//         }
//     });
// }