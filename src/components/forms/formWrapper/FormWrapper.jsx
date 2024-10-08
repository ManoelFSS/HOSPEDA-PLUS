import { Container } from "./FormWrapperStyles"

const FormWrapper = ({ children, direction, directionText }) => {
    return (
        <Container $direction={direction} $directionText={directionText}>
            {children}
        </Container>
    )
}

export default FormWrapper