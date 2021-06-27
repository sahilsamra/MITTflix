import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import { AppContext } from "./App.js"

import NotImage from "./image-not-available.jpg"

function MovieItem(props) {

    const { item, watchlist } = props
    const [toggledValue, setToggledValue] = useState(false)

    const appContext = useContext(AppContext);

    useEffect(() => {
        if (appContext.watchlist !== null) {
            if(appContext.watchlist.find(watchListCell => watchListCell.id === item.id)) {
                setToggledValue(true)
            } else {
                setToggledValue(false)
            }
        }
    }, [watchlist])
  
    
    
    if (item === undefined) {
        return (<></>)
    }

    return (
        <div className="movie">
            <Link to={`/details/${ item.id }`}>
                <img src={ item.poster_path === null ? NotImage : `https://image.tmdb.org/t/p/w500${ item.poster_path }` } alt="Movie" />
                <div className="overlay">
                    <div className="title">{ item.name }</div>
                    <div className="rating">{ item.vote_average }/10</div>
                    <div className="plot">{ item.overview }</div>
                </div>
            </Link>
            <div data-toggled={ toggledValue } className="listToggle" onClick={() => appContext.toggleWatchAction(item)}>
                <div>
                    <i className="fa fa-fw fa-plus"></i>
                    <i className="fa fa-fw fa-check"></i>
                </div>
            </div>
        </div>
    )
}

export default React.memo(MovieItem)
