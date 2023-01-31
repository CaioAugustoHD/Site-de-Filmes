import axios from "axios"
import { useEffect, useState } from "react"
import { Container, Div, HighlightMovieContainer, Img, Overview, Title } from "./style"

const apiConfig = import.meta.env.VITE_API_CONFIG
const apiURL = import.meta.env.VITE_API
const imgURL = import.meta.env.VITE_IMG

interface ApiResponse {
    title: string,
    overview: string,
    backdrop_path: string,
    release_date: string
}

export function HighlightMovie() {

    const [movie, setMovie] = useState({} as ApiResponse)
    const [index] = useState(Math.floor(Math.random() * (5 - 0 + 1) + 0))

    async function apiFetch() {
        try {
            const response = await axios.get(`${apiURL}popular?region=BR&${apiConfig}`)
            const data = response.data.results
            console.log(data[index])
            setMovie(data[index])
        } catch(error) {
            console.log(error)
        }
    }
    useEffect(() => {
        apiFetch()
    }, [])
    return (
        <HighlightMovieContainer>
            <Div>
                <Container>
                    <Title>{movie.title}</Title>
                    <Overview>{movie.overview}</Overview>
                </Container>
            </Div>

            
            <Img backdrop_path={movie.backdrop_path}/>
            
        </HighlightMovieContainer>
    )
}