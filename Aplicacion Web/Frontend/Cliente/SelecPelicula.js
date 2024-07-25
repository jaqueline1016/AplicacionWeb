var objeto = { 'nombrePelicula': sessionStorage.peliculaVer }
var objeto2 = {'contrasenia': sessionStorage.CurrentUser }
this.console.log(objeto);
this.console.log(objeto2);
getPeliculaClient();
getComentarios();



function getComentarios() {
    fetch(`http://localhost:3000/getComentarios`, {
        method: 'POST',
        body: JSON.stringify(objeto),
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
            console.log(response)
            actualizarTabla(response.data)
        })
}


function actualizarTabla(registros) {
    //esta es la tabla de los comentarios 
    cadena = ``;
    registros.forEach(element => {
        cadena += `<tr>
            <td> ${element.autor} </td>
            <td> ${element.mensaje} </td>
            </tr>`
    });

    var tbody = document.getElementById('comentarios');
    tbody.innerHTML = cadena
}

function AgregarComentarios() {//a esto debe que llamar el boton
    var comentario = document.getElementById("AgregarComentarios-pelicula").value

    var objeto1 = {
        'nombrePelicula': sessionStorage.peliculaVer,
        'autor': sessionStorage.CurrentUser, // INSERTAR USUARIO
        'mensaje': comentario
    }
    this.console.log(objeto1)

    fetch('http://localhost:3000/AgregarComentarios', {
        method: 'POST',
        body: JSON.stringify(objeto1),
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
                console.log(response)
                location.href = "SelecPelicula.html"
            }
        })
}

function getPeliculaClient() {

    /*

        var objeto = [
            {
                'nombrePelicula': sessionStorage.peliculaVer,




            },
            
        ];
        
        tabladeDatosPelicula(objeto);


    fetch('http://localhost:3000/SelecPelicula', { 
        method: 'POST',
        body: JSON.stringify(objeto),
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
        //pelicula = response.data
        //tabladeDatosPelicula(response.data);
        var peliculas = [
            {
                peliculas: response.data
            },
            
        ];
        
        tabladeDatosPelicula(peliculas);
    
        
        
    })
    */
}


function tabladeDatosPelicula(registros) {
    
    cadena = ``; 
    /*
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
    */
    var tbody = document.getElementById('peliculas');
    tbody.innerHTML = cadena
}







