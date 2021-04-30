function llenarTablaRequests() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://backend-domotica.herokuapp.com/requests');
    request.setRequestHeader('x-user-token', localStorage.tokenUser);
    request.send();

    request.onload = () => {
        if (request.status == 200) {
            let requests = JSON.parse(request.responseText);
            console.log(requests);
            mostrarRequests(requests);
        } else if (request.status == 500) {
            alert('Error ' + request.status + ': ' + request.statusText);
        } else if (request.status == 401) {
            window.location.href = "/login";
        }
    };
}

function mostrarRequests(requests) {
    let CuerpoTablaRequests = document.getElementById('CuerpoTablaRequests');
    let i = 0;
    let fila;
    requests.forEach(request => {
        if (i == 0) {
            fila = `<tr style="color:red">
            <td scope="row">${request.type}</td>
            <td>${(new Date(request.date_time).toLocaleDateString('es-ES'))}</td>
            <td>${(new Date(request.date_time).toLocaleTimeString('es-ES'))}</td>
            </tr>`;
        } else {
            fila = `<tr>
        <td scope="row">${request.type}</td>
        <td>${(new Date(request.date_time).toLocaleDateString('es-ES'))}</td>
        <td>${(new Date(request.date_time).toLocaleTimeString('es-ES'))}</td>
        </tr>`;
        }
        CuerpoTablaRequests.insertAdjacentHTML('beforeend', fila);
        i++;
    });
}

llenarTablaRequests();