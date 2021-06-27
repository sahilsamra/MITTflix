import React, { useEffect, useState, useContext } from 'react'
import MovieGroup from "./MovieGroup"
import { AppContext } from "./App.js"

import { getAllMovies } from "./Api.js"

function Home() {

    const [movieList, setMovieList] = useState([])

    useEffect( async () => {
        const allMovies = await getAllMovies();
        
        setMovieList(allMovies)
	}, [])

    const appContext = useContext(AppContext);

    return (
        <>
            {
                movieList.map((MovieListCell, index) => (
                    <MovieGroup 
                        key={ index } 
                        MovieListCell={ MovieListCell }
                        watchlist={ appContext.watchlist }
                    />
                ))
            }
        </>
    )
}

export default React.memo(Home)
