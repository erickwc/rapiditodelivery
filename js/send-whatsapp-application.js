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
const Shop = document.querySelector('#shopname').textContent;
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '50360020057';


function RecoverInformation() {

    const nombreComercio = document.querySelector('#nameShop').value;
    const contactoComercio = document.querySelector('#whatsapp').value;
    const direccionComercio = document.querySelector('#location').value;
    const categoriaComercio = document.querySelector('#categorys').value;
    const diasServicio = document.querySelector('#dayservices').value;
    const horasServicio = document.querySelector('#timeservices').value;

    const mensaje = `send?phone=${telefono}&text=*SOLICITUD DE REGISTRO DE COMERCIO ENVIADO DESDE LA WEB*%0A%0A*Comercio:*%0A${nombreComercio}
    %0A%0A*Categorias del comercio:*%0A${categoriaComercio}%0A%0A*Ubicación del comercio:*%0A${direccionComercio}
    %0A%0A*Días de servicio:*%0A${diasServicio}%0A%0A*Horas de servicio:*%0A${horasServicio}%0A%0A*Contacto del comercio:*%0A${contactoComercio}
    %0A%0A*FOTOS DE LOGO Y PRODUCTOS O SERVICIOS DE MI COMERCIO 👇*%0A`;

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

function Limpiar(){
    const nombreComercio = document.querySelector('#nameShop');
    const contactoComercio = document.querySelector('#whatsapp');
    const direccionComercio = document.querySelector('#location');
    const categoriaComercio = document.querySelector('#categorys');
    const diasServicio = document.querySelector('#dayservices');
    const horasServicio = document.querySelector('#timeservices');

    nombreComercio.value = ""; 
    contactoComercio.value = ""; 
    direccionComercio.value = ""; 
    categoriaComercio.value = "";
    diasServicio.value = "";
    horasServicio.value = "";
}


formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    RecoverInformation();
    Limpiar();
}
);
