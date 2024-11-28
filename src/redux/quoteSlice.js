import { createSlice } from "@reduxjs/toolkit";

// language: 0 English version
// language: 1 Spanish version
const initialState = {
  language: 0,
  book: {
    id: 0,
    testament: "",
    label: [],
    abbreviation: [],
    chapters: 0,
    type: ""
  },
  chapter: 0,
  verse: 0,
  text: "",
  verses: [],
  wasRead: false
};

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    updateQuote: (state, action) => {
      const { id, book, chapter, verse, text } = action.payload;
      state.id = id;
      state.book = book;
      state.chapter = chapter;
      state.verse = verse;
      state.text = text;
    },
    updateLanguage: (state, action) => {
      state.language = action.payload;
    },
    changeVerses: (state, action) => {
      state.verses = action.payload;
    },
    updateRead: (state, action) => {
      state.wasRead = action.payload;
    },
  },
});

export const { updateQuote, changeVerses, updateLanguage, updateRead } = quoteSlice.actions;
export default quoteSlice.reducer;
