"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, Plus, Smile } from "lucide-react"
import MessageList from "./message-list"

export default function ChatArea({ selectedChannel }: any) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "Alice",
      avatar: "👩‍💻",
      timestamp: "10:30 AM",
      content: "Hey everyone! How is the project going?",
      online: true,
    },
    {
      id: 2,
      user: "Bob",
      avatar: "👨‍💼",
      timestamp: "10:32 AM",
      content: "Pretty good! I just finished the API integration.",
      online: true,
    },
    {
      id: 3,
      user: "Charlie",
      avatar: "🧑‍🎨",
      timestamp: "10:35 AM",
      content: "The UI designs are almost ready",
      online: false,
    },
    {
      id: 4,
      user: "Alice",
      avatar: "👩‍💻",
      timestamp: "10:37 AM",
      content: "Great! Let's sync up tomorrow morning.",
      online: true,
    },
  ])

  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      const newMessage = {
        id: messages.length + 1,
        user: "You",
        avatar: "🧑",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        content: input,
        online: true,
      }
      setMessages([...messages, newMessage])
      setInput("")
    }
  }

  return (
    <div className="flex-1 flex flex-col bg-discord-dark">
      {/* Header */}
      <div className="h-16 border-b border-discord-hover bg-discord-dark flex items-center justify-between px-6">
        <div>
          <h2 className="text-lg font-bold text-discord-text"># {selectedChannel}</h2>
          <p className="text-xs text-discord-muted">This is the beginning of the {selectedChannel} channel.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-discord-hover rounded-full transition-colors text-discord-muted hover:text-discord-text">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="p-2 hover:bg-discord-hover rounded-full transition-colors text-discord-muted hover:text-discord-text">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.5 1.5H5.5a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-9a2 2 0 00-2-2z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Messages */}
      <MessageList messages={messages} messagesEndRef={messagesEndRef} />

      {/* Input Area */}
      <div className="p-6 bg-discord-dark">
        <form onSubmit={handleSendMessage} className="flex gap-4 items-end">
          <button
            type="button"
            className="p-2 hover:bg-discord-hover rounded transition-colors text-discord-muted hover:text-discord-text"
          >
            <Plus size={24} />
          </button>
          <div className="flex-1 flex gap-2 bg-discord-darker rounded-lg px-4 py-3 items-end">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Message #${selectedChannel}`}
              className="bg-transparent text-discord-text placeholder-discord-muted outline-none flex-1 text-sm"
            />
            <button
              type="button"
              className="p-1.5 hover:bg-discord-hover rounded transition-colors text-discord-muted hover:text-discord-text"
            >
              <Smile size={20} />
            </button>
          </div>
          <button
            type="submit"
            className="p-2 bg-discord-purple hover:bg-discord-purple/80 text-white rounded transition-colors"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  )
}
