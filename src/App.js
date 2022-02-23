import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import {Header} from "./views/Header";
import {HeaderFrontPage} from "./views/HeaderFrontPage";
import './views/Views.css';
import {Router} from "./Router";
import {NaviPage} from "./views/NaviPage";
import {QuestionHandler} from "./questions/QuestionHandler";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            position: [0,1],
            furthestPosition: [0,1],

            current: {"question": {"de":"The question will load shorty."}, "option": {"de":"Zur Umfrage"}},
            questionType: "Front Page",
            title: "Please wait",

            next: null,
            language: "de"
        }

        this.goNext = this.goNext.bind(this)
        this.goTo = this.goTo.bind(this)
        this.changeLanguage = this.changeLanguage.bind(this)
    }

    loadPage(pageId) {
        console.log("Previous Page loaded " + this.state.position, this.state.questionType, this.state.title, this.state.current)
        console.log(pageId)
        let q = QuestionHandler.getQuestion(pageId);
        console.log(q)
        //todo decide if position should be saved here or before, position has more than needed.
        //todo update title
        this.setState({
            current: q,
            position: pageId,
            questionType: q["type"]
        })

        /*if(this.state.furthestPosition < pageId) {
            this.setState({furthestPosition: pageId})
        }*/
    }

    goTo(pageId) {
        if(pageId === "Navi") {
            this.setState({questionType: "Navi", title: "Navigation"});
        }
        else {
            this.loadPage(parseInt(pageId));
        }
    }

    goNext(newNext) {
        console.log("Given answer is: ")
        if(newNext !== null) console.log(newNext.target.value)
        else console.log(null)

        let q = QuestionHandler.getNextStep(this.state.position);
        this.loadPage(q)
    }

    changeLanguage() {
        if(this.state.language === "de") this.setState({language: "en"})
        else this.setState({language: "de"})
    }

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
    }

    render() {
        return <Container>
            {this.state.position === 0 || this.state.questionType === "Navi"  ?
                <HeaderFrontPage language={this.state.language}
                                 changeLanguage={this.changeLanguage}
                />
                : <Header className="head"
                          now={this.state.position}
                          max={/*this.state.qqs.length*/ 5}
                          goTo={this.goTo}
                          language={this.state.language}
                          changeLanguage={this.changeLanguage}
                />
            }
            <div className="p-3">
                <h1 className="header">{this.state.title}</h1>
                <div className="p-5 mb-4 white rounded-3">
                    {this.state.questionType === "Navi" ?
                        <NaviPage progress={this.state.position}
                                  chapter={[1,5,6,15,25,35]/*todo make this generate automatically*/}
                                  maxProgress={this.state.furthestPosition}
                                  goTo={this.goTo}
                                  language={this.state.language}
                        />
                        : <Router questionType={this.state.questionType}
                                  question={this.state.current["question"][this.state.language]}
                                  option={this.state.current["option"][this.state.language]}
                                  goNext={this.goNext}
                        />
                    }
                </div>
            </div>
        </Container>
    }
}

export default App;
