import React, {Component} from 'react';



class NextButton extends Component{

    constructor(props){
        super(props);

        this.state ={
            peopleArr : this.props.map
        }
    }




    render() {
        console.log(this.state.peopleArr)
        return (
            <div>
                <section>{this.state.peopleArr[0]}</section>
                <button>Previous</button>
                <button>Next</button>
            </div>
        )
    }
}

export default NextButton;