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
  const [fadeOut, setFadeOut] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setTimeout(() => {
        setVisible(false)
      }, 500);
      setFadeOut(true)
    }, duration)

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [duration])

  if (!visible) return null

  return <div className={`massage-container fade-in ${type} ${fadeOut ? 'fade-out' : ''}`}>{message}</div>
}

export default Message