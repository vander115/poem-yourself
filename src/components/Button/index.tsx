import { ButtonHTMLAttributes } from 'react';
import { ButtonContainer, IconContainer } from './styles';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    icon?: JSX.Element;
}

export function Button({ icon, label, ...rest }: IButton) {
    return (
        <ButtonContainer type="button" {...rest}>
            {icon && <IconContainer>{icon}</IconContainer>}
            <span>{label}</span>
        </ButtonContainer>
    );
}
