import { TextareaHTMLAttributes } from 'react';
import { TextareaConainer } from './styles';

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

export function Textarea({ name, label, ...rest }: ITextareaProps) {
    return (
        <TextareaConainer>
            <label htmlFor={name}>{label}</label>
            <textarea name={name} {...rest} />
        </TextareaConainer>
    );
}
