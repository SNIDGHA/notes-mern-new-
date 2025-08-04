import React from 'react';

function NoteForm({ form, handleChange, handleSubmit, editingId, cancelEdit }) {
  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="content"
        placeholder="Content"
        value={form.content}
        onChange={handleChange}
        required
      />
      <select
        name="color"
        value={form.color || '#fff'}
        onChange={handleChange}
        style={{ marginBottom: '8px' }}
      >
        <option value="#fff">White</option>
        <option value="#ffeb3b">Yellow</option>
        <option value="#c8e6c9">Green</option>
        <option value="#bbdefb">Blue</option>
        <option value="#ffcdd2">Red</option>
        <option value="#e1bee7">Purple</option>
      </select>
      <input
        type="datetime-local"
        name="reminder"
        value={form.reminder || ""}
        onChange={handleChange}
        style={{ marginBottom: '8px' }}
      />
      <button type="submit">{editingId ? 'Update Note' : 'Add Note'}</button>
      {editingId && (
        <button type="button" onClick={cancelEdit}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default NoteForm;