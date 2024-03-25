//CONSULTA DE RADIOLOGIA
let radiologia = [{
    Hora: '11:00',
    Especialista: 'IGNACIO SCHULZ',
    Paciente: 'FRANCISCA ROJAS',
    Rut: '9878782-1',
    Prevision: 'FONASA'
},
{
    Hora: '11:30',
    Especialista: 'FEDERICO SUBERCASEAUX',
    Paciente: 'PAMELA ESTRADA',
    Rut: '15345241-3',
    Prevision: 'ISAPRE',
},
{
    Hora: '15:00',
    Especialista: 'FERNANDO WURTHZ',
    Paciente: 'ARMANDO LUNA',
    Rut: '16445345-9',
    Prevision: 'ISAPRE',
},
{
    Hora: '15:30',
    Especialista: 'ANA MARIA GODOY',
    Paciente: 'MANUEL GODOY',
    Rut: '17666419-0',
    Prevision: 'FONASA',
},
{
    Hora: '16:30',
    Especialista: 'PATRICIA SUAZO',
    Paciente: 'RAMON ULLOA',
    Rut: '14989389-K',
    Prevision: 'FONASA',
}
];


//CONSULTA DE TRAUMATOLOGIA
let traumatologia =[
    {
        Hora: '8:00',
        Especialista: 'MARIA PAZ ALTUZARRA',
        Paciente: 'PAULA SANCHEZ',
        Rut: '15554774-5',
        Prevision: 'FONASA'
    },
    {
        Hora: '10:00',
        Especialista: 'RAUL ARAYA',
        Paciente: 'ANGÉLICA NAVAS',
        Rut: '15444147-9',
        Prevision: 'ISAPRE',
    },
    {
        Hora: '10:30',
        Especialista: 'MARIA ARRIAGADA',
        Paciente: 'ANA KLAPP',
        Rut: '17879423-9',
        Prevision: 'ISAPRE',
    },
    {
        Hora: '11:00',
        Especialista: 'ALEJANDRO BADILLA',
        Paciente: 'FELIPE MARDONES',
        Rut: '1547423-6',
        Prevision: 'ISAPRE',
    },
    {
        Hora: '11:30',
        Especialista: 'CECILIA BUDNIK',
        Paciente: 'DIEGO MARRE',
        Rut: '16554741-K',
        Prevision: 'FONASA',
    },
    {
        Hora: '12:00',
        Especialista: 'ARTURO CAVAGNARO',
        Paciente: 'CECILIA MENDEZ',
        Rut: '9747535-8',
        Prevision: 'ISAPRE',
    },
    {
        Hora: '12:30',
        Especialista: 'ANDRES KANACRI',
        Paciente: 'MARCIAL SUAZO',
        Rut: '11254785-5',
        Prevision: 'ISAPRE',
    },
    
];



//CONSULTA DE ODONTOLOGIA
let odontologia =[
    {
        Hora: '8:30',
        Especialista: 'ANDREA ZUÑIGA',
        Paciente: 'MARCELA RETAMAL',
        Rut: '11123425-6',
        Prevision: 'ISAPRE'
    },
    {
        Hora: '11:00',
        Especialista: 'MARIA PIA ZAÑARTU',
        Paciente: 'ANGEL MUÑOZ',
        Rut: '9878789-2',
        Prevision: 'ISAPRE'
    },
    {
        Hora: '11:30',
        Especialista: 'SCARLETT WITTING',
        Paciente: 'MARIO KAST',
        Rut: '7998789-5',
        Prevision: 'FONASA'
    },
    {
        Hora: '13:00',
        Especialista: 'FRANCISCO VON TEUBER',
        Paciente: 'KARIN FERNANDEZ',
        Rut: '18887662-K',
        Prevision: 'FONASA'
    },
    {
        Hora: '13:30',
        Especialista: 'EDUARDO VIÑUELA',
        Paciente: 'HUGO SANCHEZ',
        Rut: '17665461-4',
        Prevision: 'FONASA'
    },
    {
        Hora: '14:00',
        Especialista: 'RAQUEL VILLASECA',
        Paciente: 'ANA SEPULVEDA',
        Rut: '14441281-0',
        Prevision: 'ISAPRE'
    },
  
];




// Función para crear y mostrar una tabla con los datos de las consultas
function mostrarTabla(consultas, titulo) {
   
    document.write(`<h2>${titulo}</h2>`);
    
    // Mostrar primera y última atención
    document.write(`<strong><p>Primera atención: ${consultas[0].Paciente} - ${consultas[0].Prevision} | Última atención: ${consultas[consultas.length - 1].Paciente} - ${consultas[consultas.length - 1].Prevision}</p></strong>`);

    // Tabla
    document.write('<table class="tablen"><tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISIÓN</th></tr>');
    // Iterar sobre las consultas y agregar filas a la tabla
    for (let i = 0; i < consultas.length; i++) {
        document.write(`<tr>
          <td>${consultas[i].Hora}</td>
          <td>${consultas[i].Especialista}</td>
          <td>${consultas[i].Paciente}</td>    
          <td>${consultas[i].Rut}</td>
          <td>${consultas[i].Prevision}</td>
          </tr>`);
    }
    // Cerrar la tabla
    document.write('</table>'); 
}

