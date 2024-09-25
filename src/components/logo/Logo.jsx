import { Container_Image } from "./LogoStyles";

const Logo = ({image}) => {
    return (
        <Container_Image>
            <img src={image} alt="logo" />
        </Container_Image>
    )
}

export default Logo;