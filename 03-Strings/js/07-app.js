/*
    En esta seccion veremos los metodos upercase y lowercase
    que se usan para convertir toda la cadena a Mayusculas y 
    minusculas respectivamente.
*/ 

const producto="Monitor de 20 pulgadas ";

console.log(producto);

// toupercase
console.log(producto.toUpperCase());
// tolowercase
console.log(producto.toLowerCase());

/*
    La finalidad de esto es que en muchas ocaciones los ucuatios
    utilizan mayusculas y minusculas mescladas, y como JavaScrip
    es sensible a esto pude que al comparar datos como un correo
    electronico y una identificacion estas sea interpretadas
    de forma incorrecta

    No es lo miso tener:
                        tuCorreo@gmail.com
    A tener:
            TuCorreo@gmail.com
*/ 