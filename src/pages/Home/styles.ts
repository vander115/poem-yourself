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
`;

export const TextContent = styled.div`
    width: 480px;
    height: 100%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 4rem;
`;

export const TextTitle = styled.h1``;
export const Text = styled.p``;

export const FormContainer = styled.section`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextForm = styled.form`
    padding: 2rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    width: fit-content;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;
