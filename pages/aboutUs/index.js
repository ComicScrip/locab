import React from "react";
import Layout from "../../components/Layout";

export default function AboutUS() {
  return (
    <Layout pageTitle="Qui sommes nous ?">
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <h1>Qui sommes-nous ?</h1>
        <p>
          Parents heureux de deux merveilleux enfants, c’est pendant un voyage
          avec notre ainé dans une voiture pleine à craquer que Loca-b est né.
          Depuis notre objectif est de faciliter la vie des parents en
          déplacement.
        </p>
      </main>
    </Layout>
  );
}
