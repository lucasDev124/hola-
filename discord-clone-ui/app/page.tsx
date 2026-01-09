"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import ChannelList from "@/components/channel-list"
import ChatArea from "@/components/chat-area"
import UserProfile from "@/components/user-profile"

export default function Home() {
  const [selectedChannel, setSelectedChannel] = useState("general")
  const [selectedServer, setSelectedServer] = useState("main")

  return (
    <div className="flex h-screen bg-discord-dark text-discord-text">
      {/* Server Sidebar */}
      <Sidebar selectedServer={selectedServer} setSelectedServer={setSelectedServer} />

      {/* Channels Sidebar */}
      <ChannelList
        selectedChannel={selectedChannel}
        setSelectedChannel={setSelectedChannel}
        selectedServer={selectedServer}
      />

      {/* Main Chat Area */}
      <ChatArea selectedChannel={selectedChannel} />

      {/* User Profile */}
      <UserProfile />
    </div>
  )
}
