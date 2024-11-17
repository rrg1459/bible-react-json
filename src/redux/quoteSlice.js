import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "book": {
    testament: "",
    label: "",
    abbreviation: "",
    chapters: 0,
    type: ""
  },
  "chapter": 0,
  "verse": 0,
  "text": "",
  verses: []
};

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    updateQuote: (state, action) => {
      const { book, chapter, verse, text } = action.payload;
      state.book = book;
      state.chapter = chapter;
      state.verse = verse;
      state.text = text;
    },
    changeVerses: (state, action) => {
      state.verses = action.payload;
    },
  },
});

export const { updateQuote, changeVerses } = quoteSlice.actions;
export default quoteSlice.reducer;
