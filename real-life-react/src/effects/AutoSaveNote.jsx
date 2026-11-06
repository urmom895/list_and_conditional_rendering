import { useState, useEffect } from "react";
import "../styles/AutoSaveNote.css";

function AutoSaveNote() {
  const [note, setNote] = useState(
    () => localStorage.getItem("my-note") ?? ""
  );

  useEffect(() => {
    localStorage.setItem("my-note", note);
  }, [note]);

  let wordCount = 0;

  if (note.trim() !== "") {
    wordCount = note.trim().split(/\s+/).length;
  }

  return (
    <div className="auto-save-note">
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Type a note. It saves automatically."
      />

      <p>Word count: {wordCount}</p>

      <button onClick={() => setNote("")}>
        Clear
      </button>
    </div>
  );
}

export default AutoSaveNote;