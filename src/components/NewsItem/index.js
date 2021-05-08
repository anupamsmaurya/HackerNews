import { useRef, useEffect } from 'react'
import {highlighter, parseTimestamp} from '../../Utilities/Parser'

import styles from './NewsItem.css'

const NewsItem = ({news, searchText}) => {
    const {title, url, author, num_comments, created_at, story_text} = news

    const titleRef = useRef();
    const bodyRef = useRef();

    useEffect(function () {
        if(title) {
            titleRef.current.innerHTML = highlighter(title, searchText)
        }
        if(story_text) {
            bodyRef.current.innerHTML = highlighter(story_text, searchText)
        }
    }, []);
    
    if(!news.title) return <></>
    return (
        <div style={styles.root}>
            <NewsHeader 
                title={title} 
                url={url} 
                titleRef={titleRef}
            />
            <NewsMeta 
                author={author} 
                num_comments={num_comments} 
                created_at={created_at} 
            />
            {story_text && <NewsBody story_text={story_text} bodyRef={bodyRef} />}
        </div>
    )
}

const NewsHeader = ({title, url, titleRef}) => {
    return (
        <div style={styles.title}>
            <h4 style={styles.titleHead}>
            {
                url ? 
                <a href={url} style={styles.titleLink} ref={titleRef}>{title}</a> :
                <span ref={titleRef}>{title}</span>
            }
            </h4>
            {url && <a style={styles.titleSideLink} href={url} target='_blank'>({url})</a>}
        </div>
    )
}

const NewsMeta = ({author, num_comments, created_at}) => {
    return (
        <div style={styles.metaContainer}>
            <span>Author: {author}</span> | 
            <span> {parseTimestamp(created_at)} ago</span> | 
            <span> {num_comments} comments</span>
        </div>
    )
}

const NewsBody = ({story_text, bodyRef}) => {
    return (
        <div ref={bodyRef} style={styles.newsBody}>{story_text}</div>
    )
}

/* const parseNews = (...args) => {
    let [title, body, highlightResult] = args;
    title = parseAndHighlight(title, highlightResult)
    body = parseAndHighlight(title, highlightResult)
    return [title, body]
}
 */
export default NewsItem