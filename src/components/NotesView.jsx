import GroupName from "./GroupName";
import styles from "./notes-view.module.css";

export default function NotesView({group}) {
    //ToDO: get selected grp and pass props to Group Name component
    //Define route for all group names
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <GroupName grp={group} />
      </div>
    </div>
  );
}
