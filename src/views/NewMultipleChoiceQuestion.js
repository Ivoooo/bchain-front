import React, {useEffect, useState} from "react";
import {AButtonWithCommentOnClick} from "../components/AButtonWithCommentOnClick";
import {AButton} from "../components/AButton";

export const NewMultipleChoiceQuestion = ({question, option, goNext}) =>{
    //states
    const [answer, toggleAnswer] = useState([]);
    const [disabled, toggleDisabled] = useState(true);
    const [incorrect, toggleIncorrect] = useState(false);
    const [newOption, toggleNewOption] = useState([]);

    useEffect(() => {
        //building iterable Option, Answer & Question
        let x = [], y = [];
        for (let i in option) {
            x.push(option[i]);
            y.push(false);
        }
        toggleNewOption(x);
        toggleAnswer(y);
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    }, [/*question, option*/]);

    function handleClick(e) {
        console.log(e)
        let idx = newOption.indexOf(e);
        let a = answer;
        a[idx] = !a[idx];
        toggleAnswer(a);
        console.log(e, idx, answer)

        checkDisabled();
    }

    function checkDisabled() {
        //check if options are allowed
        //todo use includes
        let hasTrues = false
        for(let i=0; i < answer.length-1; i++) {
            if(answer[i]) {
                hasTrues = true;
                break;
            }
        }
        let last = answer[answer.length-1]
        toggleIncorrect(last && hasTrues);
        toggleDisabled(hasTrues + last);
    }

    let q = question.split("\n");

    console.log(q, newOption, incorrect)
    return <>
        {q.map(qs =>
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