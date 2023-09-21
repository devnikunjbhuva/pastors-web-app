import { ContactData } from "./contact.interface";

export interface ContactState {
  data: ContactData[];
  loading: boolean;
  error: null | Error;
}
