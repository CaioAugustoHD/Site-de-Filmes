import styled from "styled-components";
const imgURL = import.meta.env.VITE_IMG
const bannerSize = import.meta.env.VITE_BANNER_SIZE

export const HighlightMovieContainer = styled.section`
    border: 1px solid black;
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: end;
    position: relative;
`;

export const Div = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    background-image: linear-gradient(to right, 
        ${({theme}) => theme.colors.body} 42%,
        rgba(59, 3, 3, .9),
        rgba(59, 3, 3, .8),
        rgba(59, 3, 3, .7),
        rgba(59, 3, 3, .6),
        rgba(59, 3, 3, .5),
        rgba(59, 3, 3, .4),
        rgba(59, 3, 3, .3),
        rgba(59, 3, 3, .2),
        rgba(59, 3, 3, .1),
        rgba(59, 3, 3, .05),
        transparent);
    position: absolute;
    left: 0;
`;

interface ImgProps {
    backdrop_path: string
}

export const Img = styled.div<ImgProps>`
    background-image: url(${imgURL}${bannerSize}${(props: ImgProps) => props.backdrop_path});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
    height: 100%;
    background-color: aqua;
    width: 80%;
`;

export const Container = styled.div`
    width: 60%;
    height: 100%;
    margin-left: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.h2`
    text-align: center;
    color: ${({theme}) => theme.colors.text};
    margin-bottom: 1em;
    font-size: 1.6em;
`;

export const Overview = styled.p`
    text-align: center;
    margin: 0 auto;
    color: ${({theme}) => theme.colors.text};
`;