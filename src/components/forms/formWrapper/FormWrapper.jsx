import { Container } from "./FormWrapperStyles"

const FormWrapper = ({ children, direction }) => {
    return (
        <Container $direction={direction}>
            {children}
        </Container>
    )
}

export default FormWrapper