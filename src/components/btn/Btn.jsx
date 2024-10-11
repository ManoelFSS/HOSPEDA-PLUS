import { Button } from "./BtnStyles";

const Btn = ( {type, value, $width,  $bg_color, $bg_hover, onClick, color} ) => {
    return (
        <Button  
            type={type} 
            value={value} 
            $width={$width} 
            $bg_hover={$bg_hover}
            $bg_color={ $bg_color} 
            onClick={onClick} 
            style={{color: color}}
        />
    )
}

export default Btn;