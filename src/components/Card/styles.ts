import styled from "styled-components";

interface CardProps {
    type?: number
}

export const Container = styled.article<CardProps>`
    margin-bottom: 1rem;

    .over {
        display: none;
    }


    figure.cover {
        width: 12rem;
        height: 16rem;
        border-radius: 3px;
        overflow: hidden;

        background-color: var(--gray-2);
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

    &.type2 {
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
                    display: flex;
                }
            }
        }

        .release-info {
            height: 8rem;
            max-width: 8rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            row-gap: 10px;
        }
    }
`;