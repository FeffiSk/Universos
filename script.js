let habitanteGalactico = [];
ingresarDatosHabitante();

const tiposUniversos = [
    { id: "1", tipo: "Marte" },
    { id: "2", tipo: "Centro Comercial Espacial" },
    { id: "3", tipo: "Hangar de Naves Espaciales" },
    { id: "4", tipo: "Ciudadela Orbital" }
];

const universoSeleccionado = seleccionarTipoUniversos();
calcularpersonasenplaneta(universoSeleccionado);

function ingresarDatosHabitante() {
    let bucle = true;
    while (bucle) {
        const nombre = prompt("Ingrese el nombre del contratista intergalactico:");
        const apellido = prompt("Ingrese el apellido del contratista:");
        const identificacionGalactica = prompt("Ingrese el numero de identificacion galactica:");
        const tipoContrato = prompt("Ingrese el tipo de contrato que ofrece:");

        if (nombre && apellido && identificacionGalactica && tipoContrato) {
            let contratista = {
                nombre: nombre,
                apellido: apellido,
                identificacionGalactica: identificacionGalactica,
                tipoContrato: tipoContrato,
            };

            habitanteGalactico.push(contratista);
            alert("Datos ingresados correctamente. El contratista ha sido registrado en la base estelar.");
            console.log("Contratistas galacticos registrados:");
            console.log(habitanteGalactico);
        } else {
            alert("Lo siento, faltaron datos.");
        }
        bucle = confirm("¿Desea ingresar otro contratista?");
    }
}

function seleccionarTipoUniversos() {
    let opcionesUniversos = "Seleccione el tipo de planeta intergalactico:\n1. Marte\n2. Centro Comercial Espacial\n3. Hangar de Naves Espaciales\n4. Ciudadela Orbital";
    let tipoSeleccionado = prompt(opcionesUniversos);
    for (let i = 0; i < tiposUniversos.length; i++) {
        if (tiposUniversos[i].id === tipoSeleccionado) {
            let tipoUniversosSeleccionado = tiposUniversos[i].tipo;
            alert("Ha seleccionado la opcion: " + tipoUniversosSeleccionado);
            return tipoUniversosSeleccionado;
        }
    }

    alert("El tipo de universo seleccionado no existe. Por favor, intente de nuevo.");
    return seleccionarTipoUniversos();
}

function calcularpersonasenplaneta(cantidad) {
    let tipodeplanetaSeleccionado;

    switch (cantidad) {
        case "Marte":
            cantidad = 20;
            tipodeplanetaSeleccionado = "Marte";
            break;
        case "Centro Comercial Espacial":
            cantidad = 15;
            tipodeplanetaSeleccionado = "Centro Comercial Espacial";
            break;
        case "Hangar de Naves Espaciales":
            cantidad = 10;
            tipodeplanetaSeleccionado = "Hangar de Naves Espaciales";
            break;
        case "Ciudadela Orbital":
            cantidad = 15;
            tipodeplanetaSeleccionado = "Ciudadela Orbital";
            break;
        default:
            alert("El tipo de planeta en el que quiere ingresar es inexistente. Por favor ingrese una opción valida.");
            return;
    }

    alert(`Cantidad de personas en ${tipodeplanetaSeleccionado}: ${cantidad}`);
}