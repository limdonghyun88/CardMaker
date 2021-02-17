import React from "react";
import CardAddform from "../card_add_form/card_add_form";
import CardEditform from "../card_edit_form/card_edit_form";
import styles from "./editor.module.css";

const Editor = ({ cards, addCard, deleteCard, updateCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {Object.keys(cards).map((key) => (
      <CardEditform
        key={key}
        card={cards[key]}
        deleteCard={deleteCard}
        updateCard={updateCard}
      />
    ))}
    <CardAddform onAdd={addCard} />
  </section>
);

export default Editor;
