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
            maxLength,
            minLength
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
            maxLength={maxLength}
            minLength={minLength}
            $bg_color_input={$bg_color_input}
            $bg_hover_input={$bg_hover_input}
        />
    )
}

export default CampoInput;