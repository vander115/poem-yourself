import styled from 'styled-components';

export const PoemBodyContainer = styled.div`
    width: 30rem;
    height: fit-content;
    min-height: 100%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 4rem;
    background: ${({ theme }) => theme.white};
    border-radius: 0.5rem;
`;

export const PoemTitle = styled.h1`
    margin-bottom: 1rem;
`;
export const PoemParagraphs = styled.span`
    word-wrap: break-word;

    p {
        padding: 0.25rem 0;
    }
`;
