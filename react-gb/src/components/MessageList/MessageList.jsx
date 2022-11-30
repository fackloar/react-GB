import React from 'react'
import Message from '../message/Message.jsx'
import { useSelector } from 'react-redux'
import { selectMessages } from '../../store/chatSlice'
import { selectUserName } from '../../store/authSlice'

function MessagesList() {
  const messages = useSelector(selectMessages)
  const currentUser = useSelector(selectUserName)

  return (
    <div className="MessagesList">
      {messages.map((item) => {
        return (
          <Message
            key={item.id}
            author={item.author}
            message={item.body}
            style={{
              textAlign: item.author === currentUser ? 'left' : 'right',
            }}
          />
        )
      })}
    </div>
  )
}

export default MessagesList
