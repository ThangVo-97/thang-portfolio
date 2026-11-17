import { profile } from "@/data/profile";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>
          © {new Date().getFullYear()} {profile.nameAscii}
        </p>
        <p>Built with Next.js &amp; TypeScript</p>
      </div>
    </footer>
  );
}
