import { Button } from "./BtnStyles";

const Btn = ({text, onClick}) => {
    return (
        <Button type="submit" value={text} onClick={onClick} />
    )
}

export default Btn;