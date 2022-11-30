import { useState, forwardRef } from 'react'
import { Stack, TextField, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addMessage } from '../../store/chatSlice'

const MessageForm = forwardRef((props, ref) => {
  const [formMessage, setFormMessage] = useState({ author: '', body: '' })
  const dispatch = useDispatch()

  const sendMessage = (e) => {
    e.preventDefault()
    dispatch(addMessage(formMessage))
    setFormMessage({ ...formMessage, body: '' })
  }

  return (
    <div>
      <Stack
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={sendMessage}
      >
        <TextField
          id="user"
          label="author"
          name="author"
          inputRef={ref}
          value={formMessage.author}
          onChange={(e) =>
            setFormMessage({ ...formMessage, author: e.target.value })
          }
        />
        <TextField
          id="message"
          label="message"
          name="text"
          inputRef={ref}
          multiline
          maxRows={6}
          value={formMessage.body}
          onChange={(e) =>
            setFormMessage({ ...formMessage, body: e.target.value })
          }
        />
        <Button type="submit">send</Button>
      </Stack>
    </div>
  )
})

export default MessageForm
