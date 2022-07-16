import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [toggleState, setToggleState] = useState(1);

  function toggleTab(index) {
    setToggleState(index);
    console.log(index);
  }
  return (
    <>
      <div className={styles.stats_heading}>
        <h1>Tabs</h1>
      </div>
      <div className={styles.stats_section}>
        <div className={styles.tabs_section}>
          <div
            onClick={() => toggleTab(1)}
            className={
              toggleState === 1
                ? `${styles.tabs} ${styles.active_tab}`
                : styles.tabs
            }
          >
            Tab1{" "}
          </div>

          <div
            className={
              toggleState === 2
                ? `${styles.tabs} ${styles.active_tab}`
                : styles.tabs
            }
            onClick={() => toggleTab(2)}
          >
            Tab 2
          </div>
          <div
            className={
              toggleState === 3
                ? `${styles.tabs} ${styles.active_tab}`
                : styles.tabs
            }
            onClick={() => toggleTab(3)}
          >
            Tab3
          </div>
        </div>

        <div className={styles.content_tabs}>
          <div
            className={
              toggleState === 1
                ? `${styles.tab1} ${styles.active_content}`
                : styles.tab1
            }
          >
            <h1>Heading 1</h1>
            <p>Hey there this is content of tab1</p>
          </div>

          <div
            className={
              toggleState === 2
                ? `${styles.tab2} ${styles.active_content}`
                : styles.tab2
            }
          >
            <h1>Heading 2</h1>
            <p>This is another tab with differnt content</p>
          </div>

          <div
            className={
              toggleState === 3
                ? `${styles.tab3} ${styles.active_content}`
                : styles.tab3
            }
          >
            <h1>Heading 3</h1>
            <p>This is just temporary tab :D</p>
          </div>
        </div>
      </div>
    </>
  );
}
