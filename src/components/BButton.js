import Button from "react-bootstrap/Button";

export const BButton = (txt="e", onClick=null, isClicked=false) => (
    <Button
        variant={isClicked ? "outline-primary" : "primary"}
        size="lg"
        value={txt}
        onClick={onClick}
    >{txt}</Button>
)