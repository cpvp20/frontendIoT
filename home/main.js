//const params = new URLSearchParams(window.location.search);
//console.log('Mostrando al usuario ' + params.get('nombre'));
//document.querySelector('#h1').append(params.get('nombre'));
/*
let request = new XMLHttpRequest();
request.open('GET', 'https://localhost:3000/users/loggedIn');
request.setRequestHeader('x-user-token', localStorage.tokenUser);
request.send();
request.onload = () => {
    if (request.status == 200) {
        let infoDelUsuario = JSON.parse(request.responseText);
        console.log(infoDelUsuario);
        document.querySelector('#h1').append(infoDelUsuario.nombre);
    } else if (request.status == 500) {
        alert('Error ' + request.status + ': ' + request.statusText);
    } else if (request.status == 401) {
        window.location.href = "/login";
    }
}

*/