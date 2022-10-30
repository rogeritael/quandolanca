import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --main-gray: #202020;
        --gray-2: #404040;
        --gray-3: #B5B5B5;
        --title-color: #fff;
    }
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        border: none;
        outline: none;
    }

    body, html {
        font-family: 'Roboto', sans-serif;
        background-color: var(--main-gray);
        color: var(--gray-3);
    }

    button {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.25rem;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: var(--gray-2);
    }

    html {
        @media (max-width: 1080px){
            font-size: 93.75%;
        } //15px
        @media (max-width: 720px){
            font-size: 87.5%;
        } //14px
    }

    .react-modal-overlay {
        background-color: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 400px;
        background-color: var(--main-gray);
        position: relative;
        border-radius: 5px;
        height: 500px;
        overflow-y: auto;

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            color: #fff;

            h1 {
                font-size: 1.5rem;
                font-weight: normal;
            }

            .close {
                color: fff;
                font-size: 1.25rem;
                cursor: pointer;
                transition: 500ms;

                &:hover {
                    transform: scale(1.1);
                }
            }
        }
        .notification-item {
            width: 100%;
            border-bottom: 1px solid var(--gray-2);
            background-color: var(--main-gray);
            font-size: .9rem;
            padding: 1rem;
            
            
            span {
                color: #fff;
                font-weight: bold;
            }

            &:hover {
                filter: brightness(1.1);
            }
        }
    }

    /* width */
    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
        background-color: var(--gray-2);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 3px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }



    @media (max-width: 425px){
        .react-modal-content {
            padding-top: 1rem;
            max-width: 100%;
            height: 100%;
            opacity: 0.9;
        }
    }
`;