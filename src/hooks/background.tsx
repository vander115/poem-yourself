import { ReactNode, createContext, useContext, useMemo, useState } from 'react';
import { BackgroundEnum } from '../@types/form';

interface IBackgroundContext {
    backgroundType: BackgroundEnum;
    setBackgroundType: (backgroundType: BackgroundEnum) => void;
}

interface IBackgroundProviderProps {
    children: ReactNode;
}

const BackgroundContext = createContext<IBackgroundContext>(
    {} as IBackgroundContext,
);

export function BackgroundProvider({ children }: IBackgroundProviderProps) {
    const [backgroundType, setBackgroundType] = useState<BackgroundEnum>(
        BackgroundEnum.LINEAR,
    );

    const value = useMemo(
        () => ({ backgroundType, setBackgroundType }),
        [backgroundType, setBackgroundType],
    );

    return (
        <BackgroundContext.Provider value={value}>
            {children}
        </BackgroundContext.Provider>
    );
}

export function useBackground(): IBackgroundContext {
    const context = useContext(BackgroundContext);

    if (!context) {
        throw new Error('useBackground must be used within a AppProvider');
    }

    return context;
}
