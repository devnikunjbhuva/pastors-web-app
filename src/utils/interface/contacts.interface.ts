import { ContactData } from "./contact.interface";

export interface ContactsProps {
  handleScroll: (
    getScrollHeight: number,
    getScrollTop: number,
    getClientHeight: number
  ) => void;
  isLoading: boolean;
  isShowEven: boolean;
  contacts: ContactData[];
}
