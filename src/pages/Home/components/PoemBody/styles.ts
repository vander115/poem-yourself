import styled from 'styled-components';

export const PoemBodyContainer = styled.div`
    width: 30rem;
    height: fit-content;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 4rem;
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
