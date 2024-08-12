import { useEffect, useState } from "react";
import styles from "./App.module.css";
import AppContext from "./context/AppContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotePage from "./pages/NotePage";

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
    <div className={styles.container}>
      <AppContext.Provider value={{ groups, setGroups }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notes/:group" element={<NotePage />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
