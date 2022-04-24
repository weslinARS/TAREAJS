var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var dni; 
var letra; 
var res; 
dni = parseInt(prompt("Ingrese su dni: "));
letra = prompt("Ingrese la letra de su dni");
if(dni < 0 || dni > 99999999){
    alert("El número ingresado no es válido");
}else{
    var res  ; 
    res = letras[dni % 23];
    if(res === letra ){
        alert("La letra y el numero ingresado son correctos");
    }else{
        alert("La letra y el número no coinciden");
    }
}