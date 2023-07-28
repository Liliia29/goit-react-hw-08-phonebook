import {Container, Title} from './Home.styled';
import { Helmet } from 'react-helmet';

export default function Home() {
    return (
        <>
        <Helmet>
            <title>Phonebook</title>
        </Helmet>
        <Container>
            <Title>Welcome to the Phonebook!</Title>
        </Container>
        </>
    );
}