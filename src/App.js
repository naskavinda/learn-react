import React, {useState} from "react";

import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

function App() {

  const appStyle = {
    marginTop: '10px'
  }

  const [userNames, setUserNames] = useState({
    userNames: [
      {name: 'Supun Kavinda'},
      {name: 'Dammika Prasad'},
      {name: 'Sanath Jayasuriya'}
    ]
  });

  const userNameChangeHandler = () => {
    setUserNames( {
      userNames: [
        {name: 'Rangana Herath'},
        {name: 'Dammika Prasad'},
        {name: 'Sanath Jayasuriya'}
      ]
    })
    console.log(userNames);
  };

  return (
      <div className="App" style={appStyle}>
        <UserInput></UserInput>
        <br/>
        <button onClick={userNameChangeHandler}>Change Name</button>
          {userNames.userNames.map((userName, index) => (
              <UserOutput name={userName.name} key={index}/>
          ))}
      </div>
  );
}

export default App;
