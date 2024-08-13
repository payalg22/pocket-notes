import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./group-list.module.css";
import AppContext from "../context/AppContext";
import NewGroup from "./NewGroup";
import GroupName from "./GroupName";

export default function GroupList() {
  const { groups, setGroups, selectedGrp } = useContext(AppContext);
  const navigate = useNavigate();

  function handleNewGroup(grp) {
    setGroups([...groups, grp]);
    navigate(`/notes/${grp.name}`);
  }

  function handleViewGrp(grp) {
    navigate(`/notes/${grp}`);
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Pocket Notes</h1>
      </div>
      <div className={styles.grpList}>
        {groups.map((grp, index) => {
          return (
            <div
              className={styles.grp}
              onClick={() => {
                handleViewGrp(grp?.name);
              }}
              style={{
                backgroundColor:
                  selectedGrp?.name === grp?.name && `hsla(0, 0%, 18%, 0.17)`,
              }}
            >
              <GroupName key={index} grp={grp} />
            </div>
          );
        })}
      </div>

      <div className={styles.newGrp}>
        <NewGroup createNewGrp={handleNewGroup} groupList={groups} />
      </div>
    </div>
  );
}
