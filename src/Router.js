import React from "react";
import {FrontPage} from "./views/FrontPage";
import {NotePage} from "./views/NotePage";
import {TwoOptionQuestion} from "./views/TwoOptionQuestion";
import {SingleChoiceQuestion} from "./views/SingleChoiceQuestion";
import {MultipleChoiceQuestion} from "./views/MultipleChoiceQuestion";
import {Telemetry} from "./views/Telemetry";
import {NaviPage} from "./views/NaviPage";
import {BButton} from "./components/BButton";

export class Router extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        console.log("Loading..." +  this.props.questionType, this.props.option, this.props.goNext, this.props.question)

        if(this.props.questionType === "Front Page") return FrontPage(this.props.question, this.props.option, this.props.goNext);
        if(this.props.questionType === "Text") return NotePage(this.props.question, this.props.option, this.props.goNext);
        if(this.props.questionType === "Dual Choice") return TwoOptionQuestion(this.props.question, this.props.option[1],
            this.props.option[2], this.props.goNext);
        if(this.props.questionType === "Single Choice with Other") return SingleChoiceQuestion(this.props.question, this.props.option, this.props.goNext);
        if(this.props.questionType === "Single Choice") return SingleChoiceQuestion(this.props.question, this.props.option, this.props.goNext);
        if(this.props.questionType === "Multiple Choice") return <MultipleChoiceQuestion
            question={this.props.question}
            options={this.props.option}
            goNext={this.props.goNext}
        />;
        if(this.props.questionType === "Multiple Choice or none") return <MultipleChoiceQuestion
            question={this.props.question}
            options={this.props.option}
            goNext={this.props.goNext}
        />;
        if(this.props.questionType === "Telemetry") return <Telemetry/>;
        if(this.props.questionType === "Navi") return NaviPage(
            50,
            this.props.goTo
        )

        return <>
            <h1> {this.props.questionType} </h1>
            {BButton("Error missing Question Type (above) not detected", this.props.goNext, true)}
        </>
    }
}