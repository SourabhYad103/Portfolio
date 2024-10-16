import React from 'react';
import { getImageUrl } from '../../util';
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sourabh.</h1>
        <p className={styles.description}>I'm a full stack developer with some experience using React and Node.js. Reach out if you'd like to learn more.</p>
        <a className={styles.contactBtn} href="mailto:sorbhydv7903@gmail.com">Contact Me</a>
      </div>
      <img className={styles.heroImg} src={getImageUrl("hero/Screenshot.png")} alt="A hero image of Sourabh." />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}