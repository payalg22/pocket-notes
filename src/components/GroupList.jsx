import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./group-list.module.css";
import AppContext from "../context/AppContext";
import NewGroup from "./NewGroup";
import GroupName from "./GroupName";

export default function GroupList() {
  const { groups, setGroups } = useContext(AppContext);
  const navigate = useNavigate();

  function handleNewGroup(grp) {
    setGroups([...groups, grp]);
  }

  function handleViewGrp(grp) {
    navigate(`/notes/${grp}`)
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Pocket Notes</h1>
      </div>
      {groups.map((grp, index) => {
        return (
          <div
            className={styles.grp}
            onClick={() => {
              handleViewGrp(grp?.name);
            }}
          >
            <GroupName key={index} grp={grp} />
          </div>
        );
      })}
      <div className={styles.newGrp}>
        <NewGroup createNewGrp={handleNewGroup} />
      </div>
    </div>
  );
}
