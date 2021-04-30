const params = new URLSearchParams(window.location.search);
let formupdate = document.querySelector('#formupdate');
let user;

function llenarForm() {
    let request = new XMLHttpRequest();
    request.open('GET', `https://backend-domotica.herokuapp.com/users/${params.get('email')}`);
    request.setRequestHeader('x-user-token', localStorage.tokenUser);
    request.send();

    request.onload = () => {
        if (request.status == 200) {
            user = JSON.parse(request.responseText);
            formupdate.name.value = user.name
            formupdate.last_name.value = user.last_name;
            formupdate.patient_name.value = user.patient_name
            formupdate.patient_last_name.value = user.patient_last_name;
            formupdate.patient_age.value = user.patient_age
            formupdate.patient_id.value = user.patient_id
            formupdate.email.value = user.email;
            formupdate.phone.value = user.phone;
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
    let newUser = {
        "name": formupdate.name.value,
        "last_name": formupdate.last_name.value,
        "patient_name": formupdate.patient_name.value,
        "patient_last_name": formupdate.patient_last_name.value,
        "patient_age": formupdate.patient_age.value,
        "phone": formupdate.phone.value,
    };
    //Manda la información al back-end  
    let request = new XMLHttpRequest();
    request.open('PUT', `https://backend-domotica.herokuapp.com/users/${params.get('email')}`);
    request.setRequestHeader('x-user-token', localStorage.tokenUser);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send([JSON.stringify(newUser)]);

    request.onload = () => {
        if (request.status == 200) {
            alert('Tu usuario ha sido actualizado exitosamente');
            window.location.href = "/home";
        } else if (request.status == 400) {
            alert('Error ' + request.status + ': ' + request.responseText); //error de user
        } else if (request.status == 500) {
            alert('Error ' + request.status + ': ' + request.statusText); //error servidor
        }
    };
});

