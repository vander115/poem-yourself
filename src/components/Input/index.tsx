import { InputHTMLAttributes } from 'react';
import { InputConainer } from './styles';

interface IIputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: IIputProps) {
    return <InputConainer {...rest} />;
}
