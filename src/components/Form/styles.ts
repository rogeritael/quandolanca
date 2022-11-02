import styled, { keyframes } from "styled-components";

const arrowAnimation = keyframes`
    50% {
        transform: translateX(-10px);
    }
`;

export const Container = styled.form`

    padding: 1rem;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    

    h1, figure {
        margin: 0 auto;
    }

    input, button {
        height: 35px;
        border-radius: 3px;
        width: 300px;
        margin-bottom: 16px;
    }
    input {
        padding-left: 1rem;
        background-color: var(--gray-2);
        color: var(--gray-3);

        &:hover {
            filter: brightness(1.1);
        }
    }

    button {
        margin: .5rem 0 1rem 0;
        font-size: .8rem;
        background-color: #333;
        color: var(--gray-3);
        text-transform: uppercase;

        &:hover {
            filter: brightness(0.9);
        }
    }

    figure {
        width: 200px;
        height: 200px;
        position: relative;
        pointer-events: none;
    }

    p.description {
        margin-top: -16px;
        margin-bottom: 1.5rem;
        text-align: center;
        max-width: 300px;
    }

    label {
        p {
            font-size: .8rem;
            margin-bottom: .5rem;
            color: #fff;
            font-weight: bold;
        }
    }

    p:last-child {
        text-align: left;
        font-size: .9rem;

        a {
            text-decoration: underline;
            font-weight: bold;

            &:hover {
                color: #fff;
            }
        }
    }

    .voltar {
        display: flex;
        align-items: center;
        position: absolute;
        top: 1rem;
        left: 2rem;

        &:hover {
            p {
                text-decoration: underline;
            }
        }

        svg {
            animation: ${arrowAnimation} 1s infinite;
        }

        p, svg {
            font-size: 1rem;
        }

        p {
            margin-left: 5px;
        }
    }
`;