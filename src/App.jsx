import { useEffect, useState } from "react";
import styles from "./App.module.css";
import GroupList from "./components/GroupList";
import NotesView from "./components/NotesView";
import AppContext from "./context/AppContext";

function App() {
  const [groups, setGroups] = useState(
    JSON.parse(localStorage.getItem("myGroups")) || [
      {
        logo: "MN",
        name: "My Notes",
        theme: "hsla(223, 100%, 50%, 1)",
      },
      {
        logo: "M",
        name: "Mern",
        theme: "hsla(262, 92%, 76%, 1)",
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("myGroups", JSON.stringify(groups));
  }, [groups]);

  return (
    <>
      <AppContext.Provider value={{ groups, setGroups }}>
        <div className={styles.container}>
          <div className={styles.groups}>
            <GroupList />
          </div>
          <div className={styles.notes}>
            <NotesView />
          </div>
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
