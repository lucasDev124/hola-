"use client"

import { Settings, LogOut, Headphones, Mic, Volume2 } from "lucide-react"
import { useState } from "react"

export default function UserProfile() {
  const [muted, setMuted] = useState(false)
  const [deafened, setDeafened] = useState(false)

  return (
    <div className="w-56 bg-discord-dark border-l border-discord-hover flex flex-col">
      {/* Online Status Section */}
      <div className="p-4 border-b border-discord-hover">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
            Y
          </div>
          <div>
            <div className="text-sm font-medium text-discord-text">Your Name</div>
            <div className="text-xs text-discord-muted">Online</div>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setMuted(!muted)}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded transition-colors ${
              muted ? "bg-red-500/20 text-red-400" : "bg-discord-hover text-discord-muted hover:text-discord-text"
            }`}
          >
            <Mic size={18} />
            <span className="text-xs font-medium">{muted ? "Muted" : "Mic"}</span>
          </button>
          <button
            onClick={() => setDeafened(!deafened)}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded transition-colors ${
              deafened ? "bg-red-500/20 text-red-400" : "bg-discord-hover text-discord-muted hover:text-discord-text"
            }`}
          >
            <Headphones size={18} />
            <span className="text-xs font-medium">{deafened ? "Deaf" : "Audio"}</span>
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4 border-b border-discord-hover">
        <h3 className="text-xs font-bold text-discord-muted mb-3">QUICK ACTIONS</h3>
        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-discord-hover transition-colors text-discord-text hover:text-white group">
            <div className="w-8 h-8 rounded bg-discord-hover group-hover:bg-discord-purple flex items-center justify-center">
              <Volume2 size={16} />
            </div>
            <div className="text-left flex-1">
              <div className="text-sm font-medium">Volume: 75%</div>
            </div>
          </button>
        </div>
      </div>

      {/* Friends Online */}
      <div className="flex-1 overflow-y-auto p-4">
        <h3 className="text-xs font-bold text-discord-muted mb-3">ONLINE FRIENDS</h3>
        <div className="space-y-2">
          {["Alice", "Bob", "Charlie", "Diana"].map((name) => (
            <button
              key={name}
              className="w-full flex items-center gap-3 px-2 py-2 rounded hover:bg-discord-hover transition-colors text-discord-text hover:text-white"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white text-xs font-bold relative">
                {name[0]}
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-discord-dark"></div>
              </div>
              <span className="text-sm font-medium flex-1 text-left">{name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Settings */}
      <div className="p-4 border-t border-discord-hover">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-discord-hover transition-colors text-discord-text hover:text-white mb-2">
          <Settings size={18} />
          <span className="text-sm font-medium">User Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-red-500/10 transition-colors text-red-400 hover:text-red-300">
          <LogOut size={18} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  )
}
