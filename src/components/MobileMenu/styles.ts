import styled from "styled-components";

interface MobileMenuProps {
    isOpen: boolean
}

export const Container = styled.div<MobileMenuProps>`
    display: flex;
    flex-direction: column;
    position: fixed;
    background-color: rgba(32,32,32,0.9);
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    padding: 2rem;
    transition: 500ms;
    transform: translateY(100px);
    opacity: 0;
    z-index: -1;
    text-align: center;

    svg {
        color: #fff;
        margin-left: auto;
        font-size: 1.5rem;
        transform: rotate(90deg);
        transition: 500ms;
    }

    ul {
        margin-top: -2rem;
        transition: 500ms;
        transform: scale(0.7);

        li {
            margin: 3rem;
            font-size: 1.5rem;
            text-align: center;
            
            a {
                /* color: #fff; */
                color: var(--gray-3);
            }
        }
        display: inline;
    }

    p {
        text-decoration: underline;
    }


    ${({ isOpen }) => isOpen &&`
        transform: translateY(0px);
        opacity: 1;
        z-index: 2;
        > svg {
            transform: rotate(0deg);
        }
        ul {
            transform: scale(1);
        }
    `}
`;