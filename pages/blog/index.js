import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Blog.module.css";

export default function Blog() {
  return (
    <Layout pageTitle="Blog — Loca-B">
      <section className={styles.mainContainer}>
        <h1>Blog</h1>
        <p>
          Bienvenue dans notre espace blog. Retrouvez ici tous nos articles sur
          l’enfance, les bons plans voyages avec votre bébé ou encore des
          conseils.
        </p>
      </section>
    </Layout>
  );
}
