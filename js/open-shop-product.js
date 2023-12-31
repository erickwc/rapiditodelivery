// /*Adaptable*/
// const textareas = document.querySelectorAll('.input');

// function adjustTextareaHeight(textarea) {
//     textarea.style.height = 'auto';
//     textarea.style.height = (textarea.scrollHeight) + 'px';
// }

// // Ajusta la altura de todos los textarea al cargar la página
// window.addEventListener('load', function () {
//     textareas.forEach(function (textarea) {
//         adjustTextareaHeight(textarea);
//     });
// });

// // Ajusta la altura del textarea al escribir
// textareas.forEach(function (textarea) {
//     textarea.addEventListener('input', function () {
//         adjustTextareaHeight(this);
//     });
// });



// const desc = document.querySelectorAll('.desc-product');

// function adjustTextareaHeight(desc) {
//     desc.style.height = 'auto';
//     desc.style.height = (desc.scrollHeight) + 'px';
// }

// // Ajusta la altura de todos los textarea al cargar la página
// window.addEventListener('load', function () {
//     desc.forEach(function (desc) {
//         adjustTextareaHeight(desc);
//     });
// });

// // Ajusta la altura del textarea al escribir
// desc.forEach(function (desc) {
//     desc.addEventListener('input', function () {
//         adjustTextareaHeight(this);
//     });
// });

// Función para ajustar la altura del textarea

// function ajustarAlturaTextarea(textarea) {
//     textarea.style.height = "auto";
//     textarea.style.height = textarea.scrollHeight + "px";
// }

// const textAreas = document.querySelectorAll(".textArea");

// textAreas.forEach(function (textarea) {
//     textarea.addEventListener("input", function () {
//         ajustarAlturaTextarea(this);
//     });
//     window.addEventListener("resize", function () {
//         ajustarAlturaTextarea(textarea);
//     });
//     const initialValue = textarea.value;
//     textarea.value = initialValue;
//     ajustarAlturaTextarea(textarea);
// });

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

    function removeProduct(index) {
        productsContainer.removeChild(cardProduct[index]);
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

    btnDelete.forEach((btn, index) => {
        btn.addEventListener("click", () => removeProduct(index));
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
        descriptProductCard.classList.add('desc-product', 'textArea');
        descriptProductCard.value = descProduct;
        descriptProductCard.rows = '1';
        descriptProductCard.required = true;
        sectionTextProduct.appendChild(descriptProductCard)


        let sectionAmountBtn = document.createElement('section');
        sectionAmountBtn.classList.add('amount-product');
        cardProduct.appendChild(sectionAmountBtn)

        let btnRemove = document.createElement('button');
        btnRemove.classList.add('remove', 'btn-amount');
        btnRemove.textContent = '-';
        sectionAmountBtn.appendChild(btnRemove);

        let numberProductAdd = document.createElement('p');
        numberProductAdd.classList.add('NumberProduct', 'original');
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
        btnDelete.addEventListener('click', function () {
            // Llamar a la función para eliminar el producto
            removeProduct(cardProduct);
            updateTotalProducts(-1);
            ShowRemoveForm();
        });
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
        updateTotalProducts(1);
        ShowRemoveForm();

        function ajustarAlturaTextarea(textarea) {
            textarea.style.height = "auto";
            textarea.style.height = textarea.scrollHeight + "px";
        }
        
        const textAreas = document.querySelectorAll(".textArea");
        
        textAreas.forEach(function (textarea) {
            textarea.addEventListener("input", function () {
                ajustarAlturaTextarea(this);
            });
            window.addEventListener("resize", function () {
                ajustarAlturaTextarea(textarea);
            });
            const initialValue = textarea.value;
            textarea.value = initialValue;
            ajustarAlturaTextarea(textarea);
        });

    } else {

    }
}



function removeProduct(product) {
    productsContainer.removeChild(product);
}


btnAddProduct.addEventListener('click', AddedProduct);


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

const AmountProductAdded = document.querySelector('.AmountProductAdded');
const FormDataDelivery = document.querySelector('.formulario');
const imgForm = document.querySelector('.img-add-product');
const textAmountProduct = document.querySelector('.countProduct');


let totalProducts = 0;

function updateTotalProducts(value) {
    totalProducts += value;
    AmountProductAdded.textContent = totalProducts;
}

function ShowRemoveForm() {
    if (totalProducts >= 1) {
        FormDataDelivery.style.display = 'grid';
        imgForm.style.display = 'none';
        textAmountProduct.style.display = 'grid';

    }else if(totalProducts === 0){
        FormDataDelivery.style.display = 'none';
        imgForm.style.display = 'grid';
        textAmountProduct.style.display = 'none';

    }
}



function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const typedelivery = document.querySelector('#typedelivery').value;
const formulario = document.querySelector('#formulario');
const Shop = document.querySelector('#shopname').textContent;
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '50377774562';


function RecoverInformation() {

    const productCards = document.querySelectorAll('.product-card');
    let productInfo = '';

    productCards.forEach((card, index) => {
        const productName = card.querySelector('.name-product').innerText;
        const productDescription = card.querySelector('.desc-product').value;
        productInfo += `*${productName}*\n${productDescription}\n\n`; // Agrega dos saltos de línea
    });

    const direction = document.querySelector('#direccion').value;
    const whatsapp = document.querySelector('#whatsapp').value;
    const payDelivery = document.querySelector('#typepay').value;

    const typedelivery = document.querySelector('#typedelivery').value;
    const time = document.querySelector("#dateDeliveryinput").value;
    const date = document.querySelector("#timeDeliveryinput").value;

    let additionalInfo = '';

    if (typedelivery === "Agendado") {
        additionalInfo = `%0A%0A*Hora de entrega:*%0A${time}%0A%0A*Fecha de entrega:*%0A${date}`;
    }

    const mensaje = `send?phone=${telefono}&text=*ENVIADO DESDE LA WEB*%0A%0A*Tipo de servicio:*%0AComida%0A%0A*Comercio:*%0A${Shop}%0A%0A${encodeURIComponent(productInfo)}*Dirección de entrega:*%0A${direction}%0A%0A*Whats'App:*%0A${whatsapp}%0A%0A*Forma de pago:*%0A${typedelivery}%0A%0A*Tipo de pedido:*%0A${payDelivery}${additionalInfo}`;

    if (isMobile()) {
        window.open(urlMobile + mensaje, '_blank');
    } else {
        window.open(urlDesktop + mensaje, '_blank');
    }
    if (isMobile()) {
        window.open(urlMobile + mensaje, '_blank');
    } else {
        window.open(urlDesktop + mensaje, '_blank');
    }

}


formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    RecoverInformation();
}
);

document.addEventListener("DOMContentLoaded", function () {
    const selectElement = document.querySelector('#typedelivery');
    const time = document.querySelector("#timeDelivery");
    const date = document.querySelector("#dateDelivery");


    selectElement.addEventListener("change", function () {
        const selectedValue = selectElement.value;

        if (selectedValue === "Pedido de momento") {
            funcionPedidoMomento();
        } else if (selectedValue === "Agendado") {
            funcionAgendarPedido();
        }
    });

    function funcionPedidoMomento() {
        time.style.display = 'none';
        date.style.display = 'none';
    }

    function funcionAgendarPedido() {
        time.style.display = 'grid';
        date.style.display = 'grid';
    }
});





