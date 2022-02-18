import {AButton} from "../components/AButton";

export const FrontPage = (question, option, handleClick) => {
    return (
        <>
            <h2 className="text-center">{question}</h2>

            <div className="yes-no-grid-container" onClick={(e) => {
                handleClick(e.target.value)
            }}>
                {AButton(option)}
            </div>
        </>
    )
}