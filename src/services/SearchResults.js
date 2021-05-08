import {SEARCH_URL} from '../Utilities/Constants'

const fetchSearchResults = async(text) => {
    const response =  await fetch(`${SEARCH_URL}?query=${text}&hitsPerPage=10`)
    return response ? response.json() : null
}

export default fetchSearchResults
