import React, { useState, useEffect, useCallback, createContext } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from "./Header"
import Home from "./Home"
import MovieDetail from "./MovieDetail"
import Search from "./Search"
import WatchList from "./WatchList"

export const AppContext = createContext()

function App() {

	
	const [watchlist, setWatchlist] = useState([])

	useEffect(() => {
		const jsonWatchlist = JSON.parse(window.localStorage.getItem('watchlist'))
		if (jsonWatchlist !== undefined)
		setWatchlist(jsonWatchlist)
	}, [])

	const toggleWatchAction = useCallback((item) => {
		if (watchlist !== null) {
			const previousList = watchlist
			const eventItem = previousList.find(previousItem => previousItem.id === item.id)

			let newWatchList
			if (eventItem) {
				newWatchList = previousList.filter(previousItem => previousItem.id !== item.id)
			} else {
				newWatchList = [...previousList, item]
			}
		
			localStorage.setItem('watchlist', JSON.stringify(newWatchList))
			setWatchlist(newWatchList)
		} else {
			let newWatchList
			newWatchList = [item]
			localStorage.setItem('watchlist', JSON.stringify(newWatchList))
			setWatchlist(newWatchList)
		}
		
	}, [watchlist])
	
	const contextValues = {
		watchlist,
		toggleWatchAction
	}

	return (
		<AppContext.Provider value={ contextValues }>
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={ Home } />
					<Route path="/details/:id" component={ MovieDetail } />
					<Route path="/search" component={ Search } />
					<Route path="/my-watch-list" component={ WatchList } />
				</Switch>
			</div>
		</AppContext.Provider>
	);
}

export default App
