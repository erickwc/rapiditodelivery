
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
const telefono = '50360020057';


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
    const typeSuper = document.querySelector('#typeSuper').value;


    const typedelivery = document.querySelector('#typedelivery').value;
    const time = document.querySelector("#dateDeliveryinput").value;
    const date = document.querySelector("#timeDeliveryinput").value;

    let additionalInfo = '';

    if (typedelivery === "Agendado") {
        additionalInfo = `%0A%0A*Hora de entrega:*%0A${time}%0A%0A*Fecha de entrega:*%0A${date}`;
    }

    const mensaje = `send?phone=${telefono}&text=*ENVIADO DESDE LA WEB*%0A%0A*Tipo de servicio:*%0AFarmacia%0A%0A${encodeURIComponent(productInfo)}*Farmacia seleccionada:*%0A${typeSuper}%0A%0A*Dirección de entrega:*%0A${direction}%0A%0A*Whats'App:*%0A${whatsapp}%0A%0A*Forma de pago:*%0A${payDelivery}%0A%0A*Tipo de pedido:*%0A${typedelivery}${additionalInfo}`;

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
