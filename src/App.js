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
    const [answer, setAnswer] = useState({0:{}, 1: {}, 2: {}, 3:{}, 4:{}, 5:{}, 6:{}});


    useEffect(() => {
        if (!localStorage.getItem("data")) localStorage.setItem("version", "1.0") //todo get version from file
    }, []) //since no variable is at the end here it's basically "componentDidMount". So this function is executed
    //just once at the beginning


    useEffect( () => {
        console.log(position);

        //update the question & corresponding type
        let q = QuestionHandler.getQuestion(position);
        setCurrent(q);
        setQuestionType(q["type"]);
        console.log(q)

        //update furthestPosition if necessary
        if(position[0] > furthestPosition[0]) setFurthestPosition(position);
        else if(position[0] === furthestPosition[0] && position[1] >= furthestPosition[1]) setFurthestPosition(position);
    }, [furthestPosition, position]) //here the function is executed every time furthestPosition or position
        //is updated. Also, at the beginning since it goes from null to the given start state above

    useEffect(() => {
        setTitles(QuestionHandler.getTitles(language));
    }, [language])


    function goTo([chapter, part=1]) {
        setPosition([chapter,part]);
        toggleNavi(false);
    }

    function goNext(prevAnswer) {
        if(prevAnswer !== null) {
            console.log("Given answer is: " + prevAnswer);
            let a = answer;
            a[position[0]][position[1]] = prevAnswer;
            setAnswer(a);
            console.log(answer);
        }
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

    return <Container>
        {(position[0] === 0 && position[1] === 1) || navi  ?
            <HeaderFrontPage language={language}
                             changeLanguage={swapLanguage}
            />
            : <Header className="head"
                      position={position}
                      goBack={goBack}
                      language={language}
                      changeLanguage={swapLanguage}
                      toggleNavi={toggleNavi}
            />
        }
        <div className="p-3">
            <h1 className="header">{titles[position[0]]}</h1>
            <div className="p-5 mb-4 white rounded-3">
                {navi ?
                    <NaviPage furthestPosition={furthestPosition}
                              titles={titles}
                              goTo={goTo}
                              toggleNavi={toggleNavi}
                              language={language}
                    />
                    : <Router language={language}
                              questionType={questionType}
                              question={current["question"][language]}
                              option={current["option"][language]}
                              goNext={goNext}
                              position={position}
                              titles={titles}
                    />
                }
            </div>
        </div>
    </Container>
}

export default App;
