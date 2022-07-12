import axios from 'axios';
import { useEffect, useState } from 'react';

export const api = (url: string) => {

    const [data, setData] = useState<T | undefined>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)

        axios.get(url)
        .then((response: any) => {
            setData(response.data)
        })
        .catch((err: any) => {
            setError(err)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [url])

    return { data, loading, error }
}




