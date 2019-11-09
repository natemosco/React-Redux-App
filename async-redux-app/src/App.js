import React from 'react';
import './App.css';

import Button from "./components/Button"
import CharacterContainer from "./components/CharacterContainer";

function App() {
  return (
    <div className="App">
      <h1 className="Header">Async-Redux-Wars</h1>
      <Button className="left" name={"Get Characters"}></Button>
      <CharacterContainer ></CharacterContainer>
    </div>
  );
  // return (
  //   <div className="App">
  //     <h1 className="Header">React Wars</h1>
  //     <CharacterContainer characters={characters}></CharacterContainer>
  //     <Button className="left" onClick={leftClick} name={"\u00AB"}></Button>
  //     <StyledSpan>Page</StyledSpan>
  //     <Button className="right" onClick={rightClick} name={"\u00BB"}></Button>
  //   </div>
  // );
}

export default App;
