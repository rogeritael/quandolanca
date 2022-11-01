import styled from "styled-components";

export const Container = styled.section`
    padding: 2rem;
    h1 {
        color: #fff;
        margin-bottom: 1rem;
    }

    .row {
        display: flex;
        column-gap: 1rem;
    }

    .card-container {
        cursor: grab;
        overflow: hidden;
        min-height: 200px;
    }    
`;