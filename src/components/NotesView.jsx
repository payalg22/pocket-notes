import { useContext, useEffect, useState } from "react";
import GroupName from "./GroupName";
import styles from "./notes-view.module.css";
import AppContext from "../context/AppContext";

export default function NotesView({ group }) {
  const { notes } = useContext(AppContext);
  const [allNotes, setAllNotes] = useState([]);

  useEffect(() => {
    let currentNotes = notes.filter((item) => {
      return item?.grp === group?.name;
    });
    setAllNotes(currentNotes);
    console.log("all notes context: ", notes);
    console.log("filtered array", currentNotes);
    console.log("prop selected grp name", group?.name);
  }, [group, notes]);

  //Define route for all group names
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
