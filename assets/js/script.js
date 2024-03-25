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
    document.write(`<strong><span>Primera atención: ${consultas[0].Paciente} - ${consultas[0].Prevision} | Última atención: ${consultas[consultas.length - 1].Paciente} - ${consultas[consultas.length - 1].Prevision}</span></strong>`);

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





//--------------- Primera Actividad---Agregar Nuevas horas al arreglo de Traumatología
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

traumatologia.push(...nuevasHoras);
mostrarTabla(traumatologia, '<h3  class="tituloColor">TRAUMATOLOGÍA (Actualizada)</h3>');


//Segunda Actividad-- Eliminar el primer y ultimo elemento del arreglo de Radiología
// Eliminar el primer elemento del arreglo de radiología
radiologia.shift();
document.write('<h3 class="tituloColor">RADIOLOGÍA (Eliminando el primer elemento Método (Shift))</h3>');
mostrarTabla(radiologia, '');

// Eliminar el ultimo elemento del arreglo de radiología
radiologia.pop();
document.write('<h3 class="tituloColor">RADIOLOGÍA (Eliminando el último elemento Método (Pop))</h3>');
mostrarTabla(radiologia, '')


//Tercera Actividad-----Dental:
//Imprimir en la página HTML, mediante document.write y/o las funciones que estime conveniente, la lista de consultas médicas de Dental. Sin embargo, debe hacerlo separando por un guión cada dato desplegado y cada fila de información debe estar separada por un párrafo

function imprimirConsultasDental(consultas) {
    consultas.forEach(consulta => {
        document.write("<div class='divForEach'>" + "<p>" + consulta.Hora + " - " + consulta.Especialista + " - " + consulta.Paciente + " - " + consulta.Rut + " - " + consulta.Prevision +"</p>");

    });
}
// Llamar a la función para imprimir las consultas de odontología
document.write('<h3 class="tituloColor">CONSULTAS ODONTOLOGÍA (Método forEach)</h3>');
imprimirConsultasDental(odontologia);




//--. Cuarta Actividad ---Imprimir un listado total de todos los pacientes que se atendieron en el centro médico


//HACERLO CON ARRAY:

let pacientesTotal = [];
//SUMAREMOS TODOS LOS PACIENTES
radiologia.forEach(consulta => {
    pacientesTotal.push(consulta.Paciente);
});
// Agregar pacientes de traumatología
traumatologia.forEach(consulta => {
    pacientesTotal.push(consulta.Paciente);
});
// Agregar pacientes de odontología
odontologia.forEach(consulta => {
    pacientesTotal.push(consulta.Paciente);
})

// Imprimir los pacientes uno por uno en párrafos separados
document.write('<h3 class="tituloColor">LISTADO DE PACIENTES ATENDIDOS (Con método push Y ForEach)</h3>');
pacientesTotal.forEach(paciente => {
    document.write(`<p>${paciente}</p>`);
});


//hacerlo sin Método de Array
function pacientectesAtendidos(consultas) {
    let TotalAtendidos = "";
    let totalPacientes = 0;
    for (let i = 0; i < consultas.length; i++) {
        if (consultas[i].Prevision === "ISAPRE" || consultas[i].Prevision === "FONASA") {
            TotalAtendidos += `${consultas[i].Paciente} - ${consultas[i].Prevision}<br><br>`; // Agregar un salto de línea después de cada paciente
            totalPacientes++; 
        }
    }
    document.write('<div class="centrado">' + TotalAtendidos + '</div>');
    return totalPacientes; // Devolver el total de pacientes
}
document.write('<h3 class="tituloColor">TOTAL DE PACIENTES ATENDIDOS EN EL CENTRO MÉDICO (Sin método de Array)</h3>');
// Llamar a la función para imprimir los pacientes con previsión ISAPRE
let totalPacientesAtendidos = pacientectesAtendidos([...radiologia, ...traumatologia, ...odontologia]);
document.write(`<h4>El Total de los pacientes atendidos es : ${totalPacientesAtendidos}</h4>`);




// Quinta actividad--Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas de Dental 

function mostrarIsapreDental(consultas) {
   let isaprePacientesDental = consultas.filter(consulta => consulta.Prevision === 'ISAPRE');
    isaprePacientesDental.forEach(consulta => {
        document.write('<div class="metodofilter">' + consulta.Paciente + ' - ' + consulta.Prevision + '</div> <br>');
    });
}

// Llamar a la función para imprimir las consultas de odontología con previsión ISAPRE
document.write('<h3 class="tituloColor">CONSULTAS ODONTOLOGÍA ISAPRE (Método filter)</h3>');
mostrarIsapreDental(odontologia);



//----Sexta Actividad Filtrar aquellos pacientes que indican ser de --"ISAPRE"-- en la lista de consultas médicas de Dental

function mostrarFonasaTrauma(consultas) {
    let pacienteFonasaTrauma = consultas.filter(consulta => consulta.Prevision === 'FONASA');
     pacienteFonasaTrauma.forEach(consulta => {
         document.write('<div class="metodofilter">' + consulta.Paciente + ' - ' + consulta.Prevision + '</div> <br>');
     });
 }
 
 // Llamar a la función para imprimir las consultas de odontología con previsión ISAPRE
 document.write('<h3 class="tituloColor">CONSULTAS TRAUMATOLOGÍA Y FONASA (Método filter)</h3>');
 mostrarFonasaTrauma(traumatologia);