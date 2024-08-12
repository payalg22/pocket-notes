import { useState } from "react";
import styles from "./create-note.module.css";
import SendIcon from "@mui/icons-material/Send";

export default function CreateNote() {
  const [newNote, setNewNote] = useState();
  const [isDisabled, setIsDisabled] = useState(true);

  function handleSubmit() {}

  function handleChange(e) {
    let data = e.target.value;
    if (data) {
      setIsDisabled(false);
      setNewNote(data);
    }
  }

  return (
    <div className={styles.container}>
      <textarea
        className={styles.editor}
        onChange={handleChange}
        value={newNote}
        placeholder="Enter your text here..........."
      />
      <button
        className={styles.create}
        onClick={handleSubmit}
        disabled={isDisabled}
        style={{
          color: isDisabled ? "hsla(0, 0%, 67%, 1)" : "hsla(227, 100%, 27%, 1)",
        }}
      >
        <SendIcon sx={{ fontSize: 35 }} />
      </button>
    </div>
  );
}
