import styled, { keyframes } from "styled-components";

interface FlashMessageProps {
    isVisible: boolean,
    type: string
}

const bar_animation = keyframes`
    0% {
        transform: scaleX(100%);
    }
    100% {
        width: 0%;
    }
`;

export const Container = styled.div<FlashMessageProps>`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background-color: #fff;
    /* color: #333; */
    color: var(--main-gray);
    border-radius: 3px;
    min-height: 60px;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 5;

    opacity: 0;
    transition: 500ms;
    transform: translateX(2rem);

    svg {
        margin-right: 5px;
        font-size: 1.5rem;
        color: var(--main-gray);
    }

    p {
        max-width: 300px;
    }

    &::after{
        content: '';
        height: 4px;
        width: 100%;
        background-color: var(--gray-2);
        position: absolute;
        bottom: 0;
        left: 0;
    }

    ${({ isVisible }) => isVisible &&`
        opacity: 1;
        transform: translateX(0);
    `}
`;