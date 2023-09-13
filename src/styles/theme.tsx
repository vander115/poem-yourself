import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react';
import { ThemeProvider } from 'styled-components';
import { BackgroundType, IBackground } from '../@types/form';

interface IThemeContext {
    background: IBackground;
    theme: any;
    setBackground: Dispatch<SetStateAction<IBackground>>;
    changeBackgroundType: (newType: BackgroundType) => void;
}

interface IThemeProviderProps {
    children: ReactNode;
}

const palette = {
    white: '#fff',
    black: '#000',
    gray300: '#a6a4a4',
};

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export function ThemeContextProvider({ children }: IThemeProviderProps) {
    const [background, setBackground] = useState<IBackground>({
        type: 'solid',
        color: palette.gray300,
    });

    const changeBackgroundType = useCallback((newType: BackgroundType) => {
        setBackground((state) => ({
            ...state,
            type: newType as BackgroundType,
        }));
    }, []);

    const theme = useMemo(
        () => ({
            ...palette,

            form: {
                input: {
                    border: palette.gray300,
                    label: palette.gray300,
                    text: palette.black,
                },
            },
            button: {
                background: palette.gray300,
                text: palette.white,
            },

            poem: {
                background: background,
            },
        }),
        [background],
    );

    const value = useMemo(
        () => ({
            theme,
            background,
            setBackground,
            changeBackgroundType,
        }),
        [theme, background, setBackground, changeBackgroundType],
    );

    return (
        <ThemeContext.Provider value={value}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
}

export function useThemeContext(): IThemeContext {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme must be used within a AppProvider');
    }

    return context;
}
