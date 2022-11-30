import { useState, forwardRef } from 'react'
import { Stack, TextField, Button } from '@mui/material'

const MessageForm = forwardRef(({ onMessageSend }, ref) => {
  const [formMessage, setFormMessage] = useState({ author: '', body: '' })

  const sendMessage = (e) => {
    e.preventDefault()
    onMessageSend(formMessage)
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