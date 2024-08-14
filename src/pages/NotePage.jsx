import { useContext, useEffect, useState } from "react";
import GroupList from "../components/GroupList";
import NotesView from "../components/NotesView";
import GroupName from "../components/GroupName";
import styles from "./note-page.module.css";
import { useNavigate, useParams } from "react-router-dom";
import AppContext from "../context/AppContext";
import CreateNote from "../components/CreateNote";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default function NotePage() {
  const { group } = useParams();
  const { groups, selectedGrp, setSelectedGrp } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    let findGrp = groups.find((grp) => {
      return grp.name === group;
    });
    if (!findGrp) {
      navigate("/");
    } else {
      setSelectedGrp(findGrp);
    }
  }, [group]);

  return (
    <div className={styles.container}>
      <div className={styles.groups}>
        <GroupList />
      </div>
      <div className={styles.notes}>
        <div className={styles.title}>
        <button onClick={() => {navigate(-1)}}>
          <KeyboardBackspaceIcon />  
        </button>
          <GroupName grp={selectedGrp} />
        </div>
        <div className={styles.notesView}>
          <NotesView group={selectedGrp} />
        </div>
        <div className={styles.editor}>
          <CreateNote />
        </div>
      </div>
    </div>
  );
}
