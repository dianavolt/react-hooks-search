import React from 'react'
import { mount, shallow } from 'enzyme'

import Search from '.'
import Autocomplete from '../../components/Autocomplete'
import SearchItems from '../../components/SearchItem'

const render = (props, children) => mount(<Search {...props}>{children}</Search>)

describe('Search component', () => {
    let test
    let props
    let children = ({searchVal, onSearchChange, articles}) => <Autocomplete searchVal={searchVal}
            onSearchChange={onSearchChange}
            articles={articles}/>

    describe('with props', () => {
        beforeEach(() => {
            props = {
                location: {
                    search: 'test search'
                }
            }
            test = render(props, children)
        })

        it('should match snapshot', () => {
            expect(test).toMatchSnapshot()
        })
    })

    describe('when SearchItem is called', () => {
        const articles = [
            {
                id: '3475987',
                label: 'FIELD1'
            }
        ]

        it('should match snapshot', () => {
            expect(articles.map(article => shallow(<SearchItems {...props} key={article.id}/>))).toMatchSnapshot()
        })
        
        it('should render article id', () => {
            expect(articles.map(article => article.id)).toEqual(['3475987'])
        })
    })
})
