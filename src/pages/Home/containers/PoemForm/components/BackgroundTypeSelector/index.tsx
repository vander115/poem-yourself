
import { BackgroundTypeSelectorContainer } from './styles';
import { useTheme } from 'styled-components';
import { useThemeContext } from '../../../../../../styles/theme';

export function BackgroundTypeSelector() {
    const { gray300 } = useTheme();
    const { changeBackgroundType } = useThemeContext();

    const types = [
        {
            label: 'Sólido',
            background: gray300,
            value: 'solid'
        },
    ];

    return <BackgroundTypeSelectorContainer>
      {types.map((type) => (
        <input
          type="radio"
          name="background-type"
          value={type.value}
          onChange={(event) => changeBackgroundType(Number(event.target.value))}
          defaultChecked={stepIndex === type.value}
        />
        <span>
          {type.icon && <IconContainer>{type.icon}</IconContainer>}
          {type.label}
        </span>
      ))}
    </BackgroundTypeSelectorContainer>;
}
