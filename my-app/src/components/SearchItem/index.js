import React from 'react'

import './styles.scss'

const SearchItems = ({ id, label }) => {
    return (
        <div className="search-item">
            <a href={id} target="_blank">
                {label}
            </a>
            <p>{id}</p>
        </div>
    )
}

export default SearchItems
