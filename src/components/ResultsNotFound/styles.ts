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
        width: 30rem;
        height: 30rem;
        position: relative;
    }

`;