let pass=false
let modalInstance;
     
let modelElem = document.getElementById('exampleModal');
modelElem.addEventListener('shown.bs.modal', function (){
 modalInstance = bootstrap.Modal.getInstance(modelElem);


});

let buscar = document.getElementById("buscar")
buscar.addEventListener("click", buscarData)

let spinner = document.getElementById("spinner")
let tablaStockCompleto = document.getElementById("tablaStockCompleto")
let tablaStock = document.getElementById("tablaStock")

let urlCompleta = 'https://lakeg3.blob.core.windows.net/salida/tablaCompleta.json'
let urlCategoria = 'https://lakeg3.blob.core.windows.net/salida/cat.json'
let tabla = "";
let listaData =  "";


//Funcion cargar listas
let categoria = document.getElementById('categorias')
const mostrarLista = (data) => {

    let listaFiltrada = data.map(categoria => categoria.Categoria)
    listaRemoveDup = new Set(listaFiltrada)
    let listCategoria = ''
    for (let item of listaRemoveDup) {
        listCategoria += `<option value=${item}>`
    }
    
    categoria.innerHTML = listCategoria
   
}

let categoriaInput = document.getElementById('categoriaInput')
categoriaInput.addEventListener("input", evento => {checkSubcategoria(evento)})

function checkSubcategoria(e){
    let seleccion = e.target.value
    let listaSubcategorias = []
    console.log(listaData)
    for(let item of listaData){
        if(item.Categoria === seleccion){
            let existe = listaSubcategorias.includes(item.SubCategoria)
            if(!existe){
                //listaSubcategorias.push(item.SubCategoria)
                listaSubcategorias += `<option value=${item.SubCategoria}>`
            }
        }
    }
    document.getElementById('sub-categorias').innerHTML = listaSubcategorias
}


function buscarData() {

    spinner.style.display = "block";
    tablaStockCompleto.style.display = "none";
    tablaStock.style.display = "block";

    /* Aca va la logica si encuentra o no encuentra hay que modificar */

    if (tablaStockCompleto.style.display === "none") {
        tablaStockCompleto.style.display = "block";
        tablaStock.style.display = "none";
    } else {
        tablaStockCompleto.style.display = "none";
        tablaStock.style.display = "block";
    }


    // let url = '../stock.json'
    fetch(urlCompleta)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))

    const mostrarData = (data) => {
        if(data.existe){
            
        }
        spinner.style.display = "none";
        let body = ''
        for (let i = 0; i < data.length; i++) {
            body += `<tr><td>${data[i].Producto}</td><td>${data[i].Sucursal}</td><td>${data[i].Stock}</td></tr>`
        }

        document.getElementById('data').innerHTML = body

    }


}
spinner.style.display = "block";

// fetch(urlCompleta)
//     .then(response => response.json())
//     .then(data => mostrarData(data))
//     .catch(error => console.log(error))

// const mostrarData = (data) => {
//     spinner.style.display = "none";
//     let body = ''
//     for (let i = 0; i < data.length; i++) {
//         body += `<tr><td>${data[i].Producto}</td><td>${data[i].Stock}</td></tr>`
//     }

//     document.getElementById('dataCompleta').innerHTML = body

// }



// Aca va  en caso de 

fetch(urlCategoria)
    .then(response => response.json())
    .then(data => {mostrarLista(data)
                //mostrarSubLista(data)
                console.log(data)
                listaData = data})
    .catch(error => console.log(error)
    )

    

//En caso de provedor

let ingresar = document.getElementById("ingresar")

let password = document.getElementById('password')
let invalido = document.getElementById("invalido")


ingresar.addEventListener("click", ingresarContrasena)
password.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        ingresarContrasena()
    }
});


function ingresarContrasena() {
    let passwordValue = password.value
 
if ( passwordValue == 'a')
 {   
       
    invalido.style.display = "none";
    spinner.style.display = "block";
   
    tablaStock.style.display = "none";
    tablaStockCompleto.style.display = "none";
  

    /* Aca va la logica si encuentra o no encuentra hay que modificar */
    password.classList.remove("checked");


    modalInstance.hide()
    
    pass=true
    if (pass){
        spinner.style.display = "none";
        pass=false
        location.href='Proveedor1.2.html#Proveedor'
       
    }
  
 
}
else{
    invalido.style.display = "block";
    password.classList.add("checked");
}
}


