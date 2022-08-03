import React, { useEffect, useState } from 'react'

const StartActivitySessionButton = () => (
  <form action="/api/examples/start-activity-session" method="POST">
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Email
      </label>
      <div className="mt-1">
        <input
          type="email"
          name="email"
          id="email"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="you@example.com"
        />
      </div>
      <p className="mt-2 text-sm text-gray-500" id="email-description">
        We will send an email to this address which allows you to start the
        hosted activity session.
      </p>
    </div>
    <button
      className="btn-base mt-4 px-6 py-3.5 text-base text-white bg-slate-900 hover:bg-slate-700 focus:ring-offset-slate-50 focus:ring-slate-400 dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
      type="submit"
    >
      Trigger activity
    </button>
  </form>
)

const Message = ({ message }: { message: string }) => <p>{message}</p>

export default function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const query = new URLSearchParams(window.location.search)

    if (query.get('success')) {
      setMessage('You have completed all your activities.')
    }

    if (query.get('canceled')) {
      setMessage('Your session got canceled.')
    }
  }, [])

  return message ? (
    <Message message={message} />
  ) : (
    <div className="flex justify-center items-center h-screen">
      <StartActivitySessionButton />
    </div>
  )
}
