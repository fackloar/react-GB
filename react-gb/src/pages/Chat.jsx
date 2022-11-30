import { useState, useEffect, useCallback, useRef } from 'react'
import MessageList from '../components/messageList/MessageList'
import MessageForm from '../components/messageForm/MessageForm'
import ChatsList from '../components/chatsList/ChatsList'
import { TextField } from '@mui/material'
import CustomLink from '../components/customLink/CustomLink'

import { useSelector, useDispatch } from 'react-redux'
import { selectMessages, addMessage } from '../store/chatSlice'
import { selectUserName, signIn } from '../store/authSlice'

const Chat = () => {
  const userName = useSelector(selectUserName)
  const messages = useSelector(selectMessages)
  const dispatch = useDispatch()

  const formRef = useRef(null)

  const botSendMessage = useCallback((messages) => {
    if (messages.length === 0) return
    const lastMessage = messages.at(-1)
    if (lastMessage.author === 'Bot') return
    let message = {
      author: 'Bot',
      body: `${lastMessage.author} write in chat`,
    }
    dispatch(addMessage(message))
    formRef.current.focus()
  }, [])

  useEffect(() => {
    setTimeout(() => botSendMessage(messages), 1500)
  }, [messages, botSendMessage])

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
            value={userName}
            onChange={(e) => dispatch(signIn(e.target.value))}
          />
        </div>

        <ChatsList />
      </div>

      <div className="chat-group">
        <MessageList />

        <MessageForm ref={formRef} />
      </div>
    </div>
  )
}

export default Chat