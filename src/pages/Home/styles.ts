import styled from 'styled-components';

export const HomeContainer = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
`;

export const TextContainer = styled.section`
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 3rem 0;
    overflow-y: scroll;
`;

export const TextContent = styled.div`
    width: 30rem;
    height: fit-content;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 4rem;
`;

export const TextTitle = styled.h1`
    margin-bottom: 1rem;
`;
export const Text = styled.span`
    word-wrap: break-word;

    p {
        padding: 0.25rem 0;
    }
`;

export const FormContainer = styled.section`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextForm = styled.form`
    width: 30rem;
    padding: 2rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;

    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;
