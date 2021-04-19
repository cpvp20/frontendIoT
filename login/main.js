let formLogin = document.querySelector('#formLogin');
/*
formLogin.addEventListener("submit", function (e) {
    e.preventDefault(); // para que no te recargue la página cuando sometes el formulario

    //obtén el valor del correo y del password y mándalo al back-end para obtener un token del usuario
    let usuario = {
        "correo": formLogin.correo.value,
        "password": formLogin.password.value
    };
    //Manda la información al back-end para obtener un token del usuario
    let request = new XMLHttpRequest();
    request.open('POST', 'https://localhost:3000/api/login');
    request.setRequestHeader('Content-Type', 'application/json');
    request.send([JSON.stringify(usuario)]);

    request.onload = () => {
        if (request.status == 200) {
            let token = request.responseText;
            localStorage.tokenUser = token; //guardar en nuestra variable de LOCALSTORAGE
            window.location.href = "/";
        } else {
            // Ocurrió un error
            alert(request.responseText);
        }
    }
});

*/
