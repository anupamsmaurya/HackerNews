import NewsItem from '../NewsItem'

const ResultContainer = ({results}) => {
    return (
        <div>
            {
                results && results.hits.map(news => <NewsItem news={news} searchText={results.query} key={news.objectID} />)
            }
        </div>
    )
}

export default ResultContainer