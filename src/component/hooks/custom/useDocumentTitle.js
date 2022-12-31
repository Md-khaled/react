import {useEffect} from 'react'

function useDocumentTitle(count) {
    useEffect(() => {
        document.title = `Countt - ${count}`
    }, [count])
}

export default useDocumentTitle