import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={`${styles.container}  `}>
      <h3>Hello NextJs</h3>
    </div>
  );
}
