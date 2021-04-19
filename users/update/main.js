const params = new URLSearchParams(window.location.search);
console.log('Editando al usuario ' + params.get('correo'));
let formupdate = document.querySelector('#formupdate');
let usuario;

function llenarForm() {
    let request = new XMLHttpRequest();
    request.open('GET', `https://localhost:3000/api/usuarios/${params.get('correo')}`);
    request.setRequestHeader('x-user-token', localStorage.tokenUser);
    request.send();

    request.onload = () => {
        if (request.status == 200) {
            usuario = JSON.parse(request.responseText);
            formupdate.nombre.value = usuario.nombre
            formupdate.apellidos.value = usuario.apellidos;
            formupdate.correo.value = usuario.correo;
            formupdate.fecha_nacimiento.value = new Date(usuario.fecha_nacimiento).toLocaleDateString('es-ES', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            }).split("/").reverse().join("-");
            formupdate.alergias.value = usuario.alergias;
            formupdate.tipo_sangre.value = usuario.tipo_sangre;
            formupdate.telefono.value = usuario.telefono;
            formupdate.IMSS.value = usuario.IMSS;
        } else if (request.status == 500) {
            alert('Error ' + request.status + ': ' + request.statusText); //error servidor
        } else if (request.status == 401) {
            window.location.href = "/login";
        }
    }
}

llenarForm();

formupdate.addEventListener("submit", function (e) {

    e.preventDefault(); // para que no te recargue la página cuando sometes el formulario

    //Este handler debe atrapar todos los valores del formulario en un objeto que cumpla con lo que pide el back-end
    let nuevoUsuario = {
        "nombre": formupdate.nombre.value,
        "apellidos": formupdate.apellidos.value,
        "alergias": formupdate.alergias.value,
        "IMSS": formupdate.IMSS.value,
        "fecha_nacimiento": formupdate.fecha_nacimiento.value,
        "tipo_sangre": formupdate.tipo_sangre.value,
        "telefono": formupdate.telefono.value
        //correo y fecha registro no cambian
    };
    //Manda la información al back-end  
    let request = new XMLHttpRequest();
    request.open('PUT', `https://localhost:3000/api/usuarios/${params.get('correo')}`);
    request.setRequestHeader('x-user-token', localStorage.tokenUser);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send([JSON.stringify(nuevoUsuario)]);

    request.onload = () => {
        if (request.status == 200) {
            alert('Usuario ha sido actualizado exitosamente');
            window.location.href = "../getAll/";
        } else if (request.status == 400) {
            alert('Error ' + request.status + ': ' + request.responseText); //error de usuario
        } else if (request.status == 500) {
            alert('Error ' + request.status + ': ' + request.statusText); //error servidor
        }
    };
});

function verBorrar() {
    str = usuario.nombre + ' ' + usuario.apellidos;
    document.querySelector('#usuarioABorrar').append(str);
}

function borrar() {
    let request = new XMLHttpRequest();
    request.open('DELETE', `https://localhost:3000/api/usuarios/${params.get('correo')}`);
    request.setRequestHeader('x-user-token', localStorage.tokenUser);
    request.send();
    request.onload = () => {
        if (request.status == 200) {
            alert('Usuario borrado exitosamente'); //Muestra mensaje de exito
            window.location.href = "../getAll/";
        } else {
            alert('Error al tratar de borrar del usuario');
        }
    }
}