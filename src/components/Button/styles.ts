import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-decoration: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    height: 3.5rem;
    width: 100%;
    background-color: ${({ theme }) => theme.button.background};
    border-radius: 0.25rem;

    &:hover {
        filter: brightness(0.9);
    }
    span {
        color: ${({ theme }) => theme.button.text};
    }
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        color: ${({ theme }) => theme.button.text};
    }
`;
