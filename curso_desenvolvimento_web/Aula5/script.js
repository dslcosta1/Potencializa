function adicionarFilme(){
    var campoFilmeFavorito = document.querySelector('#filme')
    var filmeFavorito = campoFilmeFavorito.value
    listarFilmesNaTela(filmeFavorito)
    campoFilmeFavorito.value = ""
    return filmeFavorito
    
}

function listarFilmesNaTela(filme){
    var listaFilmes = document.querySelector('#listaFilmes')
    var elementoFilme = filme
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
    return
}


