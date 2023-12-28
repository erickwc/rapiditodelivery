
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

const productos = [];
let productIdCounter = 1;

const btnAddProduct = document.querySelector('.btn-add-product');
const productsContainer = document.querySelector('.products-added');
let allProductsInfo = "";

function updateAllProductsInfo() {
    allProductsInfo = productos.map(producto => `Producto - Cantidad(${producto.productoCantidad})\n ${producto.productoDescripcion}\n\n`).join('');
}

function AddedProduct() {
    const descProduct = document.querySelector('.descP').value;
    const numberProduct = document.querySelector('.numberP').value;
    const inputContainerAddedProduct = document.querySelector('.input-container-added-product');

    if (descProduct.trim() !== "" && numberProduct.trim() !== "")  {

        const productId = `${productIdCounter++}`;

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

        let btnUpdateSection = document.createElement('section');
        btnUpdateSection.classList.add('flex', 'btn-update');
        cardProduct.appendChild(btnUpdateSection);

        let btnUpdate = document.createElement('a');
        btnUpdate.classList.add('btn', 'btn-primary');
        btnUpdate.textContent = 'Guardar Cambios'
        btnUpdateSection.appendChild(btnUpdate);

        productsContainer.appendChild(cardProduct);

        productos.push({
            productId: productId,
            productoCantidad: numberProduct,
            productoDescripcion: descProduct
        });
        updateAllProductsInfo();
        

        // Llama a la función fuera de AddedProduct después de haber agregado un producto
        assignEventsBtnActions();
        assignEventsBtnAmount();

        inputContainerAddedProduct.value = allProductsInfo;
    } else {
        alert("Agrega datos válidos");
    }
}


btnAddProduct.addEventListener('click', AddedProduct);
console.log(productos);



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



const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '50377774562';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.disabled = true
    setTimeout(() => {
        let productos = document.querySelector('.input-container-added-product').value
        let mensaje = 'send?phone=' + telefono + '&text=*_Formulario Easy App CODE_*%0A*¿Cual es tu nombre?*%0A' +  productos + '%0A*¿Cuáles son tus apellidos?*%0A' + productos + '%0A*¿Cuál es tu correo electrónico?*%0A' + productos + ''
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.disabled = false
    }, 3000);
});