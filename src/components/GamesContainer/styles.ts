import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    display: grid;
    row-gap: 3rem;
    grid-template-columns: repeat(5, 1fr);
    article {
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .remove-button {
                display: none;
                background-color: red;
            }
    }
    @media (max-width: 1024px){
        grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 860px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 620px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 430px){
        grid-template-columns: 1fr;
    }
`;