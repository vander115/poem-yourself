import { ITabs } from '../../../../@types/form';
import { Button } from '../../../../components/Button';
import { usePoem } from '../../../../hooks/poem';
import { FormTabs } from './components/FormTabs';
import { TextStep } from './steps/TextStep';
import { ButtonsContainer, FormContent, PoemFormContainer } from './styles';

export function PoemForm() {
    const { stepIndex } = usePoem();

    const getSteps = () => {
        switch (stepIndex) {
            case 1:
                return <TextStep />;
            case 2:
                return;
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
        },
        {
            label: 'Cores',
            value: 3,
        },
        {
            label: 'Letras',
            value: 3,
        },
    ];

    return (
        <PoemFormContainer>
            <FormTabs tabs={tabs} />
            <FormContent>
                {getSteps()}
                <ButtonsContainer>
                    <Button label="Salvar" />
                </ButtonsContainer>
            </FormContent>
        </PoemFormContainer>
    );
}
