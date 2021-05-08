import { useState } from 'react'
import Header from '../components/Header'
import SearchField from '../components/SearchField'
import ResultContainer from '../components/ResultContainer'
import fetchSearchResults from '../services/SearchResults'

import styles from './Home.css'

const Home = () => {
    const [searchResult, setSearchResult] = useState()
    const [isFetching, setIsFetching] = useState(false)

    const handleSearch = async (text) => {
        setIsFetching(true)
        const data = await fetchSearchResults(text)
        if(data) {
            setSearchResult(data)
            setIsFetching(false)
        }
    }

    return (
        <div style={styles.root}>
            <Header headerTitle="Search Hacker News" />
            <div style={styles.searchField}>
                <SearchField 
                    placeholder="Type here to start searching" 
                    inputChangeCallback={handleSearch}
                />
                {isFetching && <div className="loader"></div>}
            </div>
            {searchResult &&<ResultContainer results={searchResult} />}
        </div>
    )
}

export default Home