import { styled } from 'styled-components';

export const InputConainer = styled.fieldset`
    border: 0;
    display: flex;
    flex-direction: column;
    width: 100%;

    input {
        font-size: 1rem;
        height: 2.5rem;
        max-width: 100%;
        border-radius: 0.25rem;
        padding: 0 0.25rem;
        border: 2px solid #a6a4a4;
    }

    label {
        font-weight: 500;
        color: #a6a4a4;
    }
`;
