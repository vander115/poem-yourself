import { FormContainer, HomeContainer, TextContainer } from './styles';
import { PoemForm } from './containers/PoemForm';
import { PoemBody } from './containers/PoemBody';

export function Home() {
    return (
        <HomeContainer>
            <TextContainer>
                <PoemBody />
            </TextContainer>
            <FormContainer>
                <PoemForm />
            </FormContainer>
        </HomeContainer>
    );
}
