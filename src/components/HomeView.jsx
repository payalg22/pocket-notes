import styles from "./home-view.module.css";
import home from "../assets/home.png";
import LockIcon from "@mui/icons-material/Lock";

export default function HomeView() {
  return (
    <div className={styles.container}>
      <img src={home} className={styles.hero}/>
      <h1>Pocket Notes</h1>
      <p className={styles.desc}>
        Send and receive messages without keeping your phone online. Use Pocket
        Notes on up to 4 linked devices and 1 mobile phone
      </p>
      <div className={styles.footer}>
        <LockIcon />
        <p>end-to-end encrypted</p>
      </div>
    </div>
  );
}
