import { useEffect, useState } from "react";
import styles from "./App.module.css";
import AppContext from "./context/AppContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotePage from "./pages/NotePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [groups, setGroups] = useState(
    JSON.parse(localStorage.getItem("myGroups")) || [
      {
        logo: "",
        name: "",
        theme: "",
      }]
  );
  const [selectedGrp, setSelectedGrp] = useState();
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("myNotes")) || [
      {
        grp: "",
        content: "",
        timestamp: {
          fDate: "",
          time: "",
        },
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("myGroups", JSON.stringify(groups));
  }, [groups]);

  useEffect(() => {
    localStorage.setItem("myNotes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className={styles.container}>
      <AppContext.Provider
        value={{
          groups,
          setGroups,
          selectedGrp,
          setSelectedGrp,
          notes,
          setNotes,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notes/:group" element={<NotePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
