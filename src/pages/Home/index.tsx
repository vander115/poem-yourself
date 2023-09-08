import { useCallback, useRef, useState } from 'react';
import {
    HomeContainer,
    Text,
    TextContainer,
    TextContent,
    TextTitle,
} from './styles';
import { toPng } from 'html-to-image';

export function Home() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const domEl = useRef<HTMLDivElement>(null);

    const downloadImage = useCallback(async () => {
        if (domEl.current === null) {
            return;
        }
        console.log(domEl.current);
        try {
            const dataUrl = await toPng(domEl.current, {
                cacheBust: true,
                pixelRatio: 2,
            });
            const link = document.createElement('a');
            link.download = 'html-to-img.png';
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.log(err);
        }
    }, [domEl]);

    return (
        <HomeContainer>
            <TextContainer>
                <TextContent ref={domEl}>
                    <TextTitle contentEditable>{title}</TextTitle>
                    <Text contentEditable>{text}</Text>
                </TextContent>
            </TextContainer>
        </HomeContainer>
    );
}
