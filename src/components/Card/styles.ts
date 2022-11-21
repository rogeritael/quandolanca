import styled, { keyframes } from "styled-components";

interface CardProps {
    type?: number,
    mainCard?: boolean,
    isAuthenticated: boolean
}

const deleteAnimation = keyframes`  
  from { opacity: 1; width: 100%;}
  to { opacity: 0; width: 0;}
`;

export const Container = styled.article<CardProps>`
    margin-bottom: 1rem;
    position: relative;

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
        display: none;
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
            background-color: rgba(0, 0, 0, 0.2);
            position: absolute;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;

            svg {
                color: #fff;
                font-size: 3rem;
                filter: opacity(0.2);
            }
        }

        &:hover {
            .over {
                display: ${props => props.mainCard || !props.isAuthenticated ? 'none' : 'flex'}
                /* display: none; */
            }
        }
    }

    .release-info {
        position: relative;
        padding: 0.25rem 0;
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

    .delete-animation {
        animation: ${deleteAnimation} 300ms forwards;
        background-color: red;
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