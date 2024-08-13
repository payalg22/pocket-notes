import { useContext, useEffect, useState } from "react";
import styles from "./create-note.module.css";
import SendIcon from "@mui/icons-material/Send";
import AppContext from "../context/AppContext";
import getDateTime from "../utils/getDateTime.js";

export default function CreateNote() {
  const [newNote, setNewNote] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const { notes, setNotes, selectedGrp } = useContext(AppContext);

  useEffect(() => {
    if (!newNote) {
      setIsDisabled(true);
    }
  }, [newNote]);

  function handleSubmit() {
    if (newNote.trim()) {
      let timestamp = getDateTime();
      setNotes([
        ...notes,
        {
          grp: selectedGrp.name,
          content: newNote,
          timestamp: timestamp,
        },
      ]);
      setNewNote("");
    }
  }

  function handleEnter(event) {
    let data = event.target.value;
    console.log("hi", data);
    if (event.key === "Enter" && data.trim()) {
      handleSubmit();
    }
  }

  function handleChange(e) {
    let data = e.target.value;
    if (data.trim()) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    setNewNote(data);
  }

  return (
    <div className={styles.container}>
      <textarea
        className={styles.editor}
        onChange={handleChange}
        onKeyDown={handleEnter}
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
