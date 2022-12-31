import React, {useState, useEffect} from 'react'

function FetchData() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        fetch('https://jsonplaceholder/typeicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            setLoading(false)
            setPost(data)
            setError('')
        })
        .catch( error => {
            setLoading(false)
            setPost({})
            setError('Something went wrong')
        })
    }, [])
  return (
    <div>
        {loading ? 'Loading' : post.title}
        {error ? error : null}
    </div>
  )
}

export default FetchData