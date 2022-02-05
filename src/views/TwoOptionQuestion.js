import "./TwoOptionQuestion.css";
import  {AButton} from "../components/AButton";

export const TwoOptionQuestion = (question, option1, option2, handleClick) => {
    return (
        <>
            <h2 className="text-center">{question}</h2>

            <div className="yes-no-grid-container" onClick={(e) => {
                handleClick(e.target.value)
            }}>
                {AButton(option1)}
                {AButton(option2)}
            </div>
        </>
    )
}