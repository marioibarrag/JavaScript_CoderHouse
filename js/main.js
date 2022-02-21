console.log("main.js file loaded");

function calcularPromedio(){
    let stringNumeros = prompt('Ingresar números separados por "," (coma)');
    
    if(stringNumeros != null){

        if(validateNumbersOnly(stringNumeros)){
            let array = stringNumeros.split(',');
            let suma = 0;
            for(let i = 0; i < array.length; i++){
                suma += parseInt(array[i].trim());
            }
            alert("El promedio es: " + (suma/array.length).toFixed(2));
        } else{
            alert("Solo se permiten números separados por coma.")
        }
        
    }

}

function validateNumbersOnly(string){
    for(let i = 0; i < string.length; i++){
        if(isNaN(string[i]) ){
            if(string[i] != ',')
                return false;
        }
    }
    return true;
}