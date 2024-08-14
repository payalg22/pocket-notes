import Popup from "reactjs-popup";
import styles from "./new-group.module.css";
import groupThemes from "../data/groupThemes";
import { useEffect, useState } from "react";
import createLogo from "../utils/createLogo";

export default function NewGroup({ createNewGrp, groupList }) {
  const [newGrp, setNewGrp] = useState({
    logo: "",
    name: "",
    theme: "",
  });
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsError(false);
    setError("");
  }, [newGrp]);

  const handleThemeLogo = async (e, selectedTheme) => {
    let grpLogo = await createLogo(newGrp?.name);
    setNewGrp({ ...newGrp, logo: grpLogo, theme: selectedTheme });
  };

  const validateGrp = () => {
    let grpExists = groupList.findIndex((grp) => {
      return grp.name.toLowerCase() === newGrp?.name.toLowerCase();
    });
    if (!newGrp?.name && !newGrp?.theme) {
      setError("Please enter name and select color");
    } else if (!newGrp?.name) {
      setError("Please enter name");
    } else if (!newGrp?.theme) {
      setError("Please select a color");
    } else if (grpExists >= 0) {
      setError("Group already exists. Please use different name");
    } else {
      return true;
    }
    setIsError(true);
    return false;
  };

  return (
    <Popup
      trigger={<button className={styles.newGrp}>+</button>}
      modal
      overlayStyle={{ background: "hsla(0, 0%, 18%, 0.75)" }}
      onClose={() => {
        setIsError(false);
        setError("");
        setNewGrp({
          logo: "",
          name: "",
          theme: "",
        });
      }}
    >
      {(close) => (
        <div className={styles.popup}>
          <div>
            <p className={styles.heading}>Create new group</p>
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
                      newGrp?.theme == theme && "2px solid rgb(25, 166, 72)",
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
              <p className={styles.error}>{error}</p>
            </div>
          )}
          <button
            className={styles.createGrpBtn}
            onClick={() => {
              if (validateGrp()) {
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
