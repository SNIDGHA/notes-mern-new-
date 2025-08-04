import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import notesRouter from './routes/notes.js'; // <-- Use ./routes/notes.js

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/newNotes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected to newNotes'))
.catch(err => console.error('MongoDB connection error:', err));


app.get('/', (_req, res) => {
  res.send('Notes API is running');
});

app.use('/api/notes', notesRouter);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
