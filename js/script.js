var experiencia = [{
        cargo: "Secretaria docente",
        periodo: "01 Enero 2020 al presente",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula...."
    },
    {
        cargo: "Administrativa",
        periodo: "01 Enero 2010 - 01 Enero 2020",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula...."
    },
    {
        cargo: "Cajera",
        periodo: "01 Enero 2020 al presente",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula...."
    },
    {
        cargo: "Asistente gerencial",
        periodo: "01 Enero 2020 al presente",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula...."
    }
]

function obtenerPersona() {
    irAlPrimerTab();
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => cargarDatos(data));
    cargarExperiencia();
}

function irAlPrimerTab() {
    const triggerEl = document.querySelector('#myTab button[data-bs-target="#datos_personales"]')
    bootstrap.Tab.getInstance(triggerEl).show()
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

function cargarExperiencia() {

    let lista = randomExperiencia(experiencia, 2);
    console.log(lista);
    html = "";
    lista.forEach(element => {
        html += `<li><h3> ${element.cargo}</h3><span>${element.periodo}</span><p>${element.descripcion}</p></li>`;
    });
    document.getElementById("container-exp").innerHTML = html;
}

function randomExperiencia(array, quantity) {
    return listaAleatoria([...array]).slice(0, quantity);
}

function listaAleatoria(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}