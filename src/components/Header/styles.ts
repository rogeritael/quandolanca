import styled from "styled-components";

export const Container = styled.header`
    .toggle {
        display: none;
    }

    div.icons{
        display: flex;
        align-items: center;
        justify-content: center;

        a.login-icon {
            svg {
                display: none;
                font-size: 2rem;
                color: var(--gray-2);
                margin-top: 1px;
                margin-left: 5px;
            }
        }
    }

    .header-top {
        height: 80px;
        display: flex;
        align-items: center;
        padding: 0 2rem;

        form {
            display: flex;

            &:hover {
                input[type=text], button[type=submit]{
                    filter: brightness(1.1);
                }
            }

            input[type=text], button[type=submit]{
                height: 35px;
                background-color: var(--gray-2);
                color: var(--gray-3);
                transition: 500ms;
            }

            input[type=text]{
                width: 12rem;
                border-radius: 5px 0 0 5px;
                padding-left: 1rem;
            }

            button[type=submit]{
                width: 35px;
                border-radius: 0 5px 5px 0;

                svg {
                    transition: 500ms;
                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }

            
        }

        //botão plus
        button.new-release {
            width: 35px;
            height: 35px;
            border-radius: 5px;
            background-color: var(--gray-2);
            color: var(--gray-3);
            margin-left: .5rem;
            transition: 500ms;

            &:hover {
                transform: scale(1.1);
                -webkit-box-shadow: 0px 0px 10px 0.25px rgba(0,0,0,0.30);
                -moz-box-shadow: 0px 0px 10px 0.25px rgba(0,0,0,0.30);
                box-shadow: 0px 0px 10px 0.25px rgba(0,0,0,0.30);
            }
        }

        //informações do usuário
        .user-info {
            margin-left: auto;
            display: flex;
            align-items: center;

            svg {
                font-size: 1.25rem;
                cursor: pointer;
                position: relative;

                &:hover {
                    filter: brightness(1.2);
                }
                /* border: 1px solid red; */ 
            }

            figure.user-image {
                width: 40px;
                height: 40px;
                border-radius: 5px;
                position: relative;
                overflow: hidden;
                margin-left: 1rem;
                margin-right: .5rem;
            }

            p {
                font-weight: bold;
                span.logout-link {
                    display: block;
                    cursor: pointer;
                    font-weight: normal;

                    &:hover {
                        filter: brightness(1.2);
                    }
                }
            }
        }

        //login
        .login-link {
            color: var(--gray-2);
            margin-left: auto;
            transition: 250ms;

            &:hover {
                filter: brightness(1.2);
            }
        }

    }

    nav.pages {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;

        a {
            color: var(--gray-3);
            margin: 1rem;
            position: relative;

            &:hover {
                filter: brightness(1.3);
            } 
        }

        a.active {
            color: var(--title-color);
            font-weight: bold;
        }
    }

    //mobile
    @media (max-width: 425px){
        div.icons a.login-icon svg {
            display: block;
        }

        .user-info {
            .user-image, p {
                display: none;
            }

            svg {
                margin-right: .5rem;
                color: var(--gray-2);
            }
        }

        .header-top {
            justify-content: space-between;
        }

        nav.pages {
            display: none;
        }

        .toggle {
            font-size: 1.5rem;
            margin-right: -.25rem;
            display: block;
            color: var(--gray-2);
        }

        .login-link {
            display: none;
        }
    }

    @media (max-width: 345px){
        .header-top {
            padding: 0 1rem;
        }
    }
`;