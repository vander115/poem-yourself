import { ReactNode } from 'react';
import { PoemProvider } from './poem';
import { ThemeContextProvider } from '../styles/theme';
import { BackgroundProvider } from './background';

export function AppProvider({ children }: { children: ReactNode }) {
    return (
        <BackgroundProvider>
            <PoemProvider>
                <ThemeContextProvider>{children}</ThemeContextProvider>
            </PoemProvider>
        </BackgroundProvider>
    );
}
