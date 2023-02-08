import styled from "styled-components";

const sizeButton = 33

export const InputContainer = styled.div`
    position: relative;

  .icon {
        position: absolute;
        width: ${sizeButton}px;
        height: ${sizeButton}px;
        top: 0;
        left: 0;
        padding: 8px;
        pointer-events: none;
    }

    svg {
        width: 100%;
        height: 100%;
        color: ${({theme}) => theme.colors.body};
    }
`;

export const Input = styled.input`
    padding-left: ${sizeButton}px;
    height: ${sizeButton}px;
    font-size: 1em;
    border: none;
    color: ${({theme}) => theme.colors.body};
    outline: none;
    width: ${sizeButton}px;
    transition: all ease 0.3s;
    background-color: ${({theme}) => theme.colors.text};
    box-shadow: 1.5px 1.5px 3px #0e0e0e, -1.5px -1.5px 3px rgb(95 94 94 / 25%), inset 0px 0px 0px #0e0e0e, inset 0px -0px 0px #5f5e5e;
    border-radius: 50px;
    cursor: pointer;
    :focus,
    :not(:invalid) {
        width: 400px;
        cursor: text;
        /* box-shadow: 0px 0px 0px #0e0e0e, 0px 0px 0px rgb(95 94 94 / 25%), inset 1.5px 1.5px 3px #0e0e0e, inset -1.5px -1.5px 3px #5f5e5e; */
    }
    :focus + .icon,
    :not(:invalid) + .icon {
        pointer-events: all;
        cursor: pointer;
    }    
`;