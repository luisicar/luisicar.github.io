function obtenerPersona() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => cargarDatos(data));
}

function cargarDatos(data) {
    console.log(data);
    document.getElementById("user_img").src = data.results[0].picture.large;
    document.getElementById("user_img").alt = data.results[0].name.first + "," + data.results[0].name.last;
    document.getElementById("user_name").innerHTML = data.results[0].name.first + "," + data.results[0].name.last;
    document.getElementById("user_telephone").innerHTML = data.results[0].phone;
    document.getElementById("user_phone").innerHTML = data.results[0].cell;
    document.getElementById("user_email").innerHTML = data.results[0].email;
    document.getElementById("user_street").innerHTML = data.results[0].location.street.name + ", " + data.results[0].location.street.number;
}