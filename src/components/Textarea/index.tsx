import { TextareaHTMLAttributes } from 'react';
import { TextareaConainer } from './styles';

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ ...rest }: ITextareaProps) {
    return <TextareaConainer {...rest} />;
}
