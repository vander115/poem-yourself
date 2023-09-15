import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useMemo,
    useState,
    useCallback,
    useRef,
    RefObject,
} from 'react';
import { toPng } from 'html-to-image';

interface IPoemContext {
    title: string;
    text: string;
    author: string;
    paragraphs: string[];
    stepIndex: number;
    poemRef: RefObject<HTMLDivElement>;
    handleDownloadImage: () => Promise<void>;
    transformText: (text: string) => void;
    setTitle: Dispatch<SetStateAction<string>>;
    setText: Dispatch<SetStateAction<string>>;
    setAuthor: Dispatch<SetStateAction<string>>;
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
    const [author, setAuthor] = useState('');
    const [paragraphs, setParagraphs] = useState<string[]>([]);
    const [stepIndex, setStepIndex] = useState<number>(1);
    const poemRef = useRef<HTMLDivElement>(null);

    const transformText = useCallback((text: string) => {
        const paragraphs = text.split('\n');
        // const paragraphsHTML = paragraphs.map(
        //     (paragraph) => `<p>${paragraph}</p>`,
        // );
        setParagraphs(paragraphs);
        setText(text);
    }, []);

    const handleDownloadImage = useCallback(async () => {
        if (poemRef.current === null) {
            return;
        }
        console.log(poemRef.current);
        try {
            const dataUrl = await toPng(poemRef.current, {
                cacheBust: true,
                pixelRatio: 3,
            });
            const link = document.createElement('a');
            link.download = 'html-to-img.png';
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.log(err);
        }
    }, [poemRef]);

    const value = useMemo(
        () => ({
            title,
            text,
            author,
            paragraphs,
            stepIndex,
            poemRef,
            handleDownloadImage,
            setStepIndex,
            setText,
            setTitle,
            setAuthor,
            setParagraphs,
            transformText,
        }),
        [
            title,
            text,
            author,
            paragraphs,
            stepIndex,
            poemRef,
            handleDownloadImage,
            setStepIndex,
            setText,
            setTitle,
            setAuthor,
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
