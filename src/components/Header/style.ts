import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: relative; 
    background-color: ${({theme}) => theme.colors.body};
    color: ${({theme}) => theme.colors.text};
    height: 65px;
    padding: 0 4%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
        cursor: pointer;
        :hover {
            color: ${({theme}) => theme.colors.textHover};
        }
    }
`;

export const Logo = styled.img`
    width: 150px;
    margin-top: 5px;
    cursor: pointer;
`;

export const Menu = styled.nav`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ul {
        display: flex;
        gap: 4em;
    }

    li {
        cursor: pointer;        
        :hover {
            color: ${({theme}) => theme.colors.textHover};
        }
    }
`;