let request = new XMLHttpRequest();
request.open('GET', 'https://backend-domotica.herokuapp.com/loggedIn');
request.setRequestHeader('x-user-token', localStorage.tokenUser);
request.send();
request.onload = () => {
    if (request.status == 200) {
        infoDeUsuario = JSON.parse(request.responseText);
        console.log(infoDeUsuario);
        let btnMisDatos = `<a href = "../users/update?email=${infoDeUsuario.email}" class="btn btn-info">Mis datos</a>`;
        document.getElementById('welcome').insertAdjacentHTML('afterend', btnMisDatos);
    } else if (request.status == 401) {
        window.location.href = "/login";
    }
}