import Popup from "reactjs-popup";
import styles from "./new-group.module.css";
import groupThemes from "../data/groupThemes";
import { useEffect, useState } from "react";
import createLogo from "../utils/createLogo";

export default function NewGroup({ createNewGrp }) {
  const [newGrp, setNewGrp] = useState({
    logo: "",
    name: "",
    theme: "",
  });
  const [isError, setIsError] = useState(false);

  const handleThemeLogo = async (e, selectedTheme) => {
    console.log(e);
    let grpLogo = await createLogo(newGrp?.name);
    setNewGrp({ ...newGrp, logo: grpLogo, theme: selectedTheme });
  };

  useEffect(() => {
    setIsError(false);
  }, [newGrp]);

  return (
    <Popup
      trigger={<button className={styles.newGrp}>+</button>}
      modal
      overlayStyle={{ background: "hsla(0, 0%, 18%, 0.75)" }}
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
              value={newGrp?.name}
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
                  style={{
                    backgroundColor: theme,
                    border:
                      newGrp?.theme == theme && "2px solid rgb(113, 250, 113)",
                  }}
                  onClick={(e) => {
                    handleThemeLogo(e, theme);
                  }}
                ></div>
              );
            })}
          </div>
          {isError && (
            <div>
              <p className={styles.error}>Please enter name and slect color</p>
            </div>
          )}
          <button
            className={styles.createGrpBtn}
            onClick={() => {
              if (!newGrp?.name || !newGrp?.logo) {
                setIsError(true);
              } else {
                createNewGrp(newGrp);
                close(); //Close modal
                setNewGrp(null); //Reset values
              }
            }}
          >
            Create
          </button>
        </div>
      )}
    </Popup>
  );
}
