import React from 'react'
import { render } from 'react-testing-library'

import Input from '.'

describe('Input component', () => {
    let test
    let props

    it('should match snapshot', () => {
        test = render(<Input {...props}/>)
        expect(test).toMatchSnapshot()
    })
})
