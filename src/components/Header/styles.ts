import styled, { keyframes, css } from "styled-components";

interface IHeader {
    showHeader: boolean;
    isThereUnreadNotification: boolean;
}

const bellAnimation = keyframes`  
  0%, 90%{
    transform: rotateZ(0);
  }
  5%, 15%, 25%, 35%, 45%, 55%, 65%, 75% {
    transform: rotateZ(30deg);
  }
  10%, 20%, 30%, 40%, 50%, 50%, 60%, 70% {
    transform: rotateZ(-30deg);
  }
`;

// const bellAnimation = keyframes`  
// from {
//     rotate: 30deg;
//   }
//   to{
//     rotate: -30deg;
//   }
// `;

const pulse = keyframes`  
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(2, 2);
    opacity: 0;
  }
`;

export const Container = styled.header<IHeader>`
    ${props => props.showHeader === false && `
        display: none;
    `}

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

            div.bell {
                position: relative;
            
                svg {
                    font-size: 1.25rem;
                    cursor: pointer;
                    display: flex;
                    position: relative;

                    &:hover {
                        filter: brightness(1.2);
                    }
                }

                .alert-circle {
                    width: 8px;
                    height: 8px;
                    border-radius: 8px;
                    background-color: goldenrod;
                    position: absolute;
                    top: 0;
                    right: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    display: none;
                    pointer-events: none;

                    &::after {
                        content: '';
                        width: 8px;
                        height: 8px;
                        border-radius: 8px;
                        background-color: goldenrod;
                        /* z-index: -1; */
                    }
                } 

                &.isThereUnreadNotification {
                    svg {
                        animation: ${bellAnimation} 2500ms infinite ease-out;
                    }

                    .alert-circle {
                        display: flex;
                        &::after {
                            animation: ${pulse} 1500ms ease-out infinite
                        }
                    }
                }
            }

            p {
                font-weight: bold;
                margin-left: 1rem;
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