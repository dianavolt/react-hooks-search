import { renderHook, act } from '@testing-library/react-hooks'

import { useSearchForm } from '../hooks'

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
