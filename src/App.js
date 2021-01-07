import './App.css';
import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid';

import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import NoteManager from "./components/NoteManager/NoteManager";

function App() {
  const [notes, setNotes] = useState(initialNotes);
  return (
    <div className="App">
      <NavBar/>
      <main className="mainBody">
        <SideBar notes={notes}/>
        <NoteManager/>
      </main>
    </div>
  );
}

const initialNotes = [
  {
    id: uuidv4(),
    title: 'My first Note',
    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum ligula suscipit consequat auctor. Nunc mollis metus id nisl hendrerit faucibus. Etiam id ullamcorper turpis. Etiam molestie eros sit amet ornare sodales. Proin elementum finibus odio, at vehicula enim porttitor quis. Etiam accumsan urna libero, sed dictum diam bibendum ac. Sed elementum vulputate quam et sodales. Fusce quis malesuada dolor, eget semper magna. Nam facilisis eros quis lacus lobortis facilisis. Morbi feugiat ex ac ante fermentum eleifend.'
  },
  {
    id: uuidv4(),
    title: 'Second Note',
    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum ligula suscipit consequat auctor. Nunc mollis metus id nisl hendrerit faucibus. Etiam id ullamcorper turpis. Etiam molestie eros sit amet ornare sodales. Proin elementum finibus odio, at vehicula enim porttitor quis. Etiam accumsan urna libero, sed dictum diam bibendum ac. Sed elementum vulputate quam et sodales. Fusce quis malesuada dolor, eget semper magna. Nam facilisis eros quis lacus lobortis facilisis. Morbi feugiat ex ac ante fermentum eleifend.'
  }
];
export default App;
