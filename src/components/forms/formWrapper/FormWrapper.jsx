import { Container } from "./FormWrapperStyles"

const FormWrapper = ({ children, direction, directionText, maxWidth }) => {
    return (
        <Container 
            $direction={direction} 
            $directionText={directionText}
            style={{maxWidth: maxWidth}}
        >
            {children}
        </Container>
    )
}

export default FormWrapper