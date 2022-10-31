import styled from "styled-components";

export const Container = styled.section`
    padding: 2rem;
    h1 {
        color: #fff;
        margin-bottom: 1rem;
    }

    .card-container {

        min-height: 200px;
        min-width: 1200px;
        width: 100%;
        overflow-x: auto;


        //scroll
        ::-webkit-scrollbar-track, ::-webkit-scrollbar,::-webkit-scrollbar-thumb  {
            display: none;
        }
        
        .row {
            display: flex;
            /* flex-direction: row; */
            column-gap: 2rem;
        }
    }

    
`;