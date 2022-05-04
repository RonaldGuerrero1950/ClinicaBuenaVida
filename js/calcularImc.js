
var pacientes = document.querySelectorAll(".paciente");

for (let index = 0; index < pacientes.length; index++) {
    var paciente = pacientes[index];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var tdImc = paciente.querySelector(".info-imc");
    var pesoEsValido=true;
    var alturaEsValida=true;

    if((peso<0) || (peso>400)){
        tdImc.textContent="Peso incorrecto";
        pesoEsValido=false;
        paciente.classList.add("paciente-incorrecto");
    }

    if((altura<0) || (altura>3)){
        tdImc.textContent="Altura incorrecta";
        alturaEsValida=false;
        paciente.classList.add("paciente-incorrecto");
    }

    if(pesoEsValido && alturaEsValida){

        tdImc.textContent = calcularIMC(peso, altura);
    }
    
}

function calcularIMC(peso,altura){
    var imc = peso/(altura*altura);
    return imc.toFixed(2);
}

/* Cómo seleccionar diversos elementos con querySelectorAll().
Recordamos las iteraciones con ciclo for.
Manipulación de estilos con la propiedad. style.
Buenas prácticas al no alterar el estilo directo en JavaScript, sino usar CSS, a través de clases con la propiedad .classList(). */



