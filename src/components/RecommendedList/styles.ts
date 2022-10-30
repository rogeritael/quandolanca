import styled from "styled-components";

export const Container = styled.section`
    padding: 2rem;
    margin-bottom: 2rem;

    h1 {
        margin-bottom: 1rem;
        color: #fff;
    }

    .card-container {
        width: 100%;
        max-height: 10rem;
        overflow-y: auto;
        overflow-x: hidden;


        .row {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media (max-width: 1024px){
            .card-container .row {
                grid-template-columns: repeat(3, 1fr);
            }
    }
    @media (max-width: 768px){
        .card-container .row {
            display: flex;
            width: max-content;
        }

        .card-container {
            overflow-y: hidden;
            overflow-x: auto;
        }
    }
`;