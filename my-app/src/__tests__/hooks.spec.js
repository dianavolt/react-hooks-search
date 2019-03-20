import { renderHook, act } from '@testing-library/react-hooks'

import {
    useSearchForm,
    useDebounce
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

        const {result, rerender } =renderHook(
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
