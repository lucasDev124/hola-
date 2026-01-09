"use client"

import { Hash, Volume2, Settings, Search, Plus } from "lucide-react"
import { useState } from "react"

const CHANNELS = {
  main: [
    { id: "general", name: "general", type: "text" },
    { id: "announcements", name: "announcements", type: "text" },
    { id: "random", name: "random", type: "text" },
    { id: "voice-general", name: "General Voice", type: "voice" },
    { id: "voice-gaming", name: "Gaming", type: "voice" },
  ],
  gaming: [
    { id: "gaming-general", name: "general", type: "text" },
    { id: "game-info", name: "game-info", type: "text" },
    { id: "tournaments", name: "tournaments", type: "text" },
    { id: "vc-gaming", name: "Gaming VC", type: "voice" },
  ],
  work: [
    { id: "work-general", name: "general", type: "text" },
    { id: "projects", name: "projects", type: "text" },
    { id: "meetings", name: "meetings", type: "voice" },
  ],
  friends: [
    { id: "friends-general", name: "general", type: "text" },
    { id: "memes", name: "memes", type: "text" },
    { id: "friends-vc", name: "Hangout", type: "voice" },
  ],
}

export default function ChannelList({ selectedChannel, setSelectedChannel, selectedServer }: any) {
  const [collapsed, setCollapsed] = useState(false)
  const channels = CHANNELS[selectedServer as keyof typeof CHANNELS] || []

  return (
    <div className="w-60 bg-discord-dark border-r border-discord-hover flex flex-col">
      {/* Server Header */}
      <div className="px-4 py-3 border-b border-discord-hover">
        <button className="w-full flex items-center justify-between text-disco rd-text font-bold hover:bg-discord-hover px-2 py-2 rounded transition-colors">
          <span>Server Name</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>

      {/* Search Bar */}
      <div className="px-3 py-3 border-b border-discord-hover">
        <div className="flex items-center gap-2 bg-discord-darker rounded px-2 py-1.5">
          <Search size={16} className="text-discord-muted" />
          <input
            type="text"
            placeholder="Find a channel"
            className="bg-transparent text-sm text-discord-text placeholder-discord-muted outline-none flex-1"
          />
        </div>
      </div>

      {/* Channels Section */}
      <div className="flex-1 overflow-y-auto">
        {/* Text Channels */}
        <div className="py-3">
          <div className="px-4 mb-2">
            <button className="flex items-center gap-1 text-xs font-bold text-discord-muted hover:text-discord-text transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.5 1.5H5.5a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-9a2 2 0 00-2-2z" />
              </svg>
              TEXT CHANNELS
              <Plus size={14} />
            </button>
          </div>
          {channels
            .filter((ch) => ch.type === "text")
            .map((channel) => (
              <button
                key={channel.id}
                onClick={() => setSelectedChannel(channel.id)}
                className={`w-full flex items-center gap-2 px-4 py-2 mx-2 rounded transition-colors ${
                  selectedChannel === channel.id
                    ? "bg-discord-hover text-white"
                    : "text-discord-muted hover:text-discord-text hover:bg-discord-hover/30"
                }`}
              >
                <Hash size={18} />
                <span className="text-sm font-medium">{channel.name}</span>
              </button>
            ))}
        </div>

        {/* Voice Channels */}
        <div className="py-3">
          <div className="px-4 mb-2">
            <button className="flex items-center gap-1 text-xs font-bold text-discord-muted hover:text-discord-text transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a2 2 0 00-2 2v8a2 2 0 004 0V4a2 2 0 00-2-2z" />
              </svg>
              VOICE CHANNELS
              <Plus size={14} />
            </button>
          </div>
          {channels
            .filter((ch) => ch.type === "voice")
            .map((channel) => (
              <button
                key={channel.id}
                className="w-full flex items-center gap-2 px-4 py-2 mx-2 rounded text-discord-muted hover:text-discord-text hover:bg-discord-hover/30 transition-colors group"
              >
                <Volume2 size={18} />
                <span className="text-sm font-medium flex-1 text-left">{channel.name}</span>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1 hover:bg-discord-hover rounded">
                    <Settings size={14} />
                  </button>
                </div>
              </button>
            ))}
        </div>
      </div>

      {/* User Info Footer */}
      <div className="p-3 border-t border-discord-hover bg-discord-darker">
        <div className="flex items-center gap-2 px-2 py-2 rounded hover:bg-discord-hover transition-colors cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-discord-purple flex items-center justify-center text-sm font-bold">
            U
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium truncate">Your Name</div>
            <div className="text-xs text-discord-muted truncate">@username</div>
          </div>
          <button className="p-1 opacity-0 hover:opacity-100 transition-opacity">
            <svg className="w-4 h-4 text-discord-muted" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
