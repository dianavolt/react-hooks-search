import React from 'react'
import { shallow } from 'enzyme'

import NotFound from '.'

const render = (props) => shallow(<NotFound {...props}/>)

describe('NotFound component', () => {
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
})
