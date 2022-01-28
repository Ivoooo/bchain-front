import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './App.css';
import DataJSON from './components/data.json';

class Questions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: DataJSON,
        }
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

    render() {
        return <></>;
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

class YesNoQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: null
        }
    }

    render() {
        const handleClick=(e)=>{
            console.log(e.target.value)
        }
        return <>
            <h2 className="text-center">Bevor wir starten würde die Universität Zürich um den Blockchain zu verbessern
                und Statistiken zu erheben gerne ihre Daten in komplett anonymer Form sammeln.
                Sind Sie damit einverstanden?</h2>
            <div className="yes-no-grid-container" onClick={handleClick}>
                <Button
                    variant="outline-primary"
                    value="yes"
                >Yes</Button>
                <Button
                    variant="outline-primary"
                    value="no"
                >No</Button>
            </div>
        </>;
    }
}

const App = () => (
    <Container className="p-3">
        <Container className="p-5 mb-4 white rounded-3">
            <h1 className="header">Telemetry</h1>
            <YesNoQuestion/>
            <Questions></Questions>
            <div className="d-grid gap-2">
                <Button variant="outline-primary" size="lg">
                    Block level button
                </Button>
                <Button variant="outline-primary" size="lg">
                    Block level button
                </Button>
            </div>

            <ExampleToast>
                We now have Toasts
                <span role="img" aria-label="tada">
          🎉
        </span>
            </ExampleToast>
        </Container>
    </Container>
);

export default App;
