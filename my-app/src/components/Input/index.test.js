import React from 'react'
import { shallow } from 'enzyme'

import Input from '.'

const render = (props) => shallow(<Input {...props} />)

describe('Input component', () => {
    let test
    let props

    describe('without props', () => {
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
                placehoder: 'Enter search terms',
                name: 'search'
            }

            test = render(props)
        })

        it('should match snapshot', () => {
            expect(test).toMatchSnapshot()
        })
    })
})
