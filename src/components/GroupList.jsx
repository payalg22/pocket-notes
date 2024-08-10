import { useContext } from "react";
import styles from "./group-list.module.css";
import AppContext from "../context/AppContext";
import NewGroup from "./NewGroup";

export default function GroupList() {
  const { groups, setGroups } = useContext(AppContext);

  function handleNewGroup(grp) {
    setGroups([...groups, grp]);
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Pocket Notes</h1>
      </div>
      {groups.map((grp, index) => {
        return (
          <div className={styles.grpContainer} key={index}>
            <div
              className={styles.grpLogo}
              style={{ backgroundColor: grp.theme }}
            >
              {grp.logo}
            </div>
            <p className={styles.grpName}>{grp.name}</p>
          </div>
        );
      })}
        <div className={styles.newGrp}>
            <NewGroup createNewGrp = {handleNewGroup} />
        </div>
    </div>
  );
}
