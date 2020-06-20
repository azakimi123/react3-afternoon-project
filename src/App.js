import React, {Component} from 'react';
import data from './data';
import Card from './Components/Card';
import './App.css';




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myData: data
    }
    
  }

  // componentDidMount() {
  //   this.setState({myData: data})
  // }




  render() {
    const mappedArr = this.state.myData.map( (info, i) => {
      return <Card key={i} info={info}/>
    })

    return (
      <div className="App">
        <header>Home</header>
        {mappedArr}
      </div>
    )
  }
}

export default App;
