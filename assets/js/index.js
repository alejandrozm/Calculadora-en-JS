function Sumar(){
    //console.log('HOLA');
    let n1 = document.getElementById('Numero1').value;
    let n2 = document.getElementById('Numero2').value;
    
    let Resultado = parseInt(n1) + parseInt(n2);
    document.getElementById('Resultado').value=Resultado;
}

function Limpiar(){
    document.getElementById("Numero1").value = "";
    document.getElementById("Numero2").value = "";
    document.getElementById("Resultado").value = "";
}

function Restar(){
    //console.log('HOLA');
    let n3 = document.getElementById('Numero1Res').value;
    let n4 = document.getElementById('Numero2Res').value;
    
    let ResultadoRes = parseInt(n3) - parseInt(n4);
    document.getElementById('ResultadoRes').value=ResultadoRes;
}

function LimpiarRes(){
    document.getElementById("Numero1Res").value = "";
    document.getElementById("Numero2Res").value = "";
    document.getElementById("ResultadoRes").value = "";
}

function Multiplicar(){
    //console.log('HOLA');
    let n5 = document.getElementById('Numero1Mul').value;
    let n6 = document.getElementById('Numero2Mul').value;
    
    let ResultadoMul = parseInt(n5) * parseInt(n6);
    document.getElementById('ResultadoMul').value=ResultadoMul;
}

function LimpiarMul(){
    document.getElementById("Numero1Mul").value = "";
    document.getElementById("Numero2Mul").value = "";
    document.getElementById("ResultadoMul").value = "";
}