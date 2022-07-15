import React, { useEffect, useState } from 'react'

const StartPathwaySessionButton = () => (
  <form action="/api/examples/start-pathway-session" method="POST">
    <button
      className="btn-base px-6 py-3.5 text-base text-white bg-slate-900 hover:bg-slate-700 focus:ring-offset-slate-50 focus:ring-slate-400 dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
      type="submit"
    >
      Start pathway session
    </button>
  </form>
)

const Message = ({ message }: { message: string }) => <p>{message}</p>

export default function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const query = new URLSearchParams(window.location.search)

    if (query.get('success')) {
      setMessage('Pathway completed.')
    }

    if (query.get('canceled')) {
      setMessage('Pathway canceled.')
    }
  }, [])

  return message ? (
    <Message message={message} />
  ) : (
    <div className="flex justify-center items-center h-screen">
      <StartPathwaySessionButton />
    </div>
  )
}
