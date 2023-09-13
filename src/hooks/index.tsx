import { ReactNode } from 'react';
import { PoemProvider } from './poem';
import { ThemeContextProvider } from '../styles/theme';

export function AppProvider({ children }: { children: ReactNode }) {
    return (
        <PoemProvider>
            <ThemeContextProvider>{children}</ThemeContextProvider>
        </PoemProvider>
    );
}