// Llamar a la función para mostrar las consultas de radiología
mostrarTabla(radiologia, '<h3 class="tituloColor">RADIOLOGÍA</h3>');

// Llamar a la función para mostrar las consultas de traumatología
mostrarTabla(traumatologia, '<h3  class="tituloColor">TRAUMATOLOGÍA</h3>');

// Llamar a la función para mostrar las consultas de odontología
mostrarTabla(odontologia, '<h3  class="tituloColor">ODONTOLOGÍA</h3>');





// Nuevas horas a agregar al arreglo de Traumatología
let nuevasHoras = [
    {
        Hora: '09:00',
        Especialista: 'RENÉ POBLETE',
        Paciente: 'ANA GELLONA',
        Rut: '13123329-7',
        Prevision: 'ISAPRE'
    },
    {
        Hora: '09:30',
        Especialista: 'MARIA SOLAR',
        Paciente: 'RAMIRO ANDRADE',
        Rut: '12221451-K',
        Prevision: 'FONASA'
    },
    {
        Hora: '10:00',
        Especialista: 'RAUL LOYOLA',
        Paciente: 'CARMEN ISLA',
        Rut: '10112348-3',
        Prevision: 'ISAPRE'
    },
    {
        Hora: '10:30',
        Especialista: 'ANTONIO LARENAS',
        Paciente: 'PABLO LOAYZA',
        Rut: '13453234-1',
        Prevision: 'ISAPRE'
    },
    {
        Hora: '12:00',
        Especialista: 'MATIAS ARAVENA',
        Paciente: 'SUSANA POBLETE',
        Rut: '14345656-6',
        Prevision: 'FONASA'
    }
];

// Agregar las nuevas horas al arreglo de Traumatología
traumatologia.push(...nuevasHoras);

// Tabla actualizada de Traumatología
mostrarTabla(traumatologia, '<h3  class="tituloColor">TRAUMATOLOGÍA (Actualizada)</h3>');


//-----Dental:
//Imprimir en la página HTML, mediante document.write y/o las funciones que estime conveniente, la lista de consultas médicas de Dental. Sin embargo, debe hacerlo separando por un guión cada dato desplegado y cada fila de información debe estar separada por un párrafo

let listaConsultasDental = (consultas) => {
    let imprimirconsultasDental = "<table><tr><th>Hora</th><th>Especialista </th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>";
    for (let i = 0; i < consultas.length; i++) {
        imprimirconsultasDental += `<tr>
        <td>${consultas[i].Hora}</td>
        <td>${consultas[i].Especialista}</td>
        <td>${consultas[i].Paciente}</td>
        <td>${consultas[i].Rut}</td>
        <td>${consultas[i].Prevision}</td>
        </tr>`;
    }
    imprimirconsultasDental += "</table>";
    document.write('<div class="centrado">' + imprimirconsultasDental + '</div>');
}
// Llamar a la función para imprimir las consultas de odontología
document.write('<h3 class="tituloColor">ODONTOLOGÍA</h3>');
listaConsultasDental(odontologia);


//--. Imprimir un listado total de todos los pacientes que se atendieron en el centro médico
function imprimirPacientesIsapre(consultas) {
    let pacientesIsapre = "";
    for (let i = 0; i < consultas.length; i++) {
        if (consultas[i].Prevision === "ISAPRE") {
            pacientesIsapre += `${consultas[i].Paciente} - ${consultas[i].Prevision}<br><br>`; // Agregar un salto de línea después de cada paciente
        }
    }
    document.write('<div class="centrado">' + pacientesIsapre + '</div>');
}
document.write('<h3 class="tituloColor">PACIENTES CON ISAPRE</h3>');
// Llamar a la función para imprimir los pacientes con previsión ISAPRE
imprimirPacientesIsapre([...radiologia, ...traumatologia, ...odontologia]);


function PcteFonasaTraumatologia(consultas) {
    let pacientesTrauma = "";
    for (let i = 0; i < consultas.length; i++) {
        if (consultas[i].Prevision === "FONASA") {
            pacientesTrauma += `${consultas[i].Paciente} - ${consultas[i].Prevision}<br><br>`; // Agregar un salto de línea después de cada paciente
        }
    }
    document.write('<div class="centrado">' + pacientesTrauma + '</div>');
}
document.write('<h3 class="tituloColor">PACIENTES DE TRAUMATOLOGIA CON LA PREVISION FONASA</h3>');

// Llamar a la función para imprimir los pacientes con previsión FONASA en traumatología
PcteFonasaTraumatologia([...traumatologia]);
