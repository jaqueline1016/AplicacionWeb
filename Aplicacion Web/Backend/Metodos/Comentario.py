from Clases.Comentario import Comentario
from Clases.Pelicula import Pelicula


def PostComentario(nuevoComentario, comentarios):
    comentarios.append(nuevoComentario)
    return {'data': comentarios, 'status': 200}


def AgregarComentarios(datos, comentarios):
    nombrePelicula = datos['nombrePelicula']
    #print(datos['autor'])
    #print(datos['mensaje'])
    status = 400
    if (nombrePelicula != ""):
        nuevocomentario = Comentario(datos['nombrePelicula'],datos['autor'], datos['mensaje'])
        comentarios.append(nuevocomentario.toDict())
        status = 200
  
    return {'data': comentarios, 'status': status}
