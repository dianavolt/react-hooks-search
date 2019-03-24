import React from 'react'
import ReactAutocomplete from 'react-autocomplete'
import PropTypes from 'prop-types'

import Input from '../Input'

import './styles.scss'

const Autocomplete = ({ articles, searchVal, onSearchChange }) => (
    <ReactAutocomplete
        items={articles}
        renderInput={Input}
        inputProps={{placeholder: 'Enter search term...'}}
        getItemValue={item => item.label}
        renderMenu={(children, value, style) => {
            return (articles && articles.length > 0)?
                (<div style={{...style}} className="input-suggestions">
                    {children}
                    <a href={`/search?query=${value}`} className='search-link'>
                        See all results
                    </a>
                </div>
                ) : <></>
        }}
        renderItem={(item, highlighted) =>
            <div
                key={item.id}
                style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
            >
                <a href={item.id} target="_blank">{item.label}</a>
            </div>
        }
        value={searchVal}
        onChange={onSearchChange}
    />
)

Autocomplete.propTypes = {
    articles: PropTypes.array,
    searchVal:PropTypes.string
}

export default Autocomplete
