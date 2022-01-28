import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './App.css';

class Questions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            questions:['Telemetry', 'Bevor wir starten würde die Universität Zürich um den Blockchain zu verbessern und Statistiken zu erheben gerne ihre Daten in komplett anonymer Form sammeln. Sind Sie damit einverstanden?']
        }
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

const App = () => (
    <Container className="p-3">
      <Container className="p-5 mb-4 white rounded-3">
        <h1 className="header">Telemetry</h1>
          <h2 className="text-center">Bevor wir starten würde die Universität Zürich um den Blockchain zu verbessern und Statistiken zu erheben gerne ihre Daten in komplett anonymer Form sammeln.
              Sind Sie damit einverstanden?</h2>
          <div className="grid-container">
              <Button variant="outline-primary">Primary</Button>
              <Button variant="outline-primary">Primary</Button>
          </div>

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
