
import { cuentas } from "./objects.js";
import { personas } from "./objetoPersona.js";

//console.log(cuentas[0].plazoFijo[0].fechaCreacion)

let objetoFecha= new Date(cuentas[0].plazoFijo[0].fechaCreacion)

//console.log(objetoFecha.getUTCFullYear())

let fecha= new Date("2020-01-01")
//console.log(fecha.getFullYear() +1)
//console.log(fecha.getUTCFullYear())


function cuentaActiva(fecha){
    let objetoFecha = new Date(fecha)
    let cuentasActivas=[]
    for(let i=0;i < cuentas.length;i++){
        let cuenta= cuentas[i]
        if(new Date(cuenta.plazoFijo[0].fechaCreacion).getUTCFullYear() +1 >= objetoFecha.getFullYear()+1){
            cuentasActivas.push(cuenta)
        }
    }
    return cuentasActivas

}
//console.log(cuentaActiva("2020-01-01"))

/*
Realiza una función que devuelva todos las cuentas con plazos fijos con plazo mayor a 30
días.
*/

function plazoActivo(datoFecha){
    let cuentasPlazoMayorATreinta=[]
    for(let i=0; i< cuentas.length;i++){
        let objetoCuenta= cuentas[i]
        if(objetoCuenta.plazoFijo[0].plazo >= datoFecha){
            cuentasPlazoMayorATreinta[cuentasPlazoMayorATreinta.length] = objetoCuenta
        }
    }
    return cuentasPlazoMayorATreinta
}
//console.log(plazoActivo(30))
/*
Realiza una función que devuelva todos las cuentas del tipo corriente.
*/
function cuentasCorrientes(){
    let cuentasTipoCorriente=[];
    for(let i=0;i< cuentas.length;i++){
        let objetoCuenta= cuentas[i];
        if(objetoCuenta.tipo == 'corriente'){
            cuentasTipoCorriente.push(objetoCuenta)
        }else if(cuentasTipoCorriente.length == 0){
            return "No hay cuentas de tipo corriente"
        }
    }
    return cuentasTipoCorriente
}

//console.log(cuentasCorrientes())

/*
Realiza una función que devuelva todos las cuentas de un tipo de moneda especificado.
*/
let monedaPeso ="dolar"
let monedaDolar= 'dolar';
let monedaEuro='euro';
function tipoMoneda(valorMoneda){
    let tipoCuentaMoneda =[]
    for(let i=0;i < cuentas.length;i++){
        let cuentaBancaria = cuentas[i]
        if( cuentaBancaria.tipoMoneda == valorMoneda){
            tipoCuentaMoneda.push(cuentaBancaria)
        }
        }
        if(tipoCuentaMoneda.length == 0){
            return "no hay cuentas con el tipo moneda"
    }
    return tipoCuentaMoneda;
}



//console.log(tipoMoneda(monedaPeso))

/*
Realiza una función que permita descontar un importe dado (mantenimiento de cuenta) a
todas las cuentas en la lista.
*/

function importeMantenimiento(valor){
    for(let i=0;i< cuentas.length;i++){
        let cuentaObjeto= cuentas[i]
        let costoMantenimiento= (cuentaObjeto.importe - valor)
        cuentaObjeto.importe = costoMantenimiento;
    }
    return cuentas
}

//console.log(importeMantenimiento(100))

/*
Realiza una función que permita incrementar un porcentaje dado (por veneficios
exclusivos) a todas las cuentas con plazo fijo con importe mayor a 500000.
*/
function beneficiosExclusivos(porcentaje){
    for(let i=0; i< cuentas.length;i++){
        let cuentaBanco= cuentas[i];
        if(cuentaBanco.plazoFijo[0].importe >= 50000){
            let beneficio = (cuentaBanco.plazoFijo[0].importe * porcentaje) / 100
            cuentaBanco.plazoFijo[0].importe = cuentaBanco.plazoFijo[0].importe + beneficio
        }
    }
    return cuentas
}

//console.log(beneficiosExclusivos(20))

/*
Realiza una función que permita cargar una nueva cuenta al final de la lista.
*/

function nuevaCuenta(cuentas){
    let tipoCuenta= prompt("Ingrese el tipo cuenta ahorro o corriente");
    let importe=Number(prompt("ingrese el importe de la cuenta"));
    let tipoMoneda=prompt("ingrese el tipo moneda : dolar, euro, pesos");
    let estadoPlazoFijo= prompt("ingrese el estado del plazo activo o inactivo");
    let importePlazo=Number(prompt("ingrese el importe del plazo"));
    let fechaCreada = prompt("Ingrese fecha creacion yyyy-dd-mm");
    let plazo =Number(prompt("Ingrese el plazo"))

     cuentas.push({
        
            tipo: tipoCuenta, // "ahorro"
            importe: importe,
            tipoMoneda: tipoMoneda, // "euro", // "dolar",
            plazoFijo: [{
            estado: estadoPlazoFijo, // "inactivo"
            importe: importePlazo,
            fechaCreacion: fechaCreada,
            plazo: plazo, // en dias
            }],

            
            
    })
    return cuentas
    
}

//console.log(nuevaCuenta())

//console.log(personas[0].nombre)


function addCount(arrayCuentas){
    let modeloCuenta =
        {
            
                tipo: tipoCuenta, // "ahorro"
                importe: importe,
                tipoMoneda: tipoMoneda, // "euro", // "dolar",
                plazoFijo: [{
                estado: estadoPlazoFijo, // "inactivo"
                importe: importePlazo,
                fechaCreacion: fechaCreada,
                plazo: plazo, // en dias
                }],
                
        }
    let tipoCuenta= prompt("Ingrese el tipo cuenta ahorro o corriente");
    let importe=Number(prompt("ingrese el importe de la cuenta"));
    let tipoMoneda=prompt("ingrese el tipo moneda : dolar, euro, pesos");
    let estadoPlazoFijo= prompt("ingrese el estado del plazo activo o inactivo");
    let importePlazo=Number(prompt("ingrese el importe del plazo"));
    let fechaCreada = prompt("Ingrese fecha creacion yyyy-dd-mm");
    let plazo =Number(prompt("Ingrese el plazo"))
    
    
        arrayCuentas.push(modeloCuenta)
        return arrayCuentas
}

//console.log(addCount(cuentas))


/*
Realiza una función que permita ordenar la lista según el importe de cada cuenta.
*/

function ordenarCuentas(){
    let cuentaOrdenadaSegunImporte=[];
    for(let i=0; i< cuentas.length-1;i++){
        
        for(let j=0; j< cuentas.length-1;j++){
            let auxiliar;
            if(cuentas[j].importe < cuentas[j+1].importe){
                auxiliar = cuentas[j];
                cuentas[j] = cuentas[j+1];
                cuentas[j+1] = auxiliar
            }
        }
    }
    return cuentas
}

//console.log(ordenarCuentas())

/*
Realiza una función que permita ordenar la lista según el vencimientos de los plazos fijos.
*/
function cuentasOrdenadasSegunVencimiento(){
    let cuentaOrdenadas=[];
    for(let i=0; i< cuentas.length -1;i++){
        for(let j=0; j < cuentas.length -1;j++){
            let varAuxiliar;
            if( cuentas[j].plazoFijo[0].plazo > cuentas[j+1].plazoFijo[0].plazo){
                varAuxiliar =cuentas[j];
                cuentas[j] = cuentas[j+1]
                cuentas[j+1] = varAuxiliar
            }
        }
    }
    return cuentas
}

//console.log(cuentasOrdenadasSegunVencimiento())

/*Llame a su función shuffleArray, toma una matriz como parámetro y devuelve
una matriz mezclada
*/


let matriz =[
    [1,1,1],
    [3,3,3],
    [5,5,5]
]
/*
function shuffleArray(valorMatriz){
    let array=[]
    for(let i = 0; i < valorMatriz.length; i++){
        for(let j= 0; j < valorMatriz.length; j++){
            let elemento = valorMatriz[i][j]
            array.push(elemento)
            

        }
    }
    for(let i=array.length-1; i > 0; i--){
        let posicionAlAzar = Math.floor(Math.random()* (i+ 1))
        let aux = array[i];
        array[i] = array[posicionAlAzar]
        array[posicionAlAzar] = aux
    }

    for(let i=0; i)



    return array
}
*/

//console.log(shuffleArray(matriz))


function mezclarMatriz(unaMatriz){
    for(let i=unaMatriz.length -1 ;i >0; i--){
        for(let j= unaMatriz.length -1; j > 0; j--){
            let posicionI = Math.floor(Math.random()*(i+1));
            let posicionJ = Math.floor(Math.random() * (j +1));

            let elemento = unaMatriz[i][j];
            unaMatriz[i][j] = unaMatriz[posicionI][posicionJ]
            unaMatriz[posicionI][posicionJ] = elemento
        }
    }
    return unaMatriz
}

//console.log(mezclarMatriz(matriz))

const personas1 =[
    {   
        name:"pepe",
        edad:20,
        ocupacion:"estudiante"
    },
    
    {   
        name:"carlos",
        edad:20,
        ocupacion:"estudiante"
    },
    
    {   
        name:"roberto",
        edad:10,
        ocupacion:"estudiante"
    },
    
]

function encontrarPersona(nombre){
    return personas1.find(function(persona){
        return persona.name === nombre
    })
}
let busqueda = encontrarPersona("pepe")
console.log(encontrarPersona("pepe"))
