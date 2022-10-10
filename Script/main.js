const ListaPlantas = [
    { nombre: "cactus", tipo: "Exterior", precio: 2500 },
    { nombre: "geranio", tipo: "Interior", precio: 1800 },
   
]






let plantas;

let cantidad;
let precio = 0;

let carrito = []

let unidades


let producto;


let productoABuscar;
let buscar;


function Buscar(){

   productoABuscar = prompt("Que estas buscando");
       buscar = ListaPlantas.find(elemento => elemento.nombre == productoABuscar);

     console.log(buscar);

     

}



function mostrarMensajedeBienvenida(){
let mensajebienvenida = prompt("Bienvenidos a nuestra tienda! Que accion desea realizar?(comprar)");
    while((mensajebienvenida != "Buscar").toLowerCase && (mensajebienvenida != "Filtrar").toLowerCase && (mensajebienvenida != "Comprar").toLowerCase){
        mensajebienvenida = prompt ("Elija una opcion valida")
    }if (mensajebienvenida == ("comprar").toLowerCase()){
        Comprar();

    }else if 
        (mensajebienvenida == ("buscar").toLowerCase);
        Buscar();
    
}   



function Comprar() {
    let mensajeDeCompra = prompt ("que desea comprar?(plantas)");
    
        
    if (mensajeDeCompra == ("plantas").toLowerCase)
        mensajeDeCompra = prompt("Elija un producto");
        let todasLasPlantas = ListaPlantas.map ((planta) => ` ${planta.nombre + " " + planta.precio}$ `);
        alert(todasLasPlantas.join("-"))

        while(mensajeDeCompra != "no"){
             producto = prompt("Agrega un producto a tu carrito");
           break;
        }
        if(producto == "cactus" || producto == "geranio"){
        switch (producto) {
            case "cactus":
            precio = 2500;
            break;

            case "geranio":
            precio = 1800;
            break;
        } 
    
         unidades = parseInt(prompt("Indique las unidades"));

        carrito.push({producto, unidades, precio});
    } 

        mensajeDeCompra = prompt("Desea seguir comprando?");

        if (mensajeDeCompra === "si")
          mostrarMensajedeBienvenida()

        while(mensajeDeCompra === "no"){
            alert("Gracias por comprar!")
            carrito.forEach((carritoFinal)=> {
                alert(`producto: ${carritoFinal.producto} unidades: ${carritoFinal.unidades} Precio Final: $${carritoFinal.unidades * carritoFinal.precio}`)
            })
            break;
    } 

}




mostrarMensajedeBienvenida()
    








  
    

  



