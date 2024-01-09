
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

// const typedelivery = document.querySelector('#typedelivery').value;
const formulario = document.querySelector('#formulario');
const btnSend = document.querySelector('#submit');
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
        const dateProduct = document.querySelector('#dateDeliveryinput').value;
        const timeProduct = document.querySelector('#timeDeliveryinput').value;
        const whatsapp = document.querySelector('#whatsapp').value;
        const locationDelivery = document.querySelector('#direccion').value;
        const typepayDelivery = document.querySelector('#typepay').value;
        productInfo += `••• *PEDIDO AGENDADO* •••\n\n*${productName}*\n${productDescription}\n\n*Fecha de envio:*\n${dateProduct}\n\n*Hora de envio:*\n${timeProduct}\n\n*Whats'app de contacto:*\n${whatsapp}\n\n*Dirección de envio:*\n${locationDelivery}\n\n*Forma de pago:*\n${typepayDelivery}\n\n\n`; // Agrega dos saltos de línea
    });

    const mensaje = `send?phone=${telefono}&text=*PEDIDOS AGENDADOS DESDE LA WEB*%0A%0A${encodeURIComponent(productInfo)}`;

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


// formulario.addEventListener('submit', (event) => {
//     event.preventDefault();
//     RecoverInformation();
// }
// );

btnSend.addEventListener('click', RecoverInformation);


