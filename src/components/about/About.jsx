import React from 'react'
import { getImageUrl } from '../../util';
import styles from "./About.module.css";
export const About = () => {
  return (
    <section className={styles.container} id = "about">
        <h2 className={styles.title}>About</h2>
        <div>
            <img className={styles.aboutImage} src={getImageUrl("about/Screenshot.png")} alt="Me sitting with a laptop" />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with experience in bui and optimized sites.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I'm a experience developing fast and optimized and API's.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>I have designed multiple landing pages and have systems aswell. </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
