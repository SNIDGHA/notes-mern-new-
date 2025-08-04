import React, { useEffect, useState, useRef } from 'react';
import './App.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import SearchBar from './components/SearchBar';
import DarkModeToggle from './components/DarkModeToggle';

import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LandingPage from './pages/LandingPage';

import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({ title: '', content: '', color: '#fff' });
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const noteFormRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/api/notes?userId=${user.uid}`)
        .then(res => res.json())
        .then(data => setNotes(Array.isArray(data) ? data : []));
    }
  }, [user]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const noteData = { ...form, userId: user.uid };
      let res;
      if (editingId) {
        res = await fetch(`http://localhost:5000/api/notes/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(noteData),
        });
        if (!res.ok) throw new Error('Failed to update note');
        const updatedNote = await res.json();
        setNotes(notes.map(note => note._id === editingId ? updatedNote : note));
        setEditingId(null);
        toast.success('Note updated!');
      } else {
        res = await fetch('http://localhost:5000/api/notes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(noteData),
        });
        if (!res.ok) throw new Error('Failed to add note');
        const newNote = await res.json();
        setNotes([...notes, newNote]);
        toast.success('Note added!');
      }
      setForm({ title: '', content: '', color: '#fff' });
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleEdit = note => {
    setForm({ title: note.title, content: note.content, color: note.color });
    setEditingId(note._id);
    if (noteFormRef.current) {
      noteFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDelete = async id => {
    await fetch(`http://localhost:5000/api/notes/${id}`, { method: 'DELETE' });
    setNotes(notes.filter(note => note._id !== id));
    if (editingId === id) {
      setEditingId(null);
      setForm({ title: '', content: '', color: '#fff' });
    }
  };

  const handleMarkDone = async id => {
    await fetch(`http://localhost:5000/api/notes/${id}`, { method: 'DELETE' });
    setNotes(notes.filter(note => note._id !== id));
    toast.success('Task marked as done and deleted!');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm({ title: '', content: '', color: '#fff' });
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(search.toLowerCase()) ||
    note.content.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      notes.forEach(note => {
        if (note.reminder && new Date(note.reminder) <= new Date()) {
          toast.info(`Reminder: ${note.title}`);
        }
      });
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [notes]);

  return (
    <Router>
      {/* ✅ Show navbar only if user is logged in */}
      {user && (
        <nav className="navbar">
          <div className="navbar-logo">NotesApp 📝</div>
          <div className="navbar-links">
            <Link to="/notes">JOT DOWN!!</Link>
            <Link to="/profile">Profile</Link>
          </div>
        </nav>
      )}

      <Routes>
        {/* ✅ Public Landing Page */}
        <Route
          path="/"
          element={
            user ? <Navigate to="/notes" replace /> : <LandingPage />
          }
        />

        {/* ✅ Protected Notes Page */}
        <Route
          path="/notes"
          element={
            user ? (
              <div className={`container${darkMode ? ' dark' : ''}`}>
                <ToastContainer position="top-right" />
                <h1>Notes App</h1>
                <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                <SearchBar search={search} setSearch={setSearch} />
                <div ref={noteFormRef}>
                  <NoteForm
                    form={form}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    editingId={editingId}
                    cancelEdit={cancelEdit}
                  />
                </div>
                <NoteList
                  notes={filteredNotes}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                  handleMarkDone={handleMarkDone}
                />
              </div>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* ✅ Auth & Profile */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
