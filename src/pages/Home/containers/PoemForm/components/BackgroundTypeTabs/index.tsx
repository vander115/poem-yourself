import {
    BackgroundEnum,
    BackgroundTypeTabType,
} from '../../../../../../@types/form';
import { useBackground } from '../../../../../../hooks/background';
import { BackgroundTypeTab, BackgroundTypeTabsContainer } from './styles';

interface IBackgroundTypeTabs {
    backgroundTypeOptions: BackgroundTypeTabType[];
}

export function BackgroundTypeTabs({
    backgroundTypeOptions,
}: IBackgroundTypeTabs) {
    const { setBackgroundType, backgroundType } = useBackground();

    return (
        <BackgroundTypeTabsContainer>
            {backgroundTypeOptions.map((backgroundTypeOption) => (
                <BackgroundTypeTab
                    key={backgroundTypeOption.label}
                    color={backgroundTypeOption.color}
                >
                    <input
                        type="radio"
                        name="form-tab"
                        value={backgroundTypeOption.value}
                        onChange={(event) =>
                            setBackgroundType(
                                event.target.value as BackgroundEnum,
                            )
                        }
                        defaultChecked={
                            backgroundType === backgroundTypeOption.value
                        }
                    />
                    <span>{backgroundTypeOption.label}</span>
                </BackgroundTypeTab>
            ))}
        </BackgroundTypeTabsContainer>
    );
}
