import { useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';
import { FormContainer, HomeContainer, TextContainer } from './styles';
import { PoemForm } from './containers/PoemForm';
import { PoemBody } from './containers/PoemBody';

export function Home() {
    const domEl = useRef<HTMLDivElement>(null);

    const handleDownloadImage = useCallback(async () => {
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
            <TextContainer onClick={handleDownloadImage}>
                <PoemBody ref={domEl} />
            </TextContainer>
            <FormContainer>
                <PoemForm />
            </FormContainer>
        </HomeContainer>
    );
}
