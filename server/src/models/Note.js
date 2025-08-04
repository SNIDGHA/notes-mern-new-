import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
  color: String,
  reminder: Date,
  createdAt: { type: Date, default: Date.now },
  userId: { type: String, required: true }
});

export default mongoose.model("Note", noteSchema);
