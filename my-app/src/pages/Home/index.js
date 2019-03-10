import React from 'react'
import Container from '../../components/Container'
import Autocomplete from '../../components/Autocomplete'

const Home = () => {
    return (
        <Container>
            {({ articles, searchVal, onSearchChange }) => 
            <Autocomplete 
                articles={articles}
                searchVal={searchVal}
                onSearchChange={onSearchChange}
            />
            }
        </Container>
    )
}

export default Home