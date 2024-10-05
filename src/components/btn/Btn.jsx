import { Button } from "./BtnStyles";

const Btn = ( {type, value, $width,  $bg_color, $bg_hover, onClick} ) => {
    return (
        <Button  
            type={type} 
            value={value} 
            $width={$width} 
            $bg_hover={$bg_hover}
            $bg_color={ $bg_color} 
            onClick={onClick} 
        />
    )
}

export default Btn;