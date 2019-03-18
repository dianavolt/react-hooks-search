import React from 'react'
import {mount} from 'enzyme'

import Container from "."

jest.mock('../../hooks', () => ({
    useDebounce: jest.fn(() => ({})),
    useSearch: jest.fn(() => ({articles: []})),
    useSearchForm: jest.fn(() => ({
        searchVal: 'testVal',
        onSearchChange: jest.fn()
    }))
}))

const render = (props, children) => mount(<Container {...props}>{children}</Container>)

const Children = () => <div>Test</div>

describe('Container component', () => {
    let test
    let props
    let children = ({searchVal, onSearchChange, articles}) => <Children searchVal={searchVal}
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

    describe('when passed custom props', () => {
        beforeEach(() => {
            test = render(props, children)
        })

        it('should return searchValue in Children component', () => {
            const { searchVal } = test.find('Children').props()

            expect(searchVal).toBe('testVal')
        })
    })
})