import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import MovieItem from "./MovieItem"
import { AppContext } from "./App.js"

import { getSearchResult } from './Api'

const Search = () => {

    const [searchResults, setSearchResults] = useState([])

    const location = useLocation()
    const query = new URLSearchParams(location.search).get("query")

    useEffect(async () => {
        const searchResult = await getSearchResult(query)
        setSearchResults(searchResult)
    }, [query])

    const appContext = useContext(AppContext)

    if (searchResults === undefined) {
        return <></>
    }

    return (
        <div className="titleList">
            <div className="title">
                <h1>Results</h1>
                <div className="titles-wrapper">
                    {
                        searchResults.length > 0 ? 
                            searchResults.map((item, index) => (
                                <MovieItem item={ item } key={ index } watchlist={ appContext.watchlist }/>
                            ))
                            : <></>
                    }
                </div>
            </div>
        </div>
    );
}

export default React.memo(Search)
