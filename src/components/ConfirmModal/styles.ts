import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    span.background {
        position: absolute;
        background-color: #000;
        opacity: 0.8;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1;
    }

    .modal-box {
        width: 35rem;
        padding: 3rem 2rem 2rem 2rem;
        border-radius: 3px;
        background-color: var(--main-gray);
        position: relative;
        z-index: 2;

        svg {
            margin-left: auto;
            cursor: pointer;
            font-size: 1.5rem;
            position: absolute;
            right: 2rem;
            top: 1rem;
            right: 1rem;
            transition: 300ms;

            &:hover {
                transform: scale(1.1);
            }
        }

        h2, p {
            margin-bottom: .5rem;
        }

        h2 {
            color: #fff;
        }

        .buttons-container {
            display: flex;
            justify-content: flex-end;
            margin-top: 1.5rem;

            button {
                padding: 0.6rem 1.3rem;
                border-radius: 5px;
                font-size: 1rem;
                transition: 500ms;

                &:hover {
                    transform: scale(1.05);
                }
            }

            .btn-reject {
                background-color: transparent;
                border: 1px solid #fff;
                color: #fff;
                margin-right: 0.5rem;
            }

            .btn-accept {
                background-color: #fff;
                font-weight: bold;
            }
        }
    }

`;