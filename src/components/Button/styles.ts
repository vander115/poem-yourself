import styled from 'styled-components';

export const ButtonContainer = styled.a`
    text-decoration: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
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
