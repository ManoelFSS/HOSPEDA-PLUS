import { Input } from "./InputStyles";

const CampoInput = ({type, id, placeholder, value, autoComplete, onChange, required, $bg_color_input, $bg_hover_input   }) => {
    return (
        <Input 
            type={type} 
            id={id} 
            placeholder={placeholder} 
            value={value} 
            autoComplete={autoComplete} 
            onChange={onChange} 
            required={required}
            $bg_color_input={$bg_color_input}
            $bg_hover_input={$bg_hover_input}
        />
    )
}

export default CampoInput;