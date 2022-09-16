let primeraOperacion;
let segundaOperacion;
let terceraOperacion;


function init(){
    let resultado = document.getElementById("resultado");
    let reset = document.getElementById('reset');
    let suma = document.getElementById('suma');
    let resta = document.getElementById('resta');
    let multiplicacion = document.getElementById('multiplicacion');
    let division = document.getElementById('division');
    let igual = document.getElementById('igual');
    let numeroUno = document.getElementById('numeroUno');
    let numeroDos = document.getElementById('numeroDos');
    let numeroTres = document.getElementById('numeroTres');
    let numeroCuatro = document.getElementById('numeroCuatro');
    let numeroCinco = document.getElementById('numeroCinco');
    let numeroSeis = document.getElementById('numeroSeis');
    let numeroSiete = document.getElementById('numeroSiete');
    let numeroOcho = document.getElementById('numeroOcho');
    let numeroNueve = document.getElementById('numeroNueve');
    let numeroCero = document.getElementById('numeroCero');
    
    numeroUno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    numeroDos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    numeroTres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    numeroCuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    numeroCinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    numeroSeis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    numeroSiete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    numeroOcho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    numeroNueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    numeroCero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }

    reset.onclick = function(e){
        resetear();
    }

    suma.onclick = function(e){
        primeraOperacion = resultado.textContent;
        terceraOperacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        primeraOperacion = resultado.textContent;
        terceraOperacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        primeraOperacion = resultado.textContent;
        terceraOperacion = "*";
        limpiar();
    }
    division.onclick = function(e){
        primeraOperacion = resultado.textContent;
        terceraOperacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        segundaOperacion = resultado.textContent;
        resolver();
    }
}

function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent = "";
    primeraOperacion = 0;
    segundaOperacion = 0;
    terceraOperacion = "";
}

function resolver(){
    let res = 0;
    switch(terceraOperacion){
        case "/":
            res = parseFloat(primeraOperacion) / parseFloat(segundaOperacion);
            break;

        case "*":
            res = parseFloat(primeraOperacion) * parseFloat(segundaOperacion);
            break;

        case "-":
            res = parseFloat(primeraOperacion) - parseFloat(segundaOperacion);
            break;
        
        case "+":
            res = parseFloat(primeraOperacion) + parseFloat(segundaOperacion);
            break;
    }
    resetear();
    resultado.textContent = res;
}
