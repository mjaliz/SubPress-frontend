import { createSlice, createSelector } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "flashCards",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    flashCardsRequested: (flashCards, action) => {
      flashCards.loading = true;
    },
    flashCardsReceived: (flashCards, action) => {
      flashCards.list = action.payload;
      flashCards.loading = false;
      flashCards.lastFetch = Date.now();
    },
    flashCardsRequestFailed: (flashCards, action) => {
      flashCards.loading = false;
    },
    flashCardKnown: (flashCards, action) => {
      const index = flashCards.list.flashCards.findIndex(
        (flashCard) => flashCard._id === action.payload.id
      );
      flashCards.list.flashCards[index].status = "known";
    },
  },
});

export const {
  flashCardsRequested,
  flashCardsReceived,
  flashCardsRequestFailed,
  flashCardKnown,
} = slice.actions;

export default slice.reducer;

const url = "/users/selectedWord";

export const loadFlashCards = (userId) => (dispatch, getState) => {
  // const { lastFetch } = getState().entities.flashCards;

  // const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  // if (diffInMinutes < 1) return;
  return dispatch(
    apiCallBegan({
      url,
      params: { userId },
      onStart: flashCardsRequested.type,
      onSuccess: flashCardsReceived.type,
      onError: flashCardsRequestFailed.type,
    })
  );
};

export const makeFlashCardKnown = (id, status) =>
  apiCallBegan({
    url,
    method: "patch",
    data: {
      id,
      status,
    },
    onSuccess: flashCardKnown.type,
  });

export const getSelectedFlashCards = createSelector(
  (state) => state.entities.flashCards.list.flashCards,
  (flashCards) =>
    flashCards.filter((flashCard) => flashCard.status === "selected")
);
