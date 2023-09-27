import { HTMLAttributes } from 'react';

import { usePoem } from '../../../../hooks/poem';
import {
    PoemAuthor,
    PoemBodyContainer,
    PoemParagraphs,
    PoemTitle,
} from './styles';

interface IPoemBodyProps extends HTMLAttributes<HTMLDivElement> {}

export function PoemBody({ ...rest }: IPoemBodyProps) {
    const { author, title, paragraphs, poemRef } = usePoem();

    return (
        <PoemBodyContainer ref={poemRef} {...rest}>
            <PoemTitle>{title}</PoemTitle>
            <PoemParagraphs>
                {paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </PoemParagraphs>
            <PoemAuthor>{author}</PoemAuthor>
        </PoemBodyContainer>
    );
}
