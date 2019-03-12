import React from 'react'

const SearchItems = ({ id, label }) => {
    return (
        <div>
            <a href={id} target="_blank">
                {label}
            </a>
            <p>{id}</p>
        </div>
    )
}

export default SearchItems
