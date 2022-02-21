import React from "react";
import {FrontPage} from "./views/FrontPage";
import {NotePage} from "./views/NotePage";
import {TwoOptionQuestion} from "./views/TwoOptionQuestion";
import {SingleChoiceQuestion} from "./views/SingleChoiceQuestion";
import {MultipleChoiceQuestion} from "./views/MultipleChoiceQuestion";
import {Telemetry} from "./views/Telemetry";
import {NaviPage} from "./views/NaviPage";
import {BButton} from "./components/BButton";

export const Router = ({questionType, question, option, goNext, goTo, furthestPosition}) => {
    //todo make option and options consistent!
    console.log("Loading..." +  questionType, option, goNext, question)

    if (questionType === "Front Page") return <FrontPage question={question} option={option} handleClick={goNext}/>
    if (questionType === "Text") return NotePage(question, option, goNext)
    if (questionType === "Dual Choice") return TwoOptionQuestion(question, option[1], option[2], goNext)
    if (questionType === "Single Choice with Other") return <SingleChoiceQuestion question={question} options={option} handleClick={goNext}/>
    if (questionType === "Single Choice") return <SingleChoiceQuestion question={question} options={option} handleClick={goNext}/>
    if (questionType === "Multiple Choice") return <MultipleChoiceQuestion
        question={question}
        options={option}
        goNext={goNext}
    />
    if (questionType === "Multiple Choice or none") return <MultipleChoiceQuestion
        question={question}
        options={option}
        goNext={goNext}
    />
    if (questionType === "Telemetry") return <Telemetry/>
    if(questionType === "Navi") return <NaviPage progress={furthestPosition+50} goTo={goTo}/> //todo remove +50

    return <>
        <h1> {questionType} </h1>
        {BButton("Error missing Question Type (above) not detected", goNext, true)}
    </>
}