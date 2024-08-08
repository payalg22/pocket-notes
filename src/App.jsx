import styles from "./App.module.css";
import GroupList from "./components/GroupList";
import NotesView from "./components/NotesView";

function App() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.groups}>
          <GroupList />
        </div>
        <div className={styles.notes}>
            <NotesView />
        </div>
      </div>
    </>
  );
}

export default App;
