import { AnchorHTMLAttributes } from 'react';
import { ButtonContainer } from './styles';

interface IButton extends AnchorHTMLAttributes<HTMLAnchorElement> {
    label: string;
}

export function Button({ label }: IButton) {
    return (
        <ButtonContainer>
            <span>{label}</span>
        </ButtonContainer>
    );
}
