import { useContext } from "react";
import styles from "./group-list.module.css";
import AppContext from "../context/AppContext";
import NewGroup from "./NewGroup";
import GroupName from "./GroupName";

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
        return <GroupName key={index} grp={grp} />;
      })}
      <div className={styles.newGrp}>
        <NewGroup createNewGrp={handleNewGroup} />
      </div>
    </div>
  );
}
