import styles from "./group-name.module.css";

export default function GroupName({grp}) {
    return (
        <div className={styles.grpContainer}>
          <div
            className={styles.grpLogo}
            style={{ backgroundColor: grp.theme }}
          >
            {grp.logo}
          </div>
          <p className={styles.grpName}>{grp.name}</p>
        </div>
      );
}