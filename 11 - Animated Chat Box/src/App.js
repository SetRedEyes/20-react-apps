import React, { useState } from 'react'
import useInterval from '@use-it/interval'
import './App.css'
import { TypingIndicator } from './components/TypingIndicator'
import { Message } from './components/Message'

const messages = [
  { text: 'Wuuuuuz uuup?' },
  { text: 'Goooood, maaaan' },
  { text: 'What time is it?' },
  { text: '4.20, duuudeeee' },
  { text: 'Fire in the hole!' },
  { text: 'I need backup!' },
  { text: 'Smoke granade!' }
]

export default function App() {
  const [messageToShow, setMessageToShow] = useState(0)

  useInterval(() => {
    setMessageToShow((messageToShow) =>
      messages.length !== messageToShow ? messageToShow + 1 : messageToShow
    )
  }, 2000)

  console.log(messageToShow)
  return (
    <div className='app'>
      <div className='walkthrough'>
        {messages.map((message, index) => {
          const even = index % 2 === 0

          if (messageToShow + 1 === index) {
            return <TypingIndicator key={index} even={even} />
          }

          if (index > messageToShow) return <div key={index}></div>

          return <Message key={index} message={message} />
        })}
      </div>
    </div>
  )
}
