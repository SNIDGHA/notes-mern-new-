import express from 'express';
import Note from '../models/Note.js'; // Adjust path if needed

const router = express.Router();

// GET all notes for a user
router.get('/', async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) return res.status(400).json({ error: 'Missing userId' });
    const notes = await Note.find({ userId });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create a new note
router.post('/', async (req, res) => {
  try {
    const { title, content, color, reminder, userId } = req.body;
    if (!userId) return res.status(400).json({ error: 'Missing userId' });
    const note = new Note({ title, content, color, reminder, userId });
    await note.save();
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT update a note
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Note.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE a note
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Note.findByIdAndDelete(id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
