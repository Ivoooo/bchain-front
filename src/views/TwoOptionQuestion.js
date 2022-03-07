import {AButton} from "../components/AButton";

export const TwoOptionQuestion = ({question, option, handleClick}) => {
    return (
        <div className = "dual-choice-container">
            <h2 className="text-center">{question}</h2>

            <div className="two-option-grid-container">
                <AButton txt={option[0]} onClick={(e) => handleClick(e.target.value)}/>
                <AButton txt={option[1]} onClick={(e) => handleClick(e.target.value)}/>
            </div>
        </div>
    )
}