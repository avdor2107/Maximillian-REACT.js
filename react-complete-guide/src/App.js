import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.js";

class App extends Component {
  state = {
    persons: [
      {id: 'asfa1', name: "Avdo", age: 24 },
      {id: 'wdwasa',  name: "Husejn", age: 15 },
      {id: 'testtt', name: "Roofko", age: 26 },
    ],
    otherState: 'Something',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    //console.log("'Was clicked!");
    //this.state.persons[0].name = 'hhhagdgfaw' DONT DO THIS
    this.setState({persons: [
      { name: newName, age: 24 },
      { name: "Husejn", age: 15 },
      { name: "Roofko", age: 27 },
    ]
  })
  };
  nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });
      const person = {
        ...this.state.persons[personIndex]
      };

      person.name = event.target.value;
      const persons = [...this.state.persons];
      persons[personIndex] = person;
    this.setState({persons: persons});
  }
  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person name ={person.name} 
          age={person.age} 
          click={() => this.deletePersonHandler(index)}
          key={person.id}
          changed={(event) => this.nameChangedHandler(event, person.id)}
          />
        })}
       
        </div> 

        
      );
      style.backgroundColor='red';
    }
    return (
      <div className="App">
        <h1>Hi I am a react app</h1>
        <p>Nesto napisano</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement("h1", null, 'A sade?'));
  }
}

export default App;
