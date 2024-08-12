import { useContext, useEffect, useState } from "react";
import GroupList from "../components/GroupList";
import NotesView from "../components/NotesView";
import styles from "./note-page.module.css";
import { useNavigate, useParams } from "react-router-dom";
import AppContext from "../context/AppContext";
import CreateNote from "../components/CreateNote";

export default function NotePage() {
  const { group } = useParams();
  const [selectedGrp, setSelectedGrp] = useState();
  const { groups } = useContext(AppContext);
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
        <NotesView group={selectedGrp} />
        <div className={styles.editor}>
          <CreateNote />
        </div>
      </div>
    </div>
  );
}
