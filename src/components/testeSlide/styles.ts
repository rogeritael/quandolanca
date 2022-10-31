import styled from "styled-components";

export const Container = styled.section`
    margin: 4rem 0;

    .app {
        width: 100%;
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 900px;
    }

    .inner {
        display: flex;
        column-gap: 1rem;
    }

    .carousel {
        cursor: grab;
        overflow: hidden;
    }
`;