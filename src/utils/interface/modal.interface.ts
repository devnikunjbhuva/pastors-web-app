import { ContactData } from "./contact.interface";

export interface ModalState {
  show: boolean;
  type?: string;
  data?: ContactData;
}
