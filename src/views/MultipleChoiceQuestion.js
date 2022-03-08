import React, {useCallback, useEffect, useState} from "react";
import {AButtonWithCommentOnClick} from "../components/AButtonWithCommentOnClick";
import {AButton} from "../components/AButton";

export const MultipleChoiceQuestion = ({language, question, option, goNext, prevAnswer, prevNote}) =>{
    //states
    const [newOption, setNewOption] = useState([]);
    const [newQuestion, setNewQuestion] = useState([]);
    const [answer, setAnswer] = useState([]);
    const [notes, setNotes] = useState([]);
    const [disabled, setDisabled] = useState(true);
    const [incorrect, setIncorrect] = useState(false);

    useEffect(() => {
        //building iterable Option, Answer & Question
        let x = [], y = [];
        for (let i in option) {
            x.push(option[i]);
            y.push(false);
        }
        setNewQuestion(question.split("\n"));
        setNewOption(x);
        setAnswer(y);
    }, [option, question]);

    //calculates if incorrect of next button should be disabled
    //can't use useEffect since size of array never changes and doesn't check content.
    const checkDisabled = useCallback(() => {
        let hasTrues = false;
        for(let i=0; i < answer.length-1; i++) {
            if(answer[i]) {
                hasTrues = true;
                break;
            }
        }
        let last = answer[answer.length-1]

        setIncorrect(hasTrues && last);
        setDisabled(!hasTrues && !last);
    }, [answer])

    useEffect(() => {
        checkDisabled();
    }, [answer, checkDisabled])

    useEffect(() => {
        let tmp = [], n = [];
        if(prevAnswer !== []) {
            for(let i=0; i<option.length; ++i) {
                tmp.push(false);
                n.push(null)
            }
            for(let i=0; i<prevAnswer.length; ++i) {
                tmp[prevAnswer[i]] = true;
                n[prevAnswer[i]] = prevNote[i];
            }
        }
        console.log(n);
        setAnswer(tmp);
        setNotes(n);
    }, [option.length, prevAnswer, prevNote])

    function handleClick(option, bool, note) {
        let idx = newOption.indexOf(option);
        let a = answer;
        a[idx] = bool;
        setAnswer(a);

        let b = notes;
        b[idx] = note;
        console.log(b)
        setNotes(b);

        checkDisabled();
    }

    //builds the answer array and goes next.
    function handleNext() {
        let a = [],b = [];
        for(let i=0; i < answer.length; i++) {
            if(answer[i]) {
                a.push(newOption[i]);
                b.push(notes[i]);
            }
        }
        goNext(a, b);
    }

    return <>
        {newQuestion.map(qs =>
            <h2 className="text-center">{qs}</h2>
        )}

        <div className="d-grid gap-2">
            {newOption.map((o, id) =>
                <AButtonWithCommentOnClick txt={o} key={id} handleClick={handleClick} language={language} isClicked={answer[id]} prevNote={prevNote[id]}/>
            )}
        </div>
        <div style={{float: "right"}}>
            {incorrect ? <h4 className="text-center">{language === "de" ? "Die letzte Option und alle anderes sind exklusiv. Bitte ändern sie ihre Auswahl."
                    : "The last option and all others are mutually exclusive. Please change your answer"}</h4>
                : <AButton txt={"Next"} onClick={handleNext} disabled={disabled} key={"Next"}/>
            }
        </div>
    </>
}