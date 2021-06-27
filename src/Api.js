import { API_KEY, providers } from "./variable.js"

const itemPromise = async (provider) => {
    return new Promise(async resolve => {
        const url = `https://api.themoviedb.org/3/discover/tv?&sort_by=popularity.desc&with_watch_providers=${ provider.id }&watch_region=CA&api_key=${ API_KEY }`
        const response = await fetch(url)
        const data = await response.json()
        resolve({ name: provider.name, data: data.results })
    })
} 

export const getAllMovies = async () => {

    const shows = await Promise.all([itemPromise(providers[0]), itemPromise(providers[1]), itemPromise(providers[2]), itemPromise(providers[3])])
        .then(result => { return result })

    return shows
}

export const getSearchResult = async (query) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/tv?query=${ query }&watch_region=CA&api_key=${ API_KEY }`)
    const shows = await response.json()
    return shows.results
};

export const getDetail = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${ id }?api_key=${ API_KEY }`)
    const results = await response.json()
    return results
}
