import React from 'react'
import Container from '../../components/Container'
import Autocomplete from '../../components/Autocomplete'

import './styles.scss'
import logo from '../../assets/Wikipedia-logo.png'

const Home = () => {
    return (
        <div className='home-page-container'>
            <img alt='logo' src={logo} />
            <Container>
                {({ articles, searchVal, onSearchChange }) => 
                <Autocomplete 
                    articles={articles}
                    searchVal={searchVal}
                    onSearchChange={onSearchChange}
                />
                }
            </Container>
        </div>
    )
}

export default Home
