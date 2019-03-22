import { renderHook, act } from '@testing-library/react-hooks'
import moxios from 'moxios'

import {
    useSearchForm,
    useDebounce,
    useSearch
} from '../hooks'

jest.useFakeTimers()

describe('useSearchForm hook', () => {
    let event1
    let event2

    beforeEach(() => {
        event1 = {
            target: {
                value: 'input1'
            }
        }

        event2 = {
            target: {
                value: 'input2'
            }
        }
    })

    it('should update search value', () => {
        const { result } = renderHook(() => useSearchForm())

        expect(result.current.searchVal).toBe('')

        act(() => result.current.onSearchChange(event1))

        expect(result.current.searchVal).toBe('input1')

        act(() => result.current.onSearchChange(event2))

        expect(result.current.searchVal).toBe('input2')
    })
})

describe('useDebounce hook', () => {
    it('it should return the same value after long delay', () => {
        const expectedResults = 'text'
        const { result } = renderHook(() => useDebounce(expectedResults, 500))

        expect(result.current).toBe(expectedResults)

        jest.advanceTimersByTime(520)

        expect(result.current).toBe(expectedResults)
    })

    it('should return the same value before timer is reached', () => {
        const val1 = 'input1'
        const val2 = 'input2'

        const {result, rerender } = renderHook(
            ({ val, delay }) => useDebounce(val, delay),
            { initialProps: { val: val1, delay: 500 }}
        )

        expect(result.current).toBe(val1)
        jest.advanceTimersByTime(490)

        rerender({ val: val2 })
        expect(result.current).toBe(val1)

        jest.runAllTimers() // fast forward to all timer execution
        expect(result.current).toBe(val2)
    })
})

describe('useSearch hook', () => {
    // for mocking API calls
    beforeEach(() => {
        moxios.install()
    })

    afterEach(() => {
        moxios.uninstall()
    })

    it('should return init data: articles are empty', () => {
        const { result } = renderHook(() => useSearch())

        expect(result.current.articles).toEqual([])
    })

    it('should return init data: status is IDLE', () => {
        const { result } = renderHook(() => useSearch())

        expect(result.current.status).toBe('IDLE')
    })

    it('should have PENDING status when starting a call', () => {
        const { result } = renderHook(() => useSearch('google'))

        expect(result.current.status).toBe('PENDING')
    })

    it('should have SUCCESS status when executing a call', async () => {
        moxios.stubRequest(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=google&limit=10`, {
            status: 200,
            responseText: ["google ",["Google"],[""],["link"]]
        })
        
        const { result, waitForNextUpdate } = renderHook(() => useSearch('google'))

        await waitForNextUpdate()

        expect(result.current.status).toBe('SUCCESS')
    })

    it('should return articles when executing a call', async () => {
        moxios.stubRequest(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=google&limit=10`, {
            status: 200,
            responseText: ["google ",["Google"],[""],["link"]]
        })
        
        const { result, waitForNextUpdate } = renderHook(() => useSearch('google'))

        await waitForNextUpdate()

        expect(result.current.articles).toEqual( [{ id: 'link', label: 'Google' }]);
    })

    it('should return ERROR status when request fails', async () => {
        moxios.stubRequest(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=google&limit=10`, {
            status: 500,
            responseText: ["google ",["Google"],[""],["link"]]
        })
        
        const { result, waitForNextUpdate } = renderHook(() => useSearch('google'))

        await waitForNextUpdate()

        expect(result.current.status).toBe('ERROR')
    })
})
