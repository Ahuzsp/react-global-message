import React, { createContext, useContext, useState, ReactNode } from "react"
import Message from "./Message"

interface Message {
  type?: "success" | "error" | "info" | "warning"
  message: string
  duration?: number
}

interface MessageContextProps {
  showMessage: (message: Message) => void
}

const MessageContext = createContext<MessageContextProps | null>(null)

export const MessageProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [messageInfo, setMessageInfo] = useState<Message | null>(null)

  const showMessage = (message: Message) => {
    // Clear the current message first
    setMessageInfo(null)

    // Set the new message after a short delay to ensure re-mounting
    setTimeout(() => {
      setMessageInfo(message)
    }, 100)
  }

  return (
    <MessageContext.Provider value={{ showMessage }}>
      {children}
      {messageInfo && (
        <Message
          type={messageInfo.type || "success"}
          message={messageInfo.message}
          duration={messageInfo.duration || 2000}
        />
      )}
    </MessageContext.Provider>
  )
}

export const useMessage = () => {
  const context = useContext(MessageContext)
  if (!context) {
    throw new Error("useMessage must be used within a MessageProvider")
  }
  return context
}