import axios from 'axios'
import { useEffect, useState } from 'react'
import { IPlant } from '../Interfaces'

export const api = (url: string) => {

    const [data, setData] = useState<IPlant[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)

        axios.get(url)
        .then((response) => {
            setData(response.data)
        })

        .catch((err) => {
            setError(err)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [url])

    return { data, loading, error }
}




