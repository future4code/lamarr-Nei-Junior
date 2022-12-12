enum genero {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}


const movies: {nomeFilme: string, anoLançamento: string, genero:string, nota ?: number } = {
    nomeFilme: "Dune",
    anoLançamento: "01/01/2022",
    genero: "drama",
    nota: 10
}

function catchMovie (movies:any):void {
    console.log(movies)

}

catchMovie(movies)
