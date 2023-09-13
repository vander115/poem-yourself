import { HTMLAttributes, RefObject } from 'react';

import { usePoem } from '../../../../hooks/poem';
import { PoemBodyContainer, PoemParagraphs, PoemTitle } from './styles';

interface IPoemBodyProps extends HTMLAttributes<HTMLDivElement> {
    ref: RefObject<HTMLDivElement>;
}

export function PoemBody({ ref, ...rest }: IPoemBodyProps) {
    const { title, paragraphs } = usePoem();

    return (
        <PoemBodyContainer ref={ref} {...rest}>
            <PoemTitle>{title}</PoemTitle>
            <PoemParagraphs>
                {paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </PoemParagraphs>
        </PoemBodyContainer>
    );
}
