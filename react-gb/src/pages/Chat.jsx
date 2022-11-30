import { useState, useEffect, useCallback, useRef } from 'react'
import MessageList from '../components/messageList/MessageList'
import MessageForm from '../components/messageForm/MessageForm'
import ChatsList from '../components/chatsList/ChatsList'
import { TextField } from '@mui/material'
import CustomLink from '../components/customLink/CustomLink'
import { useParams } from 'react-router-dom'

const botMessage = { author: 'Bot', body: '' }

const Chat = () => {
  const getNewId = useCallback(() => {
    return Date.now()
  }, [])
  const { chatId } = useParams()
  const [chatsList, setChatsList] = useState([
    {
      id: getNewId(),
      header: 'some header',
      messages: [],
    },
  ])

  const [currentUser, setCurrentUser] = useState('John')
  const getCurrentChat = () => {
    let id = parseInt(chatId)
    if (Number.isNaN(id)) {
      return []
    }
    let chat = chatsList.find((item) => item.id === id)
    return chat.messages
  }
  const [messageList, setMessageList] = useState(getCurrentChat())

  const formRef = useRef(null)

  const addMessage = useCallback(
    (newMessage) => {
      setMessageList([...messageList, { ...newMessage, id: getNewId() }])
    },
    [getNewId, messageList],
  )

  const botSendMessage = useCallback(
    (messages) => {
      if (messages.length === 0) return
      const lastMessage = messages.at(-1)
      if (lastMessage.author === botMessage.author) return
      addMessage({ ...botMessage, body: `${lastMessage.author} write in chat` })
      formRef.current.focus()
    },
    [addMessage],
  )

  const removeChat = (id) => {
    setChatsList(chatsList.filter((c) => c.id !== id))
  }

  const addChat = (chatName) => {
    let id = getNewId()
    setChatsList([...chatsList, { id: id, header: chatName, messages: [] }])
    return id
  }

  useEffect(() => {
    setTimeout(() => botSendMessage(messageList), 1500)
  }, [messageList, botSendMessage])

  return (
    <div className="chat">
      <div className="side" style={{ width: '300px' }}>
        <div className="logo">
          <CustomLink to={'/'}>Home</CustomLink>
        </div>
        <div className="chat-user">
          <TextField
            type="text"
            label="Current User"
            value={currentUser}
            onChange={(e) => setCurrentUser(e.target.value)}
          />
        </div>

        <ChatsList
          chats={chatsList}
          chatId={chatId}
          onRemoveChat={removeChat}
          onAddChat={addChat}
        />
      </div>

      <div className="chat-group">
        <MessageList messages={messageList} currentUser={currentUser} />

        <MessageForm onMessageSend={addMessage} ref={formRef} />
      </div>
    </div>
  )
}

export default Chat
