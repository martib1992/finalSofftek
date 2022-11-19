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



    let url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))

    const mostrarData = (data) => {
        spinner.style.display = "none";
        console.log(data)
        let body = ''
        for (let i = 0; i < data.length; i++) {
            body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`
        }

        document.getElementById('data').innerHTML = body

    }


}
spinner.style.display = "block";
let url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    spinner.style.display = "none";
    console.log(data)
    let body = ''
    for (let i = 0; i < data.length; i++) {
        body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td></tr>`
    }

    document.getElementById('dataCompleta').innerHTML = body

}



// Aca va  en caso de 

let url2 = 'https://jsonplaceholder.typicode.com/users'
fetch(url2)
    .then(response => response.json())
    .then(data => mostrarLista(data))
    .catch(error => console.log(error))

const mostrarLista = (data) => {

    console.log(data)
    let listCategoria = ''
    for (let i = 0; i < data.length; i++) {
        listCategoria += `<option value=${data[i].id}>`

    }
    document.getElementById('categorias').innerHTML = listCategoria
}



let url3 = 'https://jsonplaceholder.typicode.com/users'
fetch(url3)
    .then(response => response.json())
    .then(data => mostrarSubLista(data))
    .catch(error => console.log(error))

const mostrarSubLista = (data) => {

    console.log(data)
    let subCategorias = ''
    for (let i = 0; i < data.length; i++) {
        subCategorias += `<option value=${data[i].id}>`

    }
    document.getElementById('sub-categorias').innerHTML = subCategorias
}


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
        location.href='index.html#Cliente'
       
    }
  
 
}
else{
    invalido.style.display = "block";
    password.classList.add("checked");
}
}


