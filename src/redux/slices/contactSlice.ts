// contactSlice.ts

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ContactState } from "../../utils/interface/slice.interface";

// Define the initial state
const initialState: ContactState = {
  data: [],
  loading: false,
  error: null,
};

const baseUrl = process.env.REACT_APP_BASE_URL as string;
const url = `${baseUrl}/contact.json`;

// Create an async thunk action for fetching data using Axios
export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (filters: any) => {
    try {
      const response = await axios.get(url, {
        params: filters,
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
        },
      });

      const data = response.data;
      let contactList = [...Object.values(data?.contacts)];

      return contactList;
    } catch (error) {
      throw error;
    }
  }
);

// Create a slice with reducers and async actions
const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state: any, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state: any, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.error.message;
      });
  },
});

export default contactSlice.reducer;
