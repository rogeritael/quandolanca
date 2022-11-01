import styled from "styled-components";

export const Container = styled.section`
    margin: 0 auto;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    p, h1 {
        color: var(--gray-2);
    }

    h1 {
        font-size: 4rem;
        margin-bottom: -1rem;
    }

    p {
        margin-top: 1rem;
        font-size: 1.25rem;
    }

    a {
        color: #fff;
        margin-top: 1rem;
        text-decoration: underline;
    }

    figure {
        margin: 1rem 0;
        width: 20rem;
        height: 20rem;
        position: relative;
        opacity: 0.5;
    }

    @media (max-width: 578px){
        figure{
            width: 15rem;
            height: 15rem;
            margin-top: 2rem;
        }
        p {
            font-size: 1.15rem;
        }
    }

`;