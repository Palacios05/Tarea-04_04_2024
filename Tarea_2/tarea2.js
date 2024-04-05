var monto, descuento, precioFinal

function calcularDescuento(monto) {
    
    if(monto >= 100){
        return monto * 0.10
    }else{
        return monto * 0.20
    }
}

var monto = parseFloat(prompt("Ingrese el monto: "))

var descuento = calcularDescuento(monto)

var precio_final = monto - descuento

alert ("El descuento es de: " + descuento + " \nEl precio final es de: " + precio_final)
