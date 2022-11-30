import { useState, useEffect, useCallback, useRef } from "react";
import MessageList from "./components/messageList/MessageList";
import "./App.css";
import MessageForm from "./components/messageForm/MessageForm";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ChatsList from "./components/chatsList/ChatsList";
import { TextField } from "@mui/material";

const botMessage = { author: "Bot", body: "" };
const theme = createTheme({
  spacing: [0, 4, 8, 16],
  components: {
    MuiButton: {
      defaultProps: {
        size: "big",
        variant: "contained",
        margin: "dense",
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "filled",
        size: "small",
      },
    },
    MuiStack: {
      defaultProps: {
        spacing: 1,
      },
    },
  },
});

function App() {
  const [currentUser, setCurrentUser] = useState("John");
  const [messageList, setMessageList] = useState([]);
  const [chatsList, setChatsList] = useState([
    {
      id: 1,
      header: "some header",
      messages: [],
    },
    {
      id: 2,
      header: "some header2",
      messages: [],
    },
    {
      id: 3,
      header: "some header3",
      messages: [],
    },
  ]);
  const [idCounter, setIdCounter] = useState(0);
  const formRef = useRef(null);

  const getNewId = useCallback(() => {
    const newId = idCounter + 1;
    setIdCounter(newId);
    return newId;
  }, [idCounter]);

  const addMessage = useCallback(
    (newMessage) => {
      setMessageList([...messageList, { ...newMessage, id: getNewId() }]);
    },
    [getNewId, messageList]
  );

  const botSendMessage = useCallback(
    (messages) => {
      if (messages.length === 0) return;
      const lastMessage = messages.at(-1);
      if (lastMessage.author === botMessage.author) return;
      addMessage({ ...botMessage, body: `${lastMessage.author} write in chat` });
      formRef.current.focus();
    },
    [addMessage]
  );

  useEffect(() => {
    setTimeout(() => botSendMessage(messageList), 1500);
  }, [messageList, botSendMessage]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">

        <div className="chat">
          <div className="side">
            <div className="chat-user">
              <TextField type="text" label="Current User" value={currentUser} onChange={(e) => setCurrentUser(e.target.value)} />
            </div>

            <ChatsList chats={chatsList} />
          </div>

          <div className="chat-group">
            <MessageList messages={messageList} currentUser={currentUser} />

            <MessageForm onMessageSend={addMessage} ref={formRef} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;