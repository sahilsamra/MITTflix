import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from "./App.js"
import { getDetail } from "./Api.js"

function MovieDetail() {

    const [itemDetail, setItemDetail] = useState({})

    const { id } = useParams();

    useEffect(async () => {
        const itemDetail = await getDetail(id)
        setItemDetail(itemDetail)
    }, [])

    const appContext = useContext(AppContext);

    return (
        <div className="show-details">
            <img src={ (itemDetail.backdrop_path !== null || itemDetail.backdrop_path !== undefined) ? `https://image.tmdb.org/t/p/original${ itemDetail.backdrop_path }` : ""} alt="" />
            <div className="show-details-inner">
                <h1>{ itemDetail.name }</h1>
                <div className="description">{ itemDetail.overview }</div>
                {
                    appContext.watchlist !== null ?( !appContext.watchlist.find(item => item.id == id) ?
                    <button className="add-to-watchlist" onClick={ () => appContext.toggleWatchAction(itemDetail) }>+ Add to watch list</button>
                    :
                    <button className="remove-to-watchlist" onClick={ () => appContext.toggleWatchAction(itemDetail) }>- Remove from watch list</button>)
                    : (<button className="remove-to-watchlist" onClick={ () => appContext.toggleWatchAction(itemDetail) }>- Remove from watch list</button>)
                }
            </div>
        </div>
    )
}

export default React.memo(MovieDetail)
