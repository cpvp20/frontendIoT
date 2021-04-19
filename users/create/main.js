/*
var formcreate = document.querySelector('#formcreate');

formcreate.addEventListener("submit", function (e) {
    e.preventDefault(); // para que no te recargue la página cuando sometes el formulario

    //Este handler debe atrapar todos los valores del formulario en un objeto que cumpla con lo que pide el back-end
    let nuevoUsuario = {
        "nombre": formcreate.nombre.value,
        "apellidos": formcreate.apellidos.value,
        "correo": formcreate.correo.value,
        "password": formcreate.password.value,
        "IMSS": formcreate.IMSS.value,
        "fecha_nacimiento": formcreate.fecha_nacimiento.value,
        "telefono": formcreate.telefono.value,
        "alergias": formcreate.alergias.value,
        "tipo_sangre": formcreate.tipo_sangre.value
    };
    console.log(nuevoUsuario);
    //Manda la información al back-end  

    let request = new XMLHttpRequest();

    request.open('POST', 'https://localhost:3000/api/usuarios');
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('x-user-token', localStorage.tokenUser);
    request.send([JSON.stringify(nuevoUsuario)]); 

    request.onload = () => {
        if (request.status == 200) {
            alert('Usuario ha sido registrado exitosamente');
            window.location.href = "../getAll/";
        } else if (request.status == 400) {
            alert('Error ' + request.status + ': ' + request.responseText); //error de usuario
        } else if (request.status == 500) {
            alert('Error ' + request.status + ': ' + request.statusText); //error servidor
        } else if (request.status == 401) {
            window.location.href = "/login";
        }
    };
});

*/