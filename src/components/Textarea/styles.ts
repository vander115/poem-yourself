import { styled } from 'styled-components';

export const TextareaConainer = styled.fieldset`
    display: flex;
    flex-direction: column;
    height: 100%;
    border: 0;

    textarea {
        resize: none;
        font-size: 1rem;
        max-width: 100%;
        height: 20rem;
        border-radius: 0.25rem;
        padding: 0.25rem;
        border: 2px solid #a6a4a4;
    }

    label {
        font-weight: 500;
        color: #a6a4a4;
    }
`;
