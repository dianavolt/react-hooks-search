import {
    useSearch,
    useDebounce,
    useSearchForm
} from '../../hooks'

const Container = ({ children }) => {
    const { searchVal, onSearchChange} = useSearchForm()
    const { articles } = useSearch(useDebounce(searchVal))

    // react props pattern
    return children({searchVal, onSearchChange, articles})
}

export default Container
