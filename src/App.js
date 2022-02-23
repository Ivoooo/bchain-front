import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import {Header} from "./views/Header";
import {HeaderFrontPage} from "./views/HeaderFrontPage";
import './views/Views.css';
import {Router} from "./Router";
import {NaviPage} from "./views/NaviPage";
import {QuestionHandler} from "./questions/QuestionHandler";

const App = () => {
    const [position, setPosition] = useState([0,1]);
    const [furthestPosition, setFurthestPosition] = useState([0,1]);
    const [current, setCurrent] = useState({"question": {"de":"The question will load shorty."}, "option": {"de":"Zur Umfrage"}});
    const [questionType, setQuestionType] = useState("Front Page");
    const [titles, setTitles] = useState(["Einführung"]);
    const [language, toggleLanguage] = useState("de");
    const [navi, toggleNavi] = useState(false);

    useEffect( () => {
        //update the question & corresponding type
        let q = QuestionHandler.getQuestion(position);
        setCurrent(q);
        setQuestionType(q["type"]);

        //update furthestPosition if necessary
        if(position[0] > furthestPosition[0]) setFurthestPosition(position);
        else if(position[0] === furthestPosition[0] && position[1] >= furthestPosition[1]) setFurthestPosition(position);
    }, [furthestPosition, position])

    useEffect(() => {
        setTitles(QuestionHandler.getTitles(language));
    }, [language])


    function goToChapter(chapter) { //todo also accept subchapter for navi "go back to maxQuestion"
        if(chapter === "navi") toggleNavi(true);
        else setPosition([chapter][1]);
    }

    function goNext(prevAnswer) {
        if(prevAnswer !== null) console.log("Given answer is: " + prevAnswer.target.value)
        else console.log("Pressed next but no answer was given")

        let q = QuestionHandler.getNextStep(position);
        setPosition(q);
    }

    function goBack()  {
        setPosition(QuestionHandler.getLastStep(position));
    }

    function swapLanguage() {
        if(language === "de") toggleLanguage("en")
        else toggleLanguage("de")
    }

    /*
    componentDidMount() {
        //todo remove state
        console.log(this.state.data)
        localStorage.clear() // todo REMOVE
        //if the user has never used the website before a new progress tracker will be created:
        if (!localStorage.getItem("data")) {
            // todo localStorage.setItem("data", DataJSON)
            localStorage.setItem("version", "1.0") //if there are any major updates that could break compatibility this may be of use
        } //todo connect version to settings
        this.setState({data: localStorage.getItem("data")})

        this.loadPage(this.state.position);
    }*/

    return <Container>
        {(position[0] === 0 && position[1] === 1) || navi  ?
            <HeaderFrontPage language={language}
                             changeLanguage={swapLanguage}
            />
            : <Header className="head"
                      now={position}
                      max={5}
                      goToChapter={goToChapter}
                      goBack={goBack}
                      language={language}
                      changeLanguage={swapLanguage}
            />
        }
        <div className="p-3">
            <h1 className="header">{titles[position[0]]}</h1>
            <div className="p-5 mb-4 white rounded-3">
                {navi ?
                    <NaviPage progress={5}
                              maxProgress={[2,2]}
                              titles={["einfürhug"]}
                              goToChapter={goToChapter}
                              toggleNavi={toggleNavi}
                              language={language}
                    />
                    : <Router questionType={questionType}
                              question={current["question"][language]}
                              option={current["option"][language]}
                              goNext={goNext}
                    />
                }
            </div>
        </div>
    </Container>
}

export default App;
