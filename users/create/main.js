
var formcreate = document.querySelector('#formcreate');

formcreate.addEventListener("submit", function (e) {
    e.preventDefault(); // para que no te recargue la página cuando sometes el formulario

    //Este handler debe atrapar todos los valores del formulario en un objeto que cumpla con lo que pide el back-end
    let newUser = {
        "name": formcreate.name.value,
        "last_name": formcreate.last_name.value,
        "patient_name": formcreate.patient_name.value,
        "patient_last_name": formcreate.last_name.value,
        "patient_age": formcreate.patient_age.value,
        "patient_id": formcreate.patient_id.value,
        "email": formcreate.email.value,
        "password": formcreate.password.value,
        "phone": formcreate.phone.value,
    };
    console.log(newUser);
    //Manda la información al back-end  

    let request = new XMLHttpRequest();

    request.open('POST', 'https://backend-domotica.herokuapp.com/users');
    request.setRequestHeader('Content-Type', 'application/json');
    request.send([JSON.stringify(newUser)]); 

    request.onload = () => {
        if (request.status == 200) {
            alert('Usuario ha sido registrado exitosamente');
            window.location.href = "/home";
        } else if (request.status == 400) {
            alert('Error ' + request.status + ': ' + request.responseText); //error de usuario
        } else if (request.status == 500) {
            alert('Error ' + request.status + ': ' + request.statusText); //error servidor
        } else if (request.status == 401) {
            window.location.href = "/login";
        }
    };
});
