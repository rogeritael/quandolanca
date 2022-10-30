import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    display: grid;
    /* flex-wrap: wrap; */
    /* column-gap: calc((100vw - 60rem) / 5); */
    row-gap: 3rem;
    grid-template-columns: repeat(5, 1fr);
    /* border: 1px solid red; */
    
    /* border: 1px solid red; */

    article {
        /* margin-left: 10px; */
        /* border: 1px solid red; */
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

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
        article {
            figure.cover {
                height: 20rem;
                width: 15rem;
            }

            .release-info {
                span {
                    font-size: 1rem;
                }

                p.title {
                    font-size: 1.25rem;
                }
            }
        }
    }
`;