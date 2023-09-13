import styled from 'styled-components';

export const TabsContainer = styled.div`
    height: 4rem;
    width: 100%;
    display: flex;
`;

export const Tab = styled.label`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.35rem 0.35rem;
    position: relative;

    input {
        display: none;
    }

    input[type='radio']:checked + span {
        background-color: ${({ theme }) => theme.form.input.border};
        color: ${({ theme }) => theme.white};
    }

    input[type='radio']:not(:checked) + span {
        cursor: pointer;
    }

    span {
        font-size: 1rem;
        font-weight: 500;
        display: block;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.25rem;
        gap: 0.25rem;
        color: ${({ theme }) => theme.form.input.label};
    }

    & + label {
        &::before {
            content: '';
            position: absolute;
            height: 70%;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            width: 2px;
            border-radius: 3px;
            background: ${({ theme }) => theme.form.input.border};
        }
    }
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
