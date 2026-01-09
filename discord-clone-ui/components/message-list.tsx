export default function MessageList({ messages, messagesEndRef }: any) {
  return (
    <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
      {messages.map((message: any) => (
        <div key={message.id} className="flex gap-4 hover:bg-discord-hover/20 p-2 rounded group transition-colors">
          <div className="relative flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
              {message.avatar}
            </div>
            {message.online && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-discord-dark"></div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2">
              <span className="font-medium text-discord-text">{message.user}</span>
              <span className="text-xs text-discord-muted">{message.timestamp}</span>
            </div>
            <p className="text-sm text-discord-text break-words">{message.content}</p>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
            <button className="p-1.5 hover:bg-discord-hover rounded transition-colors text-discord-muted hover:text-discord-text">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.172 16.172a4 4 0 015.656 0l2.828-2.829a6 6 0 00-8.488 0l2.004 2.829zm-.707-9.899a4 4 0 015.656 0l2.828-2.829a6 6 0 00-8.488 0l2.004 2.829z" />
              </svg>
            </button>
            <button className="p-1.5 hover:bg-discord-hover rounded transition-colors text-discord-muted hover:text-discord-text">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.952-2.475A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
              </svg>
            </button>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  )
}
