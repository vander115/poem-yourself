import { ITabs } from '../../../../../../@types/form';
import { usePoem } from '../../../../../../hooks/poem';
import { Tab, TabsContainer } from './styles';

interface IFormTabs {
    tabs: ITabs[];
}

export function FormTabs({ tabs }: IFormTabs) {
    const { setStepIndex } = usePoem();

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
                    />
                    <span>{tab.label}</span>
                </Tab>
            ))}
        </TabsContainer>
    );
}
