import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { SearchContext } from "../../contexts/SearchContext";
import { MovieCard, MoviesListContainer } from "./style";

const apiConfig = import.meta.env.VITE_API_CONFIG
const searchURL = import.meta.env.VITE_SEARCH

interface ApiResponse {
    title: string,
    overview: string,
    backdrop_path: string,
    release_date: string,
    id: number
}

export function MoviesList(){

    const {searchParams} = useContext(SearchContext)

    const [movies, setMovies] = useState<ApiResponse[]>([])

    async function apiFetch() {
        try {
            const response = await axios.get(`${searchURL}?query=${searchParams.get('q')}&region=BR&${apiConfig}`)
            const data = response.data.results
            console.log(data)
            setMovies(data)
        } catch(error) {
            console.log(error)
        }
    }
    useEffect(() => {
        apiFetch()
    }, [searchParams])

    return (
        <MoviesListContainer>
        {movies.map((movie) => {
            return <MovieCard
                key={movie.id}

            >{movie.title}</MovieCard>
        })}
        </MoviesListContainer>
    )
}