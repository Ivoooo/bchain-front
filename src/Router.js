import React from "react";
import {NotePage} from "./views/NotePage";
import {TwoOptionQuestion} from "./views/TwoOptionQuestion";
import {SingleChoiceQuestion} from "./views/SingleChoiceQuestion";
import {MultipleChoiceQuestion} from "./views/MultipleChoiceQuestion";
import {Telemetry} from "./views/Telemetry";
import {AButton} from "./components/AButton";
import {InfoPage} from "./views/InfoPage";
import {Overview} from "./views/Overview";

export const Router = ({language, questionType, question, option, goNext, position, titles, prevAnswer, prevNote}) => {
    console.log("Loading..." +  questionType, option, goNext, question)

    if (questionType === "Front Page") return <InfoPage question={question} option={option} handleClick={goNext}/>
    if (questionType === "Text") return <NotePage question={question} option={option} handleClick={goNext} prevNote={prevNote}/>
    if (questionType === "Dual Choice") return <TwoOptionQuestion question={question} option={option} handleClick={goNext} prevAnswer={prevAnswer}/>
    if (questionType === "Single Choice with Other") return <SingleChoiceQuestion question={question} option={option} handleClick={goNext} prevAnswer={prevAnswer}/>
    if (questionType === "Single Choice") return <SingleChoiceQuestion question={question} option={option} handleClick={goNext} prevAnswer={prevAnswer}/>
    if (questionType === "Multiple Choice") return <MultipleChoiceQuestion language={language} question={question} option={option} goNext={goNext} prevAnswer={prevAnswer} prevNote={prevNote}/>
    if (questionType === "Multiple Choice or none") return <MultipleChoiceQuestion language={language} question={question} option={option} goNext={goNext} prevAnswer={prevAnswer} prevNote={prevNote}/>
    if (questionType === "Telemetry") return <Telemetry/>
    if (questionType === "Overview") return <Overview question={question} position={position} titles={titles} option={option} handleClick={goNext} language={language}/>

    return <>
        <h1> {questionType} </h1>
        <AButton txt={"Error missing Question Type (above) not detected"} onClick={goNext} />
    </>
}