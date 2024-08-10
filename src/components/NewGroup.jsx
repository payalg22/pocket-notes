import Popup from "reactjs-popup";
import styles from "./new-group.module.css";
import groupThemes from "../data/groupThemes";
import { useState } from "react";
import createLogo from "../utils/createLogo";

export default function NewGroup({ createNewGrp }) {
  const [newGrp, setNewGrp] = useState({
    logo: "",
    name: "",
    theme: "",
  });

  const handleThemeLogo = async (selectedTheme) => {
    let grpLogo = await createLogo(newGrp.name);
    setNewGrp({ ...newGrp, logo: grpLogo, theme: selectedTheme });
  };

  const handleCreateGrp = () => {
    createNewGrp(newGrp);
    close();
  };

  return (
    <Popup
      trigger={<button className={styles.newGrp}>+</button>}
      modal
      overlayStyle={{ background: "hsla(0, 0%, 0%, 0.5)" }}
    >
      {(close) => (
        <div className={styles.popup}>
          <div>
            <p>Create new group</p>
          </div>
          <div>
            <label htmlFor="grpName">Group Name</label>
            <input
              type="text"
              placeholder="Enter group name"
              className={styles.grpName}
              id="grpName"
              value={newGrp.name}
              onChange={(e) => setNewGrp({ ...newGrp, name: e.target.value })}
            />
          </div>
          <div>
            <p>Choose colour</p>
            {groupThemes.map((theme, index) => {
              return (
                <div
                  key={index}
                  className={styles.themeSelector}
                  style={{ backgroundColor: theme }}
                  onClick={() => {
                    handleThemeLogo(theme);
                  }}
                ></div>
              );
            })}
          </div>
          <button
            className={styles.createGrpBtn}
            onClick={() => {
              createNewGrp(newGrp);
              close();
            }}
          >
            Create
          </button>
        </div>
      )}
    </Popup>
  );
}
