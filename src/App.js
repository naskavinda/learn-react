import React, {Component, useState} from "react";
import './App.css';

import Person from './Person/Person';

// function App() {
//     return (
//         <div className="App">
//             <h1>Hi I am a react App.</h1>
//         </div>
//     );
// }

const App = props => {

    const [personsState, setPersonsState] = useState({
        persons: [
            {name: "Supun", age: 27},
            {name: "Sanath", age: 52},
            {name: "Dilshan", age: 43}
        ]
    });

    const clickHandler = () => {
        setPersonsState({
            persons: [
                {name: "Supun Kavinda", age: 27},
                {name: "Sanath", age: 52},
                {name: "Dilshan", age: 43}
            ]
        })
    }

    return (
        <div className="App">
            {/*{personsState.map((person, index)=> <Person name={person.name} age={person.age}></Person>)}*/}
            <button onClick={clickHandler}>CLICK ME</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}></Person>
            <Person click={clickHandler} name={personsState.persons[1].name} age={personsState.persons[1].age}>I like to play cricket</Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}></Person>
        </div>
    )
}

export default App;
