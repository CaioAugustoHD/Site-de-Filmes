import axios from "axios"
import { useContext, useState, useEffect } from "react"
import { SearchContext } from "../../contexts/SearchContext"

const apiConfig = import.meta.env.VITE_API_CONFIG
const apiURL = import.meta.env.VITE_API

interface ApiResponse {
    title: string,
    overview: string,
    poster_path: string,
    id: number
}

export function MovieDetails() {

    const { searchParams } = useContext(SearchContext)

    const [movie, setMovie] = useState({} as ApiResponse)

    async function apiFetch() {
        console.log(searchParams.get('id'))
        console.log(`${apiURL}${searchParams.get('id')}?${apiConfig}`)

        try {
            const response = await axios.get(`${apiURL}${searchParams.get('id')}?${apiConfig}`)
            const data = response.data
            console.log(data)
            setMovie(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        apiFetch()
    }, [])

    return (
        <>
            <p>{movie.title}</p>
            <p>{movie.id}</p>
        </>
    )
}