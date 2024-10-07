import { Input } from "./InputStyles";

const CampoInput = (
        {
            type,
            id,
            placeholder,
            value,
            autoComplete,
            onChange,
            required,
            $bg_color_input,
            $bg_hover_input,
            maxlength,
            minlength
        }) => {
    return (
        <Input 
            type={type} 
            id={id} 
            placeholder={placeholder} 
            value={value} 
            autoComplete={autoComplete} 
            onChange={onChange} 
            required={required}
            maxlength={maxlength}
            minlength={minlength}
            $bg_color_input={$bg_color_input}
            $bg_hover_input={$bg_hover_input}
        />
    )
}

export default CampoInput;