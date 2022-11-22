import styled from "styled-components";

interface IFooter {
    showFooter: boolean;
}

export const Container = styled.footer<IFooter>`
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid var(--gray-2);
    text-align: center;

    ${props => props.showFooter === false && `
        display: none;
    `}
`;