import styled from "styled-components";

export const Container = styled.section`
    padding: 2rem;
    h1 {
        color: #fff;
        margin-bottom: 1rem;
    }

    .card-container {

        min-height: 200px;
        width: 100%;
        overflow-x: auto;


        //scroll
        ::-webkit-scrollbar-track, ::-webkit-scrollbar,::-webkit-scrollbar-thumb  {
            display: none;
        }
        
        .row {
            /* width: 10000px; */
            display: flex;
            column-gap: 2rem;
        }
    }

    
`;