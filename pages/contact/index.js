import React from "react";
import Layout from "../../components/Layout";

export default function Contact() {
  return (
    <Layout pageTitle="Contactez-nous">
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <h1>Nous contacter</h1>
        <p>+33 6 26 85 90 46</p>
        <p>contact@loca-b.fr</p>
      </main>
    </Layout>
  );
}
