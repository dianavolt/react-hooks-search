import React from 'react'
import PropTypes from 'prop-types'

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

SearchItems.propTypes = {
    id: PropTypes.string.isRequired,
    label:PropTypes.string.isRequired
}

export default SearchItems
