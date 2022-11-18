let buscar = document.getElementById("buscar")
buscar.addEventListener("click", buscarData)


function buscarData() {
    let tablaStockCompleto = document.getElementById("tablaStockCompleto")
    let tablaStock = document.getElementById("tablaStock")

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
        console.log(data)
        let body = ''
        for (let i = 0; i < data.length; i++) {
            body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`
        }

        document.getElementById('data').innerHTML = body

    }


}

let url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))

    const mostrarData = (data) => {
        console.log(data)
        let body = ''
        for (let i = 0; i < data.length; i++) {
            body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td></tr>`
        }

        document.getElementById('dataCompleta').innerHTML = body

}

