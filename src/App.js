import React, {Component} from 'react';
import data from './data';
import Card from './Components/Card';
import NextButton from './Components/NextButton';
import './App.css';




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myData: data
    }
    
  }

  // componentDidMount() {
  //   this.setState({index: })
  // }




  render() {
    const mappedArr = this.state.myData.map( (info, i) => {
      return <Card key={i} info={info}/> 
    })
    // console.log(mappedArr)

    return (
      <div className="App">
        <header>
          <p className='home'>Home</p>
        </header>
        <footer>
          <NextButton map={mappedArr}/>
        </footer>
      </div>
    )
  }
}

export default App;
