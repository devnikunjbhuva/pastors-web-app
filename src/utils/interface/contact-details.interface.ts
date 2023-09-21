import { ContactData } from "./contact.interface";

export interface ViewContactDetailsProps {
  data: ContactData;
  closeModal: () => void;
}
