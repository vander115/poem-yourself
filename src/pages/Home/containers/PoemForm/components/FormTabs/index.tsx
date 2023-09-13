import { ITabs } from '../../../../../../@types/form';
import { usePoem } from '../../../../../../hooks/poem';
import { IconContainer, Tab, TabsContainer } from './styles';

interface IFormTabs {
    tabs: ITabs[];
}

export function FormTabs({ tabs }: IFormTabs) {
    const { setStepIndex, stepIndex } = usePoem();

    return (
        <TabsContainer>
            {tabs.map((tab) => (
                <Tab key={tab.label}>
                    <input
                        type="radio"
                        name="form-tab"
                        value={tab.value}
                        onChange={(event) =>
                            setStepIndex(Number(event.target.value))
                        }
                        defaultChecked={stepIndex === tab.value}
                    />
                    <span>
                        {tab.icon && <IconContainer>{tab.icon}</IconContainer>}
                        {tab.label}
                    </span>
                </Tab>
            ))}
        </TabsContainer>
    );
}
