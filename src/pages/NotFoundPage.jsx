import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.subheading}>Oops! Page not found.</p>
      <p className={styles.msg}>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link to="/" className={styles.btn} >Go to Homepage</Link>
    </div>
  );
}
