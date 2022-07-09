import React from "react";
import { ModalService } from "../modal/modal.service";
import { useDispatch } from "react-redux";
import styles from "../styles/contact-form.module.scss";

export default function ContactForm() {
  const dispatch = useDispatch();
  const closeModal = () => {
    ModalService.Close(null, dispatch);
  };
  return (
    <div className={styles.contact__form}>
      CONTACT FORM
      <button onClick={() => closeModal()}>CLOSE </button>
    </div>
  );
}
