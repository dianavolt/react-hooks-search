import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import App from '../App'

// keyLength adds consistency to test snapshots
const render = (initialEntries) => <MemoryRouter keyLength={0} initialEntries={initialEntries}><App/></MemoryRouter>

describe('App component', () => {
    let test

    describe('when HOME is rendered', () => {
        beforeEach(() => {
            test = render(['/'])
        })

        it('should match the HOME snapshot', () => {
            expect(test).toMatchSnapshot()
        })
    })

    describe('when Not Found page is rendered', () => {
        beforeEach(() => {
            test = render(['/giberish'])
        })

        it('should match the Not Found snapshot', () => {
            expect(test).toMatchSnapshot()
        })
    })
})