import { Input } from '../../../../../../components/Input';
import { Textarea } from '../../../../../../components/Textarea';
import { usePoem } from '../../../../../../hooks/poem';
import { StepContainer } from '../../styles';

export function TextStep() {
    const { title, setTitle, text, setText, transformText } = usePoem();
    return (
        <StepContainer>
            <Input
                value={title}
                name="title"
                label="Título"
                onChange={(event) => setTitle(event?.target.value)}
            />
            <Textarea
                name="text"
                value={text}
                label="Texto"
                onChange={(event) => {
                    setText(event?.target.value);
                    transformText(event?.target.value);
                }}
            />
        </StepContainer>
    );
}
