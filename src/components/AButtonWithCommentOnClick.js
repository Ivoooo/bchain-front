import React, {useState} from "react";
import {BButton} from "./BButton";
import {ATextArea} from "./ATextArea";

export const AButtonWithCommentOnClick = ({ txt="c" }) => {
    const [show, toggleShow] = useState(true);

    function change() {
        toggleShow(!show);
    }

    return (
        <>
            {BButton(txt, change, show)}
            {!show && ATextArea()}

            {/*{AButton(msg)}*/}
            {/*{this.state.question1 && <ATextArea/>}*/}
            {/*{BButton('123', 5)}*/}
        </>
    );
};