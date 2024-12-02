let candidatos = [];
let administrador = {};
let votos = {};

// Obtener candidatos
fetch("https://raw.githubusercontent.com/cesarmcuellar/Elecciones/refs/heads/main/candidatos.json")
    .then(response => response.json())
    .then(data => {
    candidatos = data;
    mostrarCandidatos();
    })

// Obtener administrador
fetch("https://raw.githubusercontent.com/cesarmcuellar/Elecciones/refs/heads/main/administrador.json")
    .then(response => response.json())
    .then(data => {
    administrador = data;
    })

// Mostrar candidatos
function mostrarCandidatos() {
    const candidatosElement = document.getElementById('candidatos');
    candidatosElement.innerHTML = '';

    candidatos.forEach(candidato => {
    const candidatoElement = document.createElement('div');
    candidatoElement.classList.add('candidato');

    const imagenElement = document.createElement('img');
    imagenElement.src = candidato.foto;
    imagenElement.addEventListener('click', () =>{
        mostrar
        mostrarConfirmacionVoto(candidato);
    });
    candidatoElement.appendChild(imagenElement);

    const nombreElement = document.createElement('h2');
    nombreElement.textContent = candidato.nombre;
    candidatoElement.appendChild(nombreElement);

    const programaElement = document.createElement('p');
    programaElement.textContent = candidato.programa;
    candidatoElement.appendChild(programaElement);



    candidatosElement.appendChild(candidatoElement);
    });
}

function mostarConfirmacionVoto(cadidato){
    const respuesta = confirm("¿estas seguro de votar por ${candidato.nombre} ?");
    if(respuesta){
        
    }
        
}
// Votar
function votar(candidato) {
    if (confirm(`¿Estás seguro de votar por ${candidato.nombre}?`)) {
    votos[candidato.nombre] = (votos[candidato.nombre] || 0) + 1;
    alert(`Voto registrado para ${candidato.nombre}`);
    }
}

// Mostrar resultado
function mostrarResultado() {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';
    resultadoElement.classList.add('active');

    const resultadoTituloElement = document.createElement('h2');
    resultadoTituloElement.textContent = 'Resultado de las elecciones';
    resultadoElement.appendChild(resultadoTitulo)
};