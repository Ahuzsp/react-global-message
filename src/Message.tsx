import React, { useState, useEffect, useRef } from "react"
import './message.css'
type MessageType = "success" | "error" | "info" | "warning"

interface MessageProps {
  type: MessageType
  message: string
  duration: number
}
const Message: React.FC<MessageProps> = ({
  type = "success",
  message,
  duration
}) => {
  const [visible, setVisible] = useState(true)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    timerRef.current = setTimeout(() => {
        setVisible(false)
    }, duration)

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [duration])

  if (!visible) return null

  return <div className={`massage-container ${type}`}>{message}</div>
}

export default Message