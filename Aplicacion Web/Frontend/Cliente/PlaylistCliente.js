
/*
function tabalaplaylist(registros) {
    cadena = ``;
    registros.forEach(element => {
        // https://fontawesome.com/icons
        cadena = ``; 
         registros.forEach(element => {
        cadena += `<tr>
        <td> ${element.nombre} </td>
        <td> ${element.genero} </td>
        <td> ${element.clasificacion} </td>
        <td> ${element.anio} </td>
        <td> ${element.duracion} </td>
        <td> ${element.link} </td>
        </tr>`
            
    });
    
    var tbody = document.getElementById('favpelis');
    tbody.innerHTML = cadena
  
}



function AgregarPlaylist () {
    fetch('http://localhost:3000/MostrarenPlaylist', {
        method: 'GET',
        body: JSON.stringify({ 'nombrePelicula': nombre }),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    }).then(res => res.json())
        .catch(err => {
            console.error('Error:', err)
            alert("Ocurrio un error")
        }).then(response => {
            console.log(response)
            tabalaplaylist(response.data)
            console.log(response);
            if (response.status == 400) {
                alert("Ocurrió un error")
            } else {
                alert("Pelicula agregada a Mi Playlist");
                // refrescar página
                location.reload();
            }
        })
}

function AgregarPlaylist() {   
fetch('http://localhost:3000/AgregarPlaylist', {
        method: 'POST',
        body: JSON.stringify(infoPelicula),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    }).then(res => res.json())
        .catch(err => {
            console.error('Error:', err)
            alert("Ocurrio un error")
        }).then(response => {
            console.log(response);
            if (response.status == 400) {
                alert("Ocurrió un error")
            } else {
                alert("Pelicula agregada a Mi Playlist");
                 //refrescar página
                this.console.log(response.data)

                location.reload();
            }
        })

}

*/