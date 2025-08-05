import React from 'react';

function NoteItem({ note, handleEdit, handleDelete, handleMarkDone }) {
  const reminderPassed = note.reminder && new Date(note.reminder) <= new Date();

  return (
    <li className="note-item" style={{ background: note.color || '#fff', padding: '1em', marginBottom: '1em', borderRadius: '8px' }}>
      <div className="note-header" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <strong>{note.title}</strong>

        {note.createdAt && (
          <span style={{ fontSize: '0.8em', color: '#888' }}>
            🕒 {new Date(note.createdAt).toLocaleString()}
          </span>
        )}

        {note.reminder && (
          <span style={{ fontSize: '0.8em', color: reminderPassed ? 'red' : '#888' }}>
            ⏰ {new Date(note.reminder).toLocaleString()}
          </span>
        )}

        <button className="edit-btn" onClick={() => handleEdit(note)}>Edit</button>
        <button className="delete-btn" onClick={() => handleDelete(note._id)}>Delete</button>

        {reminderPassed && (
          <button className="done-btn" onClick={() => handleMarkDone(note._id)}>
            Mark as Done ✅
          </button>
        )}
      </div>

      <p>{note.content}</p>
    </li>
  );
}

export default NoteItem;
