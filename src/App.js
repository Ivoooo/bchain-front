import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import DataJSON from './components/data.json';
import {TwoOptionQuestion} from "./views/TwoOptionQuestion";
import {SingleChoiceQuestion} from "./views/SingleChoiceQuestion";
import {MultipleChoiceQuestion} from "./views/MultipleChoiceQuestion";
import {Header} from "./views/Header";
import {BButton} from "./components/BButton";
import {AButton} from "./components/AButton";
import {FrontPage} from "./views/FrontPage";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            position: -1,
            current: {"Question": "Willkommmen beim Blockchainguide der Universität Zürich. Dieser Fragebogen ist ein Tool für staatliche und private Einrichtungen um zu evaluieren ob für einen bestimmten Anwendungsfall die Benützung einer Blochchain einen Vorteil bringen könnte. \n Der Blockchainguide basiert auf dem von der Universität und Kanton Zürich erarbeiteten Blockchain Guide (todo hyperlink). Eine kurze Zusammenfassung finden sie hier (todo). Wir empfehlen die Zusammenfassung zu lesen für ein besseres Verständnis aber es nicht nicht essenziell.",
                "Options": "Zur Umfrage"},
            next: null,
            qqs: [[0,1],[1,1],[1,2],[1,3],[2,1],[2,2],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[5,1]],
            data: null,
            questionType: "Front Page",
            title: "a",
        }

        this.goNext = this.goNext.bind(this)
    }

    goNext(newNext) {
        console.log("AAAAAAAAa")
        console.log(this.state.position, this.state.qqs, this.state.questionType, this.state.title, this.state.current)
        this.setState({next: newNext})
        let tmp = this.state.position + 1
        this.setState({position: tmp})
        let q = this.state.qqs[tmp]
        console.log(this.state.qqs[this.state.position])
        this.setState({questionType: DataJSON[q[0]]["Fragen"][q[1]]["Type"],
            current: DataJSON[q[0]]["Fragen"][q[1]],
            title: DataJSON[q[0]]["Title"]["Deutsch"]
        })
        console.log(newNext)

        console.log("dddd")
        console.log(this.state.position, this.state.qqs, this.state.questionType, this.state.title, this.state.current)
    }

    componentDidMount() {
        //todo remove state
        console.log(this.state.data)
        localStorage.clear() // todo REMOVE
        //if the user has never used the website before a new progress tracker will be created:
        if (!localStorage.getItem("data")) {
            localStorage.setItem("data", DataJSON)
            localStorage.setItem("version", "1.0") //if there are any major updates that could break compatibility this may be of use
        }
        this.setState({data: localStorage.getItem("data")})

        if(this.state.position < 0){
            this.goNext(null);
        }
    }

    getTwoOptionQuestion() {
        return(
            TwoOptionQuestion(this.state.current.Question,
                this.state.current.Options[1],
                this.state.current.Options[2],
                this.goNext
            )
        )
    }

    getSingleChoiceQuestion() {
        return(
            SingleChoiceQuestion(this.state.current.Question,
            this.state.current.Options,
            this.goNext
            )
        )
    }

    getMultipleChoiceQuestion() {
        return <MultipleChoiceQuestion
            question={this.state.current.Question}
            options={this.state.current.Options}
        />;
    }

    getNextButton() {
        return <div style={{float: "right"}}>
            {BButton("Next", this.goNext, false)}
        </div>
    }

    getWelcome() {
        BButton("Start!!", this.goNext, false)
    }

    getPass() {

    }

    getFrontPage() {
        return(
            FrontPage(this.state.current.Question,
                this.state.current.Options,
                this.goNext
            )
        );
    }

    getNextPage() {
        if(this.state.questionType === "Front Page") return this.getFrontPage()
        if(this.state.questionType === "Text") return this.getFrontPage()
        if(this.state.questionType === "Dual Choice") return this.getTwoOptionQuestion()
        if(this.state.questionType === "Single Choice with Other") return this.getSingleChoiceQuestion()
        if(this.state.questionType === "Single Choice") return this.getSingleChoiceQuestion()
        if(this.state.questionType === "Multiple Choice") return this.getMultipleChoiceQuestion()
        if(this.state.questionType === "Multiple Choice or none") return this.getMultipleChoiceQuestion()
    }

    render() {
        return <Container>
            <Header className="head" now={20}/>
            <Container className="p-3">
                <h1 className="header">{this.state.title}</h1>
                <Container className="p-5 mb-4 white rounded-3">
                    {this.getNextPage()}
                </Container>
                {this.getNextButton()}
            </Container>
        </Container>
    }
}

export default App;
