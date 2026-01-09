"use client"
import { Plus, Compass, DownloadCloud } from "lucide-react"

const SERVERS = [
  { id: "main", name: "Main", icon: "🎮", color: "bg-blue-500" },
  { id: "gaming", name: "Gaming", icon: "🎯", color: "bg-purple-500" },
  { id: "work", name: "Work", icon: "💼", color: "bg-green-500" },
  { id: "friends", name: "Friends", icon: "👥", color: "bg-pink-500" },
]

export default function Sidebar({ selectedServer, setSelectedServer }: any) {
  return (
    <div className="w-20 bg-discord-darker flex flex-col items-center py-4 gap-2">
      {/* Home Button */}
      <button className="w-12 h-12 rounded-full bg-discord-purple hover:rounded-2xl hover:bg-discord-purple/80 flex items-center justify-center transition-all duration-200 text-white font-bold text-lg">
        💬
      </button>

      {/* Divider */}
      <div className="w-8 h-1 bg-discord-muted rounded-full opacity-20"></div>

      {/* Server List */}
      {SERVERS.map((server) => (
        <button
          key={server.id}
          onClick={() => setSelectedServer(server.id)}
          className={`w-12 h-12 rounded-3xl flex items-center justify-center font-bold text-white text-lg transition-all duration-200 hover:rounded-2xl ${
            selectedServer === server.id
              ? `${server.color} rounded-2xl`
              : `${server.color} opacity-70 hover:opacity-100`
          }`}
          title={server.name}
        >
          {server.icon}
        </button>
      ))}

      {/* Divider */}
      <div className="w-8 h-1 bg-discord-muted rounded-full opacity-20"></div>

      {/* Add Server Button */}
      <button className="w-12 h-12 rounded-full hover:rounded-2xl bg-discord-hover hover:bg-discord-purple flex items-center justify-center transition-all duration-200 text-discord-purple hover:text-white text-2xl">
        <Plus size={24} />
      </button>

      {/* Bottom Buttons */}
      <div className="mt-auto flex flex-col gap-2">
        <button className="w-12 h-12 rounded-full hover:bg-discord-hover flex items-center justify-center transition-all duration-200 text-discord-muted hover:text-discord-text">
          <Compass size={24} />
        </button>
        <button className="w-12 h-12 rounded-full hover:bg-discord-hover flex items-center justify-center transition-all duration-200 text-discord-muted hover:text-discord-text">
          <DownloadCloud size={24} />
        </button>
      </div>
    </div>
  )
}
