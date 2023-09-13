import { AnchorHTMLAttributes } from 'react';
import { ButtonContainer, IconContainer } from './styles';

interface IButton extends AnchorHTMLAttributes<HTMLAnchorElement> {
    label: string;
    icon?: JSX.Element;
}

export function Button({ icon, label }: IButton) {
    return (
        <ButtonContainer>
            {icon && <IconContainer>{icon}</IconContainer>}
            <span>{label}</span>
        </ButtonContainer>
    );
}
