import React from "react";
import styles from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";
const ErrorModal = (props) => {
  return (
    <>
      <div className={styles.backdrop}></div>
      <Card className={styles.modal}>
        <div className={styles["modal-title"]}>{props.data.modalTitle}</div>

        <div className={styles["modal-body"]}>
          <p>{props.data.bodyText}</p>
        </div>
        <div className={styles["modal-footer"]}>
          <Button customOnClick={props.onClick} title={"Okay"}></Button>
        </div>
      </Card>
    </>
  );
};

export default ErrorModal;
