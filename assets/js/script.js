//console.log('probando');

var datos = [
    {
        nombre: "bicicleta de Ruta",
        id: 1,
        genero: "masculino",
        categoria: "bicicletas",
        precio: 1590000,
        stock: 5,
        img: "./img/BicicletaAdulto.png"
    },
    {
        nombre: "zapatillas ciclismo",
        id: 2,
        genero: "unisex",
        categoria: "indumentaria",
        precio: 90000,
        stock: 8,
        img: "./img/ZapatillasCiclismo.jpeg"
    },
    {
        nombre: "casco adulto",
        id: 3,
        genero: "masculino",
        categoria: "seguridad",
        precio: 79990,
        stock: 3,
        img: "./img/CascoAdulto.png"
    },
    {
        nombre: "casco niño/a",
        id: 4,
        genero: "unisex",
        categoria: "seguridad",
        precio: 39990,
        stock: 13,
        img: "./img/CascoNinio.png"
    },
    {
        nombre: "bicicleta mujer",
        id: 5,
        genero: "femenino",
        categoria: "bicicletas",
        precio: 100000,
        stock: 12,
        img: "./img/bicicletaMujer.webp"
    },
    {
        nombre: "bicicleta niño/a",
        id: 6,
        genero: "unisex",
        categoria: "bicicletas",
        precio: 530900,
        stock: 10,
        img: "./img/BiciNinio.jpeg"
    },
    {
        nombre: "guantes ciclismo",
        id: 7,
        genero: "unisex",
        categoria: "indumentaria",
        precio: 12000,
        stock: 20,
        img: "./img/Guanteciclismo.webp"
    },
    {
        nombre: "scooter eléctrico",
        id: 8,
        genero: "unisex",
        categoria: "e-move",
        precio: 149900,
        stock: 4,
        img: "./img/ScooterElectrico.png"
    },
    {
        nombre: "foco Led Blanco",
        id: 9,
        genero: "unisex",
        categoria: "accesorios",
        precio: 20000,
        stock: 9,
        img: "./img/LuzBicicleta.jpeg"
    },
    {
        nombre: "conjunto Ciclismo",
        id: 10,
        genero: "unisex",
        categoria: "indumentaria",
        precio: 11900,
        stock: 11,
        img: "./img/ConjuntoCiclismo.jpeg"
    }
]

var arregloCarritoCompra =[];

function renderTarjetas(){
    //console.log('prueba');
    var contenidoPrincipal = document.querySelector('#contenidoPrincipal'); //asociado al main
    contenidoPrincipal.setAttribute('class', 'container');
    var contenedorPrincipal = document.createElement('div');
    contenedorPrincipal.setAttribute('id', 'contenedorPrincipal');
    contenedorPrincipal.setAttribute('class', 'row');
    
    /* creando todo para usar de forma dinamica */
    datos.forEach(function(producto) {
        var contador = 0;
        /* construyendo la tarjeta */
        var contenedorTarjeta = document.createElement('div');
        var imagen = document.createElement('img');
        /* creamos contenedor del cuerpo de la tarjeta*/
        var contenedorCuerpoTarjeta = document.createElement('div');
        var tituloTarjeta = document.createElement('h5');
        var parrafoTarjeta = document.createElement('p');
        /* creamos lista de tarjeta */
        var listaTarjeta = document.createElement('ul');
        var listaItemUno = document.createElement('li');
        var listaItemDos = document.createElement('li');
        var listaItemTres = document.createElement('li');
        /* aplicando estilos*/
        contenedorTarjeta.setAttribute('class', 'card col-3 m-3');
        contenedorTarjeta.setAttribute('style', 'width: 18rem;');
        imagen.setAttribute('class', 'card-img-top');
        imagen.setAttribute('alt', producto.nombre);
        imagen.setAttribute('src', `assets/${producto.img}`);
        contenedorCuerpoTarjeta.setAttribute('class', 'card-body');
        tituloTarjeta.setAttribute('class', 'card-title');
        tituloTarjeta.innerHTML = producto.nombre;
        parrafoTarjeta.setAttribute('class', 'card-text');
        parrafoTarjeta.innerHTML = producto.categoria;
        listaTarjeta.setAttribute('class', 'list-group list-group-flush');
        listaItemUno.setAttribute('class', 'list-group-item');
        listaItemUno.innerHTML = producto.genero;
        listaItemDos.setAttribute('class', 'list-group-item');
        listaItemDos.innerHTML = producto.precio;
        listaItemTres.setAttribute('class', 'list-group-item');
        listaItemTres.innerHTML = producto.stock;
        /* incorporando boton */
        btnAgregar.setAttribute('class', 'btn btn-primary mb-3');
        btnAgregar.innerHTML = 'Agregar al carrito';
        btnAgregar.addEvenListener('click', function () {
            if (producto.stock > 0) {
                contador = contador +1;
                producto.cantidadUndidadesSeleccionadas = contador;
                var estado = arregloCarritoCompra.indexOf(producto);
                if(estado == -1){
                    arregloCarritoCompra.push(producto);
                }
                producto.stock = producto.stock -1;
                listaItemTres.innerHTML = producto.stock;
            } else {
                alert(`No queda stock del producto ${producto.nombre}`);
            }
        });
          contenedorCuerpoTarjeta.append(tituloTarjeta, parrafoTarjeta);
          listaTarjeta.append(listaItemUno, listaItemDos, listaItemTres);
          contenedorTarjeta.append(imagen, contenedorCuerpoTarjeta, listaTarjeta, btnAgregar);
          contenidoPrincipal.append(contenedorTarjeta);
    });
    contenidoPrincipal.append(contenedorPrincipal);

}


var carritoCompra = document.querySelector('#carritoCompra');
carritoCompra.addEventListener('click', function () {
    var contenedorPrincipal = document.querySelector('#contenedorPrincipal');
    contenedorPrincipal.setAttribute('class', 'd-none');
    arregloCarritoCompra.forEach(function (producto) {
        var contenedorPrincipalDos = document.createElement('div');
        var cuerpoTabla = document.querySelector('#cuerpoTabla');
        var fila = document.createElement('tr');
        var columnaUno = document.createElement('td');
        var columnaDos = document.createElement('td');
        var columnaTres = document.createElement('td');
        var columnaCuatro = document.createElement('td');
        var columnaCinco = document.createElement('td');
        columnaUno.innerHTML = producto.nombre;
        columnaDos.innerHTML = producto.categoria;
        columnaTres.innerHTML = producto.genero;
        columnaCuatro.innerHTML = producto.precio;
        columnaCinco.innerHTML = producto.unidades;
        fila.append(columnaUno, columnaDos, columnaTres, columnaCuatro, columnaCinco);
        cuerpoTabla.append(fila);
        contenedorPrincipalDos.setAttribute('class', 'd-block');
      });
  });

renderTarjetas()