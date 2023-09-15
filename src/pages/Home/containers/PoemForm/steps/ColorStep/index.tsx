import { useTheme } from 'styled-components';
import { BackgroundEnum } from '../../../../../../@types/form';
import { StepContainer } from '../../styles';
import { ColorSection, ColorSectionContent } from './styles';
import { BackgroundTypeTabs } from '../../components/BackgroundTypeTabs';

export function ColorStep() {
    const { gray100, gray300 } = useTheme();

    const BACKGROUND_TYPE_OPTIONS = [
        {
            label: 'Solido',
            value: BackgroundEnum.SOLID,
            color: gray300,
        },
        {
            label: 'Linear',
            value: BackgroundEnum.LINEAR,
            color: `linear-gradient(90deg, ${gray100} 0%, ${gray300} 100%)`,
        },
    ];

    return (
        <StepContainer>
            <ColorSection>
                <strong>Cor de Fundo</strong>
                <ColorSectionContent>
                    <BackgroundTypeTabs
                        backgroundTypeOptions={BACKGROUND_TYPE_OPTIONS}
                    />
                </ColorSectionContent>
            </ColorSection>
        </StepContainer>
    );
}
