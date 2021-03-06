import React from 'react'
import Container from '../../components/Container'
import Autocomplete from '../../components/Autocomplete'
import SearchItems from '../../components/SearchItem'
import { useSearch } from '../../hooks'

const Search = ({...props}) => {
    const search = props.location.search
    const params = new URLSearchParams(search)
    const query = params.get('query')

    const { articles, status } = useSearch(query, 50)

    return (
        <div>
            <Container>
                {({ articles, searchVal, onSearchChange }) => 
                <Autocomplete 
                    articles={articles}
                    searchVal={searchVal}
                    onSearchChange={onSearchChange}
                />
                }
            </Container>
            {!articles.length && status === 'SUCCESS'
                ? <h3>No items found for: {query}</h3>
                : articles.map(article => {
                    return <SearchItems {...article} key={article.id} />
                })
            }
        </div>
    )
}

export default Search