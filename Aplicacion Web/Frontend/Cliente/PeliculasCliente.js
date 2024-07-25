var objeto = { 'nombrePelicula': sessionStorage.peliculaVer }
getPeliculaClient();


function actualizarTablaClient(registros) {
    cadena = ``;
    registros.forEach(element => {
        // https://fontawesome.com/icons
        cadena += `<tr>
            <td> ${element.nombre} </td>           
            </tr>
            <tr> 
            <td> ${element.anio} </td>
            </tr>
            <tr> 
            <td>
            <div style="margin:auto; width: fit-content;">
            <iframe id="video" width="520" height="315" src="${element.link}" allowfullscreen>
            </iframe>
            </div>
            </td>
            </tr>
            <tr> 
            <td> 
            <button value=${element.nombre} onclick="ver('${element.nombre}')" type="button" class="btn btn-info">
            Ver<i class="fas fa-eye"></i>
            <button value=${element.nombre} onclick="AgregarPlaylist('${element.nombre}')" type="button" class="btn btn-danger">
            Agregar a Playlist &#x2665;
            </button>
            <td> 
            </tr>`
           
    });

    var tbody = document.getElementById('peliculas');
    tbody.innerHTML = cadena
}

function ver(nombre) {
    // guardar de forma global
    sessionStorage.setItem("peliculalist", nombre);
    location.href = "SelecPelicula.html"
}

function AgregarPlaylist(nombre) {
     
    sessionStorage.setItem("peliculaVer", nombre);
        location.href = "PlaylistCliente.html"



}



function getPeliculaClient() {
    fetch('http://localhost:3000/getPeliculaClient', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    })
        .then(res => res.json())
        .catch(err => {
            console.error('Error:', err)
            alert("Ocurrio un error")
        })
        .then(response => {
            this.console.log(response)
            pelicula = response.data
            actualizarTablaClient(response.data);

            /*
            document.getElementById("VerPelicula-nombre").value = pelicula.nombre
            document.getElementById("VerPelicula-genero").value = pelicula.genero
            document.getElementById("VerPelicula-clasificacion").value = pelicula.clasificacion
            document.getElementById("VerPelicula-anio").value = pelicula.anio
            document.getElementById("VerPelicula-duracion").value = pelicula.duracion
            document.getElementById("VerPelicula-link").value = pelicula.link
            document.getElementById("video").src = pelicula.link*/
        })
}

