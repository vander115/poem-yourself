import styled from 'styled-components';

interface IBackgroundTypeTab {
    color: string;
}

export const BackgroundTypeTabsContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    width: 100%;
`;

export const BackgroundTypeTab = styled.label<IBackgroundTypeTab>`
    width: 100%;
    height: 5rem;
    border-radius: 0.5rem;

    background: ${({ color }) => color};
`;
