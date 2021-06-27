import React, { useContext } from 'react'
import MovieItem from "./MovieItem"
import { AppContext } from "./App.js"

function WatchList() {
    
    const appContext = useContext(AppContext);

   

    return (
        <div className="titleList">
            <div className="title">
                <h1>My Watch List</h1>
                <div className="titles-wrapper">
                    {
                        appContext.watchlist !== null ? appContext.watchlist.map((item, index) => (
                            <MovieItem 
                                item={ item } 
                                key={ index } 
                                watchlist={ appContext.watchlist }
                            />
                        )) : <></>
                    }
                </div>
            </div>
        </div>
    )
}

export default React.memo(WatchList)
