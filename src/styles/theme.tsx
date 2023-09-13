import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useMemo,
    useState,
} from 'react';
import { ThemeProvider } from 'styled-components';

interface IThemeContext {
    backgroundColor: string;
    setBackgroundColor: Dispatch<SetStateAction<string>>;
    theme: any;
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
    const [backgroundColor, setBackgroundColor] = useState('#fff');

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
                background: backgroundColor,
            },
        }),
        [backgroundColor],
    );

    const value = useMemo(
        () => ({
            backgroundColor,
            setBackgroundColor,
            theme,
        }),
        [backgroundColor, setBackgroundColor],
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
