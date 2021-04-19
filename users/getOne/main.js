/*
let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}; //para fechas

const params = new URLSearchParams(window.location.search);
console.log('Mostrando al usuario ' + params.get('correo'));

let cardBody = document.getElementById('cardBody');
let btn = `<a href = "../update?correo=${params.get('correo')}" class="btn btn-info">update</a>`;
cardBody.insertAdjacentHTML('beforeend', btn);

let request = new XMLHttpRequest();
request.open('GET', `https://localhost:3000/api/usuarios/${params.get('correo')}`);
request.setRequestHeader('x-user-token', localStorage.tokenUser);
request.send();

request.onload = () => {
    if (request.status == 200) {
        let usuario = JSON.parse(request.responseText);

        document.querySelector('#nombre').append(usuario.nombre);
        document.querySelector('#apellidos').append(usuario.apellidos);
        document.querySelector('#correo').append(usuario.correo);
        document.querySelector('#fecha_registro').append(new Date(usuario.fecha_registro).toLocaleDateString('es-ES', options));
        document.querySelector('#fecha_nacimiento').append(new Date(usuario.fecha_nacimiento).toLocaleDateString('es-ES', options));
        document.querySelector('#IMSS').append(usuario.IMSS);
        document.querySelector('#alergias').append(usuario.alergias);
        document.querySelector('#telefono').append(usuario.telefono);
        document.querySelector('#tipo_sangre').append(usuario.tipo_sangre);
    } else if (request.status == 500) {
        alert('Error ' + request.status + ': ' + request.statusText);
    } else if (request.status == 401) {
        window.location.href = "/login";
    }
};

*/