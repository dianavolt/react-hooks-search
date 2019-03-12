import {
    useEffect,
    useState,
    useRef,
    useCallback
} from 'react'
import axios from 'axios'


export const useSearch = (query, limit = 10) => {
    const [state, setState] = useState({
        articles: [],
        status: 'IDLE',
        error: ''
    })

    const cancelToken = useRef(null)

    useEffect(() => {
        if (query != null && query.length < 3) {
            return
        }

        // cancel previous request if user still inputing a search
        if (cancelToken.current) {
            cancelToken.current.cancel()
        }

        cancelToken.current = axios.CancelToken.source()

        // adding origin=* to overcome the CORS error
        axios.get(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${query}&limit=${limit}`, {
            cancelToken: cancelToken.current.token
        })
            .then(function (response) {
                const parsedResponse = []

                for (let i in response.data[1]) {
                    parsedResponse.push({
                        id: response.data[3][i],
                        label: response.data[1][i]
                    })
                }

                setState({
                    articles: parsedResponse,
                    status: 'SUCCESS',
                    error: ''
                })
            })
            .catch(function (e) {
                if(axios.isCancel(e)) {
                    return
                }

                setState({
                    articles: [],
                    status: 'ERROR',
                    error: e
                })
            })
    }, [query])

    return state
}

export const useDebounce = (val, delay = 500) => {
    const [debounceVal, setDebounceVal] = useState(val)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceVal(val)
        }, delay)

        return () => {
            clearTimeout(timer)
        }
    }, [val, delay])

    return debounceVal
}

export const useSearchForm = () => {
    const [searchVal, setSearchVal] = useState('')
    
    const onSearchChange = useCallback((e) => {
        setSearchVal(e.target.value)},
        []
    )

    return {
        searchVal,
        onSearchChange
    }
}