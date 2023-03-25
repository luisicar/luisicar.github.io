var experiencia = [{
        cargo: "Secretaria docente",
        periodo: "01 Enero 2020 - al presente",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....",
        orden: 1
    },
    {
        cargo: "Administrativa",
        periodo: "01 Enero 2019 - 01 Enero 2020",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....",
        orden: 2
    },
    {
        cargo: "Cajera",
        periodo: "01 Enero 2018 al 01 Enero 2019",
        inicio: "01/01/2020",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....",
        orden: 3
    },
    {
        cargo: "Asistente gerencial",
        periodo: "01 Enero 2017 al 01 Enero 2018",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....",
        orden: 4
    }
]
var habilidades = [{
        habilidad: "Web Design"
    },
    {
        habilidad: "Comunicacion"
    },
    {
        habilidad: "Trabajo en Equipo"
    },
    {
        habilidad: "Liderazgo"
    },
    {
        habilidad: "Backend API"
    },
];

function obtenerPersona() {
    irAlPrimerTab();
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => cargarDatos(data));
    cargarExperiencia();
    cargarHabilidades();
}

function irAlPrimerTab() {
    const triggerEl = document.querySelector('#myTab button[data-bs-target="#datos_personales"]')
    bootstrap.Tab.getInstance(triggerEl).show()
}

function cargarDatos(data) {
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
    lista.sort((a, b) => a.orden - b.orden);
    let html = "";
    lista.forEach(element => {
        html += `<li><h3> ${element.cargo}</h3><span>${element.periodo}</span><p>${element.descripcion}</p></li>`;
    });
    document.getElementById("container-exp").innerHTML = html;
}

function cargarHabilidades() {

    let html = "";
    habilidades.forEach(element => {
        let porcentaje = Math.floor(Math.random() * 101);
        html += ` <small>${element.habilidad}</small>
        <div class="progress mb-3" style="height: 5px">
            <div class="progress-bar bg-primary" role="progressbar" style="width: ${porcentaje}%" aria-valuenow="${porcentaje}" aria-valuemin="0" aria-valuemax="100"></div>
        </div>`;
    });
    document.getElementById("container-hab").innerHTML = html;
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