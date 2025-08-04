import React from 'react';

function NoteItem({ note, handleEdit, handleDelete, handleMarkDone }) {
  const reminderPassed = note.reminder && new Date(note.reminder) <= new Date();
  return (
    <li className="note-item" style={{ background: note.color || '#fff' }}>
      <div className="note-header">
        <strong>{note.title}</strong>
        <span style={{ fontSize: '0.8em', color: '#888', marginLeft: '10px' }}>
          {note.createdAt ? new Date(note.createdAt).toLocaleString() : ''}
        </span>
        <button className="edit-btn" onClick={() => handleEdit(note)}>Edit</button>
        <button className="delete-btn" onClick={() => handleDelete(note._id)}>Delete</button>
        {reminderPassed && (
          <button className="done-btn" onClick={() => handleMarkDone(note._id)}>
            Mark as Done
          </button>
        )}
      </div>
      <p>{note.content}</p>
    </li>
  );
}

export default NoteItem;