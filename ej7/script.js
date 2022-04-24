var num ; 
num = parseInt(prompt("Ingrese un numero para calcular factorial"));
var res = num ; 
for(let i = num-1 ; i >= 1 ; i--){
    res *= i ; 
}
alert("El resultado es -> " + res );
