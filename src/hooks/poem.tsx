import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useMemo,
    useState,
    useCallback,
} from 'react';
import { StepIndexType } from '../@types/stepIndex';

interface IPoemContext {
    title: string;
    text: string;
    paragraphs: string[];
    stepIndex: StepIndexType;
    transformText: (text: string) => void;
    setTitle: Dispatch<SetStateAction<string>>;
    setText: Dispatch<SetStateAction<string>>;
    setParagraphs: Dispatch<SetStateAction<string[]>>;
    setStepIndex: Dispatch<SetStateAction<number>>;
}

interface IPoemProviderProps {
    children: ReactNode;
}

const PoemContext = createContext<IPoemContext>({} as IPoemContext);

export function PoemProvider({ children }: IPoemProviderProps) {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [paragraphs, setParagraphs] = useState<string[]>([]);
    const [stepIndex, setStepIndex] = useState<number>(1);

    const transformText = useCallback((text: string) => {
        const paragraphs = text.split('\n');
        // const paragraphsHTML = paragraphs.map(
        //     (paragraph) => `<p>${paragraph}</p>`,
        // );
        setParagraphs(paragraphs);
    }, []);

    const value = useMemo(
        () => ({
            title,
            text,
            paragraphs,
            stepIndex,
            setStepIndex,
            setText,
            setTitle,
            setParagraphs,
            transformText,
        }),
        [
            title,
            text,
            paragraphs,
            stepIndex,
            setStepIndex,
            setText,
            setTitle,
            setParagraphs,
            transformText,
            setStepIndex,
        ],
    );

    return (
        <PoemContext.Provider value={value}>{children}</PoemContext.Provider>
    );
}

export function usePoem(): IPoemContext {
    const context = useContext(PoemContext);

    if (!context) {
        throw new Error('usePoem must be used within a AppProvider');
    }

    return context;
}
