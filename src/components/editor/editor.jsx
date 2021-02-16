import React from "react";
import CardEditform from "../card_edit_form/card_edit_form";
import styles from "./editor.module.css";

const Editor = ({ cards }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {cards.map((card) => (
      <CardEditform card={card} />
    ))}
  </section>
);

export default Editor;
