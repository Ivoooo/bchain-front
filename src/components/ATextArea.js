import {FloatingLabel, Form} from "react-bootstrap";

//https://react-bootstrap.github.io/forms/floating-labels/

export function ATextArea({txt = "ATextArea no Text", saveAnswer}) {
    return (
        <FloatingLabel controlId="floatingTextarea" label="Text:">
            <Form.Control
                as="textarea"
                placeholder={txt}
                style={{ height: '100px' }}
                onChange={(e) => saveAnswer(e.target.value)}
            />
        </FloatingLabel>
    )
}