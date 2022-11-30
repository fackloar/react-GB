import { createSlice } from "@reduxjs/toolkit";

const createChat = (id, header) => {
  return {
    id: id,
    header: header,
    messages: [],
  };
};

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatId: -1,
    chatsList: [],
    chatHeader: "",
    messages: [],
    chatIdCounter: 0,
    messageIdCounter: 0,
    userInfo: {
      nick: "John",
    },
  },
  reducers: {
    addChat: (state, action) => {
      let id = state.chatIdCounter + 1;
      return {
        ...state,
        chatIdCounter: id,
        chatsList: [...state.chatsList, createChat(id, action.payload)],
      };
    },
    removeChat: (state, action) => {
      return {
        ...state,
        chatsList: state.chatsList.filter((c) => c.id !== action.payload),
      };
    },
    loadChat: (state, action) => {
      let prevChat = state.chatsList.find((item) => item.id === state.chatId);
      // TODO: update messages in previous chat
      let nextChat = state.chatsList.find((item) => item.id === action.payload);
      return {
        ...state,
        chatId: action.payload,
        chatHeader: nextChat.header,
        messages: nextChat.messages,
      };
    },
    addMessage: (state, action) => {
      let id = state.messageIdCounter + 1;
      return {
        ...state,
        messageIdCounter: id,
        messages: [...state.messages, { ...action.payload, id: id }],
      };
    },
  },
});

export const { addChat, removeChat, loadChat, addMessage } = chatSlice.actions;

export const selectChatId = (state) => state.chat.chatId;
export const selectChats = (state) => state.chat.chatsList;
export const selectMessages = (state) => state.chat.messages;

export default chatSlice.reducer;