import styles from "./home-page.module.css";
import GroupList from "../components/GroupList";
import HomeView from "../components/HomeView";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.groups}>
        <GroupList />
      </div>
      <div className={styles.notes}>
        <HomeView />
      </div>
    </div>
  );
}
