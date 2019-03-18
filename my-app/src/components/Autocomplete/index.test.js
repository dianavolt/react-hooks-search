import React from 'react'
import { shallow } from 'enzyme'

import Autocomplete from '.'

const render = (props) => shallow(<Autocomplete {...props} />)

describe('Autocomplete component', () => {
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

    describe('when passing in articles', () => {
        beforeEach(() => {
            props = {
                articles: [1],
                searchVal: 'Search value',
                onSearchChange: jest.fn()
            }
            test = render(props)
        })

        it('should match renderMenu() snapshot', () => {
            // containst all component props
            const props = test.props()
            expect(props.renderMenu()).toMatchSnapshot()
        })
    })

    describe('when NOT passing in articles', () => {
        beforeEach(() => {
            props = {
                articles: null,
                searchVal: 'Search value',
                onSearchChange: jest.fn()
            }
            test = render(props)
        })

        it('should match renderMenu() snapshot', () => {
            const props = test.props()
            expect(props.renderMenu()).toMatchSnapshot()
        })
    })

    describe('when renderItem prop is called', () => {
        beforeEach(() => {
            test = render(props)
        })

        describe('when item is highlighted', () => {
            it('should match renderItem snapshot', () => {
                const { renderItem } = test.props()
                const item = {
                    id: 1,
                    label: 'test'
                }

                expect(renderItem(item, true)).toMatchSnapshot()
            })
        })

        
        describe('when item is NOT highlighted', () => {
            it('should match renderItem snapshot', () => {
                const { renderItem } = test.props()
                const item = {
                    id: 1,
                    label: 'test'
                }

                expect(renderItem(item, false)).toMatchSnapshot()
            })
        })

        describe('when  getItemValue is called', () => {
            it('should return label', () => {
                const { getItemValue } = test.props()
                expect(getItemValue({label: 'test'})).toBe('test')
            })
        })
    })
})
