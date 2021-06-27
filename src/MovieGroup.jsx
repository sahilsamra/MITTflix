import React from 'react'
import MovieItem from "./MovieItem"

function MovieGroup(props) {

    const { MovieListCell, watchlist, toggleWatchAction } = props
    
    return (
        <div key={ MovieListCell.name } className="titleList">
            <div className="title">
                <h1>{ MovieListCell.name }</h1>
                <div className="titles-wrapper">
                {
                    MovieListCell.data.map(item => (
                        <MovieItem
                            item={ item } 
                            key={ item.id + item.name }
                            watchlist={ watchlist }
                        />
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default React.memo(MovieGroup)
