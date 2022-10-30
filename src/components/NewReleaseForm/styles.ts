import styled from "styled-components";

export const Container = styled.form`
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    label {
        /* border: 1px solid red; */
        width: 48%;
        margin-bottom: 1.5rem;

        p {
            color: #fff;
            font-size: .9rem;
            margin-bottom: .25rem;
        }

        input, select {
            width: 100%;
            height: 40px;
            border-radius: 3px;
            padding: 0 10px;
            display: inline-block;
            background-color: var(--gray-2);
            color: var(--gray-3);

            &:hover {
                filter: brightness(1.1);
            }
        }

        &:first-child {
            width: 100%;
        }
    }

    .image-upload-container {
        border: 1px dashed #fff;
        display: flex;
        margin-top: .5rem;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        row-gap: 10px;
        width: 100%;
    
        svg {
            font-size: 3rem;
            color: var(--gray-2);
        }
        
        p {
            font-size: 1.25rem;
        }

        span {
            font-size: .8rem;
        }

        a {
            color: #0093FF;
            border-bottom: 1px solid #0093FF;
            font-size: .9rem;
        }
        /* justify-content: center; */
    }

    button {
        margin-top: 1rem;
        margin-left: auto;
        padding: 0.7rem;
        font-size: 0.9rem;
        border-radius: 5px;
        color: #fff;
        background-color: var(--gray-2);

        svg {
            margin-left: 5px;
        }
    }
`;