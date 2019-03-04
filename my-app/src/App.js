import React, { useState } from 'react'
import ReactAutocomplete from 'react-autocomplete'
import {
    useSearch,
    useDebounce,
    useSearchForm
} from './hooks'

import Input from './components/Input'

function App() {
    const { searchVal, onSearchChange} = useSearchForm()
    const { articles } = useSearch(useDebounce(searchVal))

    return (
        <ReactAutocomplete
            items={articles}
            renderInput={Input}
            inputProps={{placeholder: 'Enter search term...'}}
            getItemValue={item => item.label}
            renderMenu={(children, value, style) => {
                return (articles && articles.length > 0)?
                    (<div style={{...style}} className="input-suggestions">
                        {children}
                        
                        <a href={`/search/query=${value}`} className='search-link'>
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
                    {item.label}
                </div>
            }
            value={searchVal}
            onChange={onSearchChange}
        />
    )
}

export default App