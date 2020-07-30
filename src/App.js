// Below is the import for the functional components
// import react from 'react';

//import for class components
import React, { Component } from 'react';
//import people from people
import People from './people';

import AddPerson from './addPerson';


class App extends Component{
  
  state = {
    listOfPeople: [
      {name: "KaiHhhA", age: 76, favoriteFood: "Chicken nuggets", id: 1},
      {name: "Austin", age: 2, favoritFood: "Nasty", id: 2},
      {name: "DeeJay", age: 28, favoriteFood:"Burrito", id: 3}
    ]
  }

  addPerson = (person) => {
    console.log(person)
  }

  render() {
    return(
      <div className="App">
        <h1>Jamie isn't like the other girlz</h1>
        <p>Howdy y'all!</p>
        {/* importing the people component into JSX */}
        {/* We pass data from one component to another with props */}
        {/* We pass props by giving our components attributes */}
        <People arrayOfPeople={this.state.listOfPeople} />
        <AddPerson addMeLoser={this.addPerson} />
      </div>
    )
  }
}

export default App;
