import React from "react";
import {QuestionHandler} from "../questions/QuestionHandler";

export const FinalPage = ({answeredQuestions, language}) => {
    const q = QuestionHandler.getQuestionList();

    return (
        <>
            <h3 className="text-center" key={"Title"}>{"use this blockchain"}</h3>

            {q.map(qs => {
                const key = qs[0].toString() + "." + qs[1].toString();
                if(QuestionHandler.getQuestion(qs)["type"] === "Single Choice" ||
                    QuestionHandler.getQuestion(qs)["type"] === "Dual Choice") {
                    return (<h3 className="text-center" key={key}>{"option"}</h3>)
                }

                if(QuestionHandler.getQuestion(qs)["type"] === "Text") {
                    return <h3 className="text-center" key={key}>{"text"}</h3>
                }

                if(QuestionHandler.getQuestion(qs)["type"] === "Multiple Choice or none") {
                    return <h3 className="text-center" key={key}>{"mutli"}</h3>
                }

                return null;
            }
            )}
        </>
    )
}