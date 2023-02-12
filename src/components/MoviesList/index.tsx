import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { SearchContext } from "../../contexts/SearchContext";
import { ErrorMsg, MovieCard, MoviesListContainer } from "./style";

const apiConfig = import.meta.env.VITE_API_CONFIG
const searchURL = import.meta.env.VITE_SEARCH

interface ApiResponse {
    title: string,
    overview: string,
    poster_path: string,
    release_date: string,
    id: number
}

export function MoviesList() {

    const { searchParams } = useContext(SearchContext)

    const [movies, setMovies] = useState<ApiResponse[]>([])

    async function apiFetch() {
        try {
            const response = await axios.get(`${searchURL}?query=${searchParams.get('q')}&region=BR&${apiConfig}`)
            const data = response.data.results
            console.log(data)
            setMovies(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        apiFetch()
    }, [searchParams])

    return (
        <>
            {movies.length > 0
                ? <MoviesListContainer>
                    {movies.map((movie) => {
                        return <Link
                            key={movie.id}
                            to={`/movie?id=${movie.id}`}
                        >
                            <MovieCard
                                poster_path={movie.poster_path}
                            >
                                <span>{!movie.poster_path ? movie.title : null}</span>
                            </MovieCard>
                        </Link>
                    })}
                </MoviesListContainer>
                : <ErrorMsg>Nenhum resultado foi encontrado...</ErrorMsg>
            }
        </>
    )
}