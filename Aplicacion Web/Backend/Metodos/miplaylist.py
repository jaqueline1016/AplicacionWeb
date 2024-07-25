from Clases.myplaylist import  Playlist
from Clases.Usuario import Usuario

def AgregarPlaylist(datos, playlist):
    nombrePelicula = datos['nombrePelicula']
    status = 400

    if (nombrePelicula != ""):
        status = 200
        ##nuevaplaylis = Playlist(datos[])
    return {'data':playlist, 'status': status}






'''

def MostrarenPlaylist(dato, playlist):


if(usuarioEnSesion != -1):
        usuario = usuarios[usuarioEnSesion]
        status = 200




    for i in range(len(peliculas)):
        playlist = peliculas[i]

        if(playlist['nombre'] == nombrePelicula):
            # para saber la posicion de la pelicula a actualizar
            pelicula =  playlist
            pelicula['posicionArreglo'] = i
            status = 200




     return {'data':playlist, 'status': status}


'''  

















'''
def PostComentario(nuevoComentario, comentarios):
    comentarios.append(nuevoComentario)
    return {'data': comentarios, 'status': 200}


def AgregarComentarios(datos, comentarios):
    nombrePelicula = datos['nombrePelicula']
    
    status = 400
    if (nombrePelicula != ""):
        nuevocomentario = Comentario(datos['nombrePelicula'],datos['autor'], datos['mensaje'])
        comentarios.append(nuevocomentario.toDict())
        status = 200

        
    return {'data': comentarios, 'status': status}
'''

