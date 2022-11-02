import styled from "styled-components";

interface notificationsModalProps {
    isVisible: boolean
}

export const Container = styled.div<notificationsModalProps>`
    background-color: rgba(0,0,0,0.8);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: ${props => props.isVisible ? 2 : -1};
    overflow: hidden;
    transition: 300ms;
    opacity: 0;

    span.background{
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .notifications-container {
        position: absolute;
        right: 1rem;
        top: 1rem;
        width: 450px;
        border-radius: 3px;
        height: 95%;
        background-color: var(--main-gray);
        color: #fff;
        
        transform: translate(4rem);
        opacity: 0;
        transition: 500ms;

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem;

            /* margin-bottom: 1rem; */

            h1 {
                transform: translateY(-1rem) scale(0.8);
                transition: 500ms;
                font-size: 1.25rem;
                color: #fff;
                font-weight: normal;
            }

            svg {
                font-size: 1.25rem;
                cursor: pointer;
            }
        }

        .notification-item {
            transform: translateY(2rem);
            padding: 1rem 0.5rem;
            border-bottom: 1px solid #333;
            transition: 500ms;
            background-color: var(--main-gray);
            z-index: 100;
            
            &:hover {
                filter: brightness(1.1);
            }

            p {
                color: var(--gray-3);
                font-size: 0.9rem;
                span {
                    color: #fff;
                    font-size: 1rem;
                    font-weight: bold;
                }
            }

            p.date {
                font-size: 0.8rem;
                margin-bottom: .25rem;
                color: #333;
                text-align: left;
            }
        }
    }

    @media (max-width: 480px){
        .notifications-container {
            width: 100%;
            height: 100%;
            right: 0;
            top: 0;
        }
    }

    ${({ isVisible }) => isVisible &&`
        opacity: 1;
    
        .notifications-container {
            transform: translate(0);
            opacity: 1;

            .header h1 {
                transform: translateY(0) scale(1);
            }

            .notification-item {
                transform: translateY(0);
            }
        }
    `}

`;