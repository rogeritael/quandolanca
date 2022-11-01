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
        max-height: 32rem;
        overflow: hidden;
        cursor: grab;
        
        
        .row {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media (max-width: 1024px){
            .card-container {
                overflow-y: hidden;
                overflow-x: auto;
                ::-webkit-scrollbar-track, ::-webkit-scrollbar,::-webkit-scrollbar-thumb  {
                    display: none;
                }

                .row {
                    overflow-y: hidden;
                    overflow-x: auto;
                    width: max-content;
                }
        }
    }
`;