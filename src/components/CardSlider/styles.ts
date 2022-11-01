import styled from "styled-components";

interface SliderProps {
    columns?: number
}

export const Container = styled.section<SliderProps>`
    padding: 2rem;
    margin-bottom: 2rem;

    h1 {
        margin-bottom: 1rem;
        color: #fff;
    }

    .card-container {
        width: 100%;
        overflow: hidden;
        cursor: grab;
        overflow: hidden;
        


        .row {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);

            ${props => props.columns === 1 && `
                display: flex;
                column-gap: 1rem;

                .card-container {
                    cursor: grab;
                    overflow: hidden;
                    min-height: 200px;
                } 
            `}
        }
    }

    @media (max-width: 1024px){
        .card-container .row {
            width: max-content;
        }
    }
`;