function mayoresEdad(arreglo){
    if(!Array.isArray(arreglo)) 
        throw new TypeError("arreglo inválido");
    const mayores = [];
    for (let i=0; i<arreglo.length; i++){
        const valor = (arreglo[i] && typeof arreglo[i] === 'object') ? arreglo[i].edad : arreglo[i];
        if(valor < 0) 
            throw new TypeError("edad inválida");
        if(valor >= 18){
            mayores.push(valor);
        }
    }
    return mayores;
}
module.exports = { mayoresEdad };
