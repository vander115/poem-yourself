import { InputHTMLAttributes } from 'react';
import { InputConainer } from './styles';

interface IIputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

export function Input({ name, label, ...rest }: IIputProps) {
    return (
        <InputConainer>
            <label htmlFor={name}>{label}</label>
            <input type="text" name={name} {...rest} />
        </InputConainer>
    );
}
