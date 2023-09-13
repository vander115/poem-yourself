import {
    FloppyDiskBack,
    Palette,
    TextAa,
    TextAlignLeft,
} from '@phosphor-icons/react';
import { ITabs } from '../../../../@types/form';
import { Button } from '../../../../components/Button';
import { usePoem } from '../../../../hooks/poem';
import { FormTabs } from './components/FormTabs';
import { TextStep } from './steps/TextStep';
import { ButtonsContainer, FormContent, PoemFormContainer } from './styles';
import { ColorStep } from './steps/ColorStep';

export function PoemForm() {
    const { stepIndex } = usePoem();

    const getSteps = () => {
        switch (stepIndex) {
            case 1:
                return <TextStep />;
            case 2:
                return <ColorStep />;
            case 3:
                return;
            default:
                return <TextStep />;
        }
    };

    const tabs: ITabs[] = [
        {
            label: 'Texto',
            value: 1,
            icon: <TextAlignLeft size={24} />,
        },
        {
            label: 'Cores',
            value: 2,
            icon: <Palette size={24} />,
        },
        {
            label: 'Letras',
            value: 3,
            icon: <TextAa size={24} />,
        },
    ];

    return (
        <PoemFormContainer>
            <FormTabs tabs={tabs} />
            <FormContent>
                {getSteps()}
                <ButtonsContainer>
                    <Button
                        icon={<FloppyDiskBack size={24} />}
                        label="Salvar"
                    />
                </ButtonsContainer>
            </FormContent>
        </PoemFormContainer>
    );
}
