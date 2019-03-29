import React from 'react'
import { shallow } from 'enzyme'

import SearchItem from '.'

const render = (props) => shallow(<SearchItem {...props}/>)

describe('SearchItem component', () => {
    let test
    let props

    describe('withuot props', () => {
        beforeEach(() => {
            test = render(props)
        })
        
        it('should match snapshot', () => {
            expect(test).toMatchSnapshot()
        })
    })

    describe('with props', () => {
        beforeEach(() => {
            props = {
                id: 'testID123',
                label: 'searchTerm'
            }

            test = render(props)
        })

        it('should match snapshot', () => {
            expect(test).toMatchSnapshot()
        })
    })
})
