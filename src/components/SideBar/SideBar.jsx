import React from 'react';
import './SideBar.css';
import NoteTile from "./NoteTile/NoteTile";

const SideBar = ({notes}) => {
  return (
    <aside className="Sidebar">
      {notes.map(note => <NoteTile key={note.id} {...note}/>)}
    </aside>
  );
};

export default SideBar;