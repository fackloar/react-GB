import List from '@mui/material/List'
import {
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
} from '@mui/material'
import CommentIcon from '@mui/icons-material/Comment'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const ChatsList = ({ chats, chatId, onRemoveChat, onAddChat }) => {
  const [addFormOpen, setFormVisibility] = useState(true)
  const navigate = useNavigate()
  const selectChat = (id) => {
    if (!id) return
    navigate(`/chat/${id}`)
  }
  const removeChat = (e, id) => {
    navigateToChat()
    onRemoveChat(id)
  }

  const navigateToChat = (id) => {
    if (!id) {
      navigate('/chat');
      return
    }

    navigate(`/chat/${id}`)
  }


  const openAddChatForm = () => {
    setFormVisibility(true)
  }

  const closeAdd = (e, isAdd) => {
    e.preventDefault()
    if (isAdd) {
      let chatName = e.target.form.chatName.value
      let id = onAddChat(chatName)
      navigateToChat(id)
    }
    setFormVisibility(false)
  }

  const renderAddChat = () => {
    if (!addFormOpen) {
      return (
        <ListItemButton onClick={openAddChatForm}>
          <AddIcon />
          Add Chat
        </ListItemButton>
      )
    }
    return (
      <form>
        <input id="chatName" type="text" />
        <button onClick={(e) => closeAdd(e, true)}>Add</button>
        <button onClick={closeAdd}>Close</button>
      </form>
    )
  }

  return (
    <List sx={{ bgcolor: 'background.paper' }}>
      {chats.map((chat, index) => (
        <ListItem key={chat.id} selected={`${chat.id}` === chatId}>
          <ListItemButton onClick={() => selectChat(chat.id)}>
            <ListItemText primary={chat.header} />
            <CommentIcon />
          </ListItemButton>
          <IconButton onClick={(e) => removeChat(e, chat.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
      {renderAddChat()}
    </List>
  )
}

export default ChatsList