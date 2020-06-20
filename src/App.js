import React, {Component} from 'react';
// import data from './data';
import Card from './Components/Card';
import './App.css';




class App extends Component {
  constructor(props) {
      super(props) 

      this.state = {
          data: [{
            id: 1,
            firstName: "Waylin", 
            lastName: "Lumsdon" ,
            city: "Likiep",
            country: "Marshall Islands",
            employer: "Twinder",
            title: "Physical Therapy Assistant",
            favoriteMovies: [
              "That Night in Varennes (Nuit de Varennes, La)",
              "Spy(ies) (Espion(s))",
              "Klip (Clip)"
            ]
          },
          {
            id: 2,
            firstName: "Hastie", 
            lastName: "Beardsdale" ,
            city: "Dzvinogrud",
            country: "Ukraine",
            employer: "Vinte",
            title: "Data Coordiator",
            favoriteMovies: [
              "Camp",
              "Her Highness and the Bellboy",
              "Mona and the Time of Burning Love (Mona ja palavan rakkauden aika))"
            ]
          }]
      }
  }

  // componentDidMount() {
  //   this.setState({myData: data})
  // }




  render() {
    const mappedArr = this.state.data.map( (info, i) => {
      return <Card key={i} info={info}/>
      console.log(i)
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
