import styled from "styled-components";

interface IConfirmModal {
    isVisible: boolean;
}

export const Container = styled.section<IConfirmModal>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: ${props => props.isVisible ? 1 : -1};
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: 300ms;

    span.background {
        position: absolute;
        background-color: #000;
        opacity: 0.8;
        width: 100%;
        height: 100%;
    }

    .modal-box {
        width: 35rem;
        padding: 3rem 2rem 2rem 2rem;
        border-radius: 3px;
        background-color: var(--main-gray);
        margin-top: -3rem;
        position: relative;
        transition: 500ms;
        opacity: 0;
        transform: translate(30px, -15px);

        svg {
            margin-left: auto;
            cursor: pointer;
            font-size: 1.5rem;
            position: absolute;
            right: 2rem;
            top: 1rem;
            right: 1rem;
            transition: 300ms;

            //animação de entrada
            transform: translate(15px, -15px) scale(0.7);
            opacity: 0;

            &:hover {
                transform: scale(1.1);
            }
        }

        h2, p {
            margin-bottom: .5rem;
        }

        h2 {
            color: #fff;
            transition: 500ms;
            transform: translateX(-20px);
            filter: opacity(0);
        }

        p {
            transition: 800ms;
            transform: translateX(-30px);
            filter: opacity(0);
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

                transform: translateY(30px) scale(0.8);
                opacity: 0;

                &:hover {
                    transform: scale(1.05);
                }
            }

            .btn-reject {
                background-color: transparent;
                border: 1px solid #fff;
                color: #fff;
                margin-right: 0.5rem;
                /* transform: translateY(30px) scale(0.8);
                opacity: 0; */
            }

            .btn-accept {
                background-color: #fff;
                font-weight: bold;
                transition: 600ms;
            }
        }
    }

    //ANIMAÇÃO DE ENTRADA
    ${({ isVisible }) => isVisible &&`
        opacity: 1;

        .modal-box {
            opacity: 1;
            transform: translate(0, 0);

            svg {
                transition: 500ms;
                transform: translate(0, 0) scale(1);
                opacity: 1;
            }

            h2 {
                transform: translateX(0);
                filter: opacity(1);
            }

            p {
                transform: translateX(0);
                filter: opacity(1);
            }

            .buttons-container {
                button {
                    transform: translateY(0) scale(1);
                    opacity: 1;
                }
            }
        }
    `}
`;