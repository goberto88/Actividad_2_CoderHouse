//Tienda de discos, finalidad cargar inventario y que sea mostrado por pantalla los resultados buscados.

//Iniciamos creando la plantilla de clase Disco. 

class Discos {
    constructor(id, banda, album, año, genero, precio){
        this.id = id;
        this.banda = banda;
        this.album = album;
        this.año = año;
        this.genero = genero;
        this.precio = precio;
    }
}

//Elaboré una función que de forma interactiva permite cargar la cantidad N de discos a mi inventario, adicionalmente me permite cargar todos los objetos en el array (listadoDiscos);

function cargarInventario(){

    const listadoDiscos = [];

    let inicio = prompt('¿Desea cargar un disco? presione (si o no)');

    while(inicio.toLocaleLowerCase()  != 'no'){
        
            const disco = new Discos(parseInt(prompt('Añadir ID del album: ')), 
            prompt('Añade el nombre de la banda: '), 
            prompt('Añade el nombre del Album: '), 
            prompt('Añade el año del Album: '), 
            prompt('Añade el genero: '),
            parseInt(prompt('Añadir el precio: ')));
        
        listadoDiscos.push(disco);

        inicio = prompt('¿Desea cargar otro disco? presione (si o no)');
    }
 return listadoDiscos;
}

//Hacer un buscador por banda, album, genero y año.

function buscarDiscos(listadoDiscos, busqueda){

    const resultado = listadoDiscos.filter(disco => disco.banda.includes(busqueda) || disco.album.includes(busqueda) || disco.genero.includes(busqueda) || disco.año.toString().includes(busqueda));
    return resultado;
}

//imprimir el resultado por pantalla 

function mostrarDiscos(resultado){
   for(const disco of resultado){
    alert(`ID: ${disco.id}, Banda: ${disco.banda}, Album: ${disco.album}, Año: ${disco.año}, Genero: ${disco.genero}, Precio: ${disco.precio}`);
   }
}

//Llamada a las funciones generadas. 

const inventario = cargarInventario();
const busqueda =  prompt('¿Que desea buscar? (Puede buscar por banda, album, genero o año');
const resultadoBusqueda = buscarDiscos(inventario, busqueda);
mostrarDiscos(resultadoBusqueda);




