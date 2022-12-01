import styled, { keyframes, css } from "styled-components";

interface CardProps {
    type?: number,
    mainCard?: boolean,
    isAuthenticated: boolean,
    deleteAnimation: any
}

const deleteAnimation = keyframes`  
  from { opacity: 1;}
  to { opacity: 0;}
`;

const entranceAnimation = keyframes`  
  from { opacity: 0;  transform: translateX(-50px);}
  to { opacity: 1; transform: translateX(0);}
`;

const addAnimation = keyframes`  
from { opacity: 0;  transform: translateY(30px)  scale(0.8);}
to { opacity: 1; transform: translateY(0)  scale(1);}
`;

export const Container = styled.article<CardProps>`
    margin-bottom: 1rem;
    position: relative;
    transition: 500ms ease-in;
    animation: ${entranceAnimation} 800ms forwards;

    ${props => props.deleteAnimation === true && `
        filter: opacity(0);
    `}

    .over {
        display: none;
    }

    .released-marker {
        position: absolute;
        background-color: goldenrod;
        color: #fff;
        font-size: .8rem;
        padding: 0.15rem 1rem;
        font-weight: bold;
        border-radius: 3px 0 0 0;
        top: 0;
    }

    figure.cover {
        width: 12rem;
        height: 16rem;
        border-radius: 3px;
        overflow: hidden;
        cursor: pointer;
        position: relative;

        background-color: var(--gray-2);

        img {
            pointer-events: none;
        }

        .over {
            background-color: rgba(0, 0, 0, 0.7);
            position: absolute;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
            z-index: 1;

            p {
                color: #fff;
                font-size: ${props => props.type === 2 ? '0.9rem' : '1.25rem'};
                animation: ${addAnimation} 500ms forwards;
            }
        }

        &:hover {
            .over {
                display: ${props => props.mainCard || !props.isAuthenticated ? 'none' : 'flex'}
            }
        }
    }

    .release-info {
        position: relative;
        padding: 0.25rem 0;
        width: 12rem;
        span {
            font-size: .6rem;
        }

        p.title {
            color: #fff;
            margin-top: 0.25rem;

            svg {
                margin-bottom: -2px;
                color: var(--gray-2);
            }
        }

        .remove-button {
            margin-top: 10px;
            border-radius: 3px;
            font-size: 0.8rem;
            padding: 0.5rem;
            border: 1px solid var(--gray-2);
            background-color: transparent;
            color: var(--gray-2);
            position: relative;
            transition: 500ms;
            margin-left: 1.5px;

            svg {
                margin-left: 3px;
                position: relative;
            }

            &:hover {
                color: #fff;
                transform: scale(1.05);
                border-color: #fff;
                background-color: #fff;
                color: var(--gray-2);
            }
        }
    }


    ${props => props.type === 2 && `
        display: flex;

        figure.cover {
            width: 6rem;
            height: 8rem;
            border-radius: 3px;
            overflow: hidden;
            position: relative;
            margin-right: 0.5rem;
            background-color: var(--gray-2);
            cursor: pointer;
        }

        .release-info {
            height: 8rem;
            max-width: 8rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            row-gap: 10px;
        }
    `}
    
`;