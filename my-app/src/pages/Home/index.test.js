import React from 'react'
import { mount } from 'enzyme'

import Home from '.'
import Autocomplete from '../../components/Autocomplete'

const render = (props, children) => mount(<Home {...props} >{children}</Home>)

describe('Home component', () => {
    let test
    let props    
    let children = ({searchVal, onSearchChange, articles}) => <Autocomplete searchVal={searchVal}
                                                                            onSearchChange={onSearchChange}
                                                                            articles={articles}/>

    describe('without props', () => {
        beforeEach(() => {
            test = render(props, children)
        })

        it('should match snapshot', () => {
            expect(test).toMatchSnapshot()
        })
    })
})
