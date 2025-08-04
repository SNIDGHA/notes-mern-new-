import React from 'react';
import NoteItem from './NoteItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../App.css';

function NoteList({ notes, handleEdit, handleDelete, handleMarkDone }) {
  return (
    <TransitionGroup component="ul" className="notes-list">
      {notes.map(note => (
        <CSSTransition key={note._id} timeout={400} classNames="note">
          <NoteItem
            note={note}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleMarkDone={handleMarkDone} // <-- Pass this prop!
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

export default NoteList;