from Clases.Usuario import Usuario
from Clases.Comentario import Comentario
from Clases.myplaylist import Playlist 

def GetUsuarioEnSesion(usuarios, usuarioEnSesion):
    usuario = {}
    status = 400
    if(usuarioEnSesion != -1):
        usuario = usuarios[usuarioEnSesion]
        status = 200
        
    # si no existe el usuario retornar un error
    return {'data':usuario, 'status': status}


def ModificarPerfil(datos, usuarios, usuarioEnSesion):
    if(usuarioEnSesion != -1):
        nuevoUsuario = Usuario(datos['nombre'], datos['apellido'], datos['nombre_usuario'],
                          datos['contrasenia'], datos['tipo'])

        usuarios[usuarioEnSesion] = nuevoUsuario.toDict()
        return {'data':usuarios, 'status': 200}
    return {'data':usuarios, 'status': 400}

def GetPeliculaClient(peliculas):
    status = 200
    return {'data':peliculas, 'status':status}
    

def SelecPelicula(datos, peliculas):
    nombrePelicula = datos['nombrePelicula']
    pelicula = {}
    status = 400

    for i in range(len(peliculas)):
        movie = peliculas[i]

        if(movie['nombre'] == nombrePelicula):
            # para saber la posicion de la pelicula a actualizar
            pelicula = movie
            pelicula['posicionArreglo'] = i
            status = 200
        
    return {'data': pelicula, 'status': status}

'''
def AgregarPlaylist(datos, playlis):
    playlist = {}
    status = 400  
    return {'data':playlist, 'status': status}


def MostrarenPlaylist(dato, playlist):

    for i in range(len(peliculas)):
        playlist = peliculas[i]

        if(playlist['nombre'] == nombrePelicula):
            # para saber la posicion de la pelicula a actualizar
            pelicula =  playlist
            pelicula['posicionArreglo'] = i
            status = 200
     return {'data':playlist, 'status': status}


'''  
        

    