import React from 'react'
import Container from '../../components/Container'
import Autocomplete from '../../components/Autocomplete'

import './styles.scss'

const logoSrc = 'https://upload.wikimedia.org/wikipedia/commons/7/77/Wikipedia_svg_logo.svg'

const Home = () => {
    return (
        <div className='home-page-container'>
            <img alt='logo' src={logoSrc} />
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
