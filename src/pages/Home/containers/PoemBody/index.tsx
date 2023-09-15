import { HTMLAttributes } from 'react';

import { usePoem } from '../../../../hooks/poem';
import { PoemBodyContainer, PoemParagraphs, PoemTitle } from './styles';

interface IPoemBodyProps extends HTMLAttributes<HTMLDivElement> {}

export function PoemBody({ ...rest }: IPoemBodyProps) {
    const { title, paragraphs, poemRef } = usePoem();

    return (
        <PoemBodyContainer ref={poemRef} {...rest}>
            <PoemTitle>{title}</PoemTitle>
            <PoemParagraphs>
                {paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </PoemParagraphs>
        </PoemBodyContainer>
    );
}
