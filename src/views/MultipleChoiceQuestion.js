import React, {useEffect, useState} from "react";
import {AButtonWithCommentOnClick} from "../components/AButtonWithCommentOnClick";
import {AButton} from "../components/AButton";

export const MultipleChoiceQuestion = ({question, option, goNext}) =>{
    //states
    const [answer, setAnswer] = useState([]);
    const [disabled, setDisabled] = useState(true);
    const [incorrect, setIncorrect] = useState(false);
    const [newOption, setNewOption] = useState([]);
    const [newQuestion, setNewQuestion] = useState([])

    //this is the equivalent to ComponentDidMount of classes.
    useEffect(() => {
        //building iterable Option, Answer & Question
        let x = [], y = [];
        for (let i in option) {
            x.push(option[i]);
            y.push(false);
        }
        setNewOption(x);
        setAnswer(y);
        setNewQuestion(question.split("\n"));
    }, [option, question]);

    function handleClick(e) {
        let idx = newOption.indexOf(e);
        let a = answer;
        a[idx] = !a[idx];
        setAnswer(a);

        checkDisabled();
    }

    function checkDisabled() {
        let hasTrues = false;
        for(let i=0; i < answer.length-1; i++) {
            if(answer[i]) {
                hasTrues = true;
                break;
            }
        }
        let last = answer[answer.length-1]
        console.log(answer, hasTrues, last)
        console.log(hasTrues && last)
        setIncorrect(hasTrues && last);
        setDisabled(!hasTrues && !last);
    }

    return <>
        {newQuestion.map(qs =>
            <h2 className="text-center">{qs}</h2>
        )}

        <div className="d-grid gap-2">
            {newOption.map(o =>
                <AButtonWithCommentOnClick txt={o} key={o} handleClick={handleClick}/>
            )}
        </div>
        <div style={{float: "right"}}>
            {incorrect ? <h4 className="text-center">{"Die letzte Option und alle anderes sind exklusiv. Bitte ändern sie ihre Auswahl."}</h4>
                : <AButton txt={"Next"} onClick={goNext} disabled={disabled} key={"Next"}/>
            }
        </div>
    </>
}