import {AButton} from "../components/AButton";
import React from "react";

export class MultipleChoiceQuestion extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            options: [],
        }
    }

    componentDidMount() {
        let x = [];
        for (let i in this.props.options)
            x.push([i, this.props.options[i]]);
        this.setState({options: x})
    }

    handleClick(e) {
        console.log(e)
    }

    render() {
        return <>
            <h2 className="text-center">{this.props.question}</h2>
            <div className="d-grid gap-2" onClick={(e) => {
                this.handleClick(e.target.value)
            }}>
                <>
                    {this.state.options.map(option =>
                        AButton(option[1]))
                    }
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"
                              placeholder="Please add a note to explain your answer"/>
                </>
            </div>
        </>
    }
}