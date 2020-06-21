import React, {Component} from 'react';



class NextButton extends Component{

    constructor(props){
        super(props);

        this.state ={
            peopleArr : this.props.map,
            index: 0,
            displayCurrentIndex: 1,
            displayTotalIndex: 25
        }
        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
    }


    handleNext() {
        if(this.state.index === 24) {
            this.state.index = 0;
            this.displayCurrentIndex = 1;
        } else {
            this.state.index += 1;
            this.state.displayCurrentIndex += 1;
        }
        this.setState({
            index: this.state.index,
            displayCurrentIndex: this.state.displayCurrentIndex
        })
    }

    handlePrevious() {
        if(this.state.index > 0) {
            this.state.index -= 1;
            this.state.displayCurrentIndex -= 1;
        } else {
            this.state.index = 0;
        }

        this.setState({
            index : this.state.index,
            displayCurrentIndex: this.state.displayCurrentIndex
        })

    }




    render() {

        // console.log(this.state.peopleArr)
        // console.log(this.state.peopleArr.index)
        console.log(this.state.index)
        return (
            <div>
                <h3>{this.state.displayCurrentIndex} / {this.state.displayTotalIndex}</h3>
                <section>{this.state.peopleArr[this.state.index]}</section>
                <button onClick={this.handlePrevious}>Previous</button>
                <button onClick={this.handleNext}>Next</button>
            </div>
        )
    }
}

export default NextButton;