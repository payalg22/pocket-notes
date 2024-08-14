import { useContext, useEffect, useState } from "react";
import styles from "./notes-view.module.css";
import AppContext from "../context/AppContext";

export default function NotesView({ group }) {
  const { notes } = useContext(AppContext);
  const [allNotes, setAllNotes] = useState([]);

  //display new note in notes view
  useEffect(() => {
    let currentNotes = notes.filter((item) => {
      return item?.grp === group?.name;
    });
    setAllNotes(currentNotes);
  }, [group, notes]);

  return (
    <div className={styles.container}>
      <div className={styles.notesSection}>
        {allNotes.map((noteItem, index) => {
          return (
            <div key={index} className={styles.note}>
              <p>{noteItem?.content}</p>
              <p className={styles.timestamp}>
                {noteItem?.timestamp?.fDate + " "} &#9679;{" "}
                {" " + noteItem?.timestamp?.time}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
