import React from 'react'
import Container from './components/Container'
import Autocomplete from './components/Autocomplete'


const App = () => (
    <Container>
        {({searchVal, onSearchChange, articles}) => 
            <Autocomplete
                searchVal={searchVal}
                onSearchChange={onSearchChange}
                articles={articles}
            />
        }
    </Container>
)

export default App
