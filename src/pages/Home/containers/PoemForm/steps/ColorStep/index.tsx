import { StepContainer } from '../../styles';
import { ColorSection, ColorSectionContent } from './styles';

export function ColorStep() {
    return (
        <StepContainer>
            <ColorSection>
                <strong>Cor de Fundo</strong>
                <ColorSectionContent></ColorSectionContent>
            </ColorSection>
        </StepContainer>
    );
}
