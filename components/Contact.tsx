import styles from "../styles/contact.module.scss";
import { EmailOutlined } from "@mui/icons-material";
import { ModalService } from "../modal/modal.service";
import ContactForm from "./ContactForm";
import { useDispatch } from "react-redux";

export default function Contact() {
  const dispatch = useDispatch();
  const openMessageModal = () => {
    ModalService.Open(<ContactForm />, dispatch);
  };
  return (
    <section className={styles.contact} data-scroll-section>
      <button
        className={styles.contact__button}
        onClick={() => openMessageModal()}
      >
        <EmailOutlined className={styles.contact__button__icon} />
        <span className={styles.contact__button__text}>Message</span>
      </button>
    </section>
  );
}
