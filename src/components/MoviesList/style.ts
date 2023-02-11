import styled from "styled-components";
import noImage from "../../assets/no-image.png"
const imgURL = import.meta.env.VITE_IMG
const PosterSize = import.meta.env.VITE_POSTER_SIZE

export const MoviesListContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(5, 15%);
    grid-gap: 2em;
    justify-content: center;
    padding: 2em 0;

    @media(max-width: 1020px){
        grid-template-columns: repeat(4, 20%);
    }
`;

interface MovieCardProps {
    poster_path: string
}

export const MovieCard = styled.div<MovieCardProps>`
    background-image: ${(props) => props.poster_path
        ? `url(${imgURL}${PosterSize}${props.poster_path})`
        : `url(${noImage})`
    };
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 185px;
    height: 264px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        text-align: center;
        max-width: 91%;
        font-weight: bold;
        color: ${({theme}) => theme.colors.body}
    }
`;

export const ErrorMsg = styled.span`
    color: ${({theme}) => theme.colors.text};
    display: block;
    text-align: center;
    margin: 4em 0;
    font-size: 1.2em;
`;