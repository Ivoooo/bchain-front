import React, {useState} from 'react';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './App.css';
import DataJSON from './components/data.json';
import {TwoOptionQuestion} from "./views/TwoOptionQuestion";
import {SingleChoiceQuestion} from "./views/SingleChoiceQuestion";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: DataJSON["1"],
            next: null,
        }

        this.goNext = this.goNext.bind(this)
    }

    goNext(newNext) {
        this.setState({next: newNext})
        console.log(newNext)
    }

    componentDidMount() {
        //todo remove state
        console.log(this.state.data)
        //if the user has never used the website before a new progress tracker will be created:
        if (!localStorage.getItem("data")) {
            localStorage.setItem("data", DataJSON)
            localStorage.setItem("version", "1.0") //if there are any major updates that could break compatibility this may be of use
        }
        this.setState({data: localStorage.getItem("data")})
    }

    getTwoOptionQuestion() {
        return null
        return(
            TwoOptionQuestion(this.state.current.QuestionContainer[1].Question,
                this.state.current.QuestionContainer[1].Options[1],
                this.state.current.QuestionContainer[1].Options[2],
                this.goNext
            )
        )
    }

    getSingleChoiceQuestion() {
        return(
            SingleChoiceQuestion(this.state.current.QuestionContainer[1].Question,
            this.state.current.QuestionContainer[1].Options,
            this.goNext
            )
        )
    }

    render() {
        return <Container className="p-3">
            <Container className="p-5 mb-4 white rounded-3">
                <h1 className="header">{this.state.current.Title}</h1>
                {this.getTwoOptionQuestion()}
                {this.getSingleChoiceQuestion()}

                <ExampleToast>
                    We now have Toasts
                    <span role="img" aria-label="tada">🎉</span>
                </ExampleToast>
            </Container>
        </Container>
    }
}

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
      <>
        {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
        <Toast show={show} onClose={() => toggleShow(false)}>
          <Toast.Header>
            <strong className="mr-auto">React-Bootstrap</strong>
          </Toast.Header>
          <Toast.Body>{children}</Toast.Body>
        </Toast>
      </>
  );
};

export default App;
