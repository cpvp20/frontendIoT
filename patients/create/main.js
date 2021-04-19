/*

let formcreate = document.querySelector('#formcreate');

formcreate.addEventListener("submit", function (e) {
    e.preventDefault(); // para que no te recargue la página cuando sometes el formulario

    var today = new Date.today();
    let newPatient = {
        "name": formcreate.name.value,
        "last_name": formcreate.last_name.value,
        "age": formcreate.age.value,
        "registered_date": today
    };
    //Manda la información al back-end  
    let request = new XMLHttpRequest();
    request.open('POST', 'https://localhost:3000/patients');
    request.setRequestHeader('x-user-token', localStorage.tokenUser);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send([JSON.stringify(newPatient)]);

    request.onload = () => {
        if (request.status == 200) {
            alert('Paciente ha sido registrado exitosamente');
            window.location.href = "../getAll/index.html";
        } else if (request.status == 400) {
            alert('Error ' + request.status + ': ' + request.responseText); //error de usuario
        } else if (request.status == 500) {
            alert('Error ' + request.status + ': ' + request.statusText); //error servidor
        }
    };
});

*/