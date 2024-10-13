"use client";

import styles from "./page.module.css";
import Index from "./pages/index";

export default function Home() {
  return (
    <div className={styles.page}>
      <Index/>
    </div>
  );
}
