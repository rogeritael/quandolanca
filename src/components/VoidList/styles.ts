import styled, { keyframes } from "styled-components";

const entrance = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px) scale(0.9);
    }
    to {
        opacity: 1;
        transform: translateX(0) scale(1);
    }
`;

const h2entrance = keyframes`
    from {
        opacity: 0;
        transform: translate(70px, 20px) scale(1.2);
    }
    to {
        opacity: 1;
        transform: translateX(0) scale(1);
    }
`;

export const Container = styled.div`
        display: flex;
        width: 100vw;
        height: 300px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0.3;
        text-align: center;
        margin-bottom: -20px;

        figure.voidlist-image {
            height: 200px;
            width: 150px;
            pointer-events: none;
            position: relative;
            margin-bottom: 1rem;
            animation: ${entrance} 800ms ;
        }

        h2 {
            animation: ${h2entrance} 600ms;
        }
`