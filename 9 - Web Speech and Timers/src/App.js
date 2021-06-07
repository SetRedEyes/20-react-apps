import React, { useState, useEffect, useCallback } from 'react'
import { useStopwatch } from 'react-timer-hook'
import { useSpeechSynthesis } from 'react-speech-kit'
import './App.css'
import { Timer } from './components/Timer'
import { TimerSlot } from './components/TimerSlot'

export default function App() {
  const [timers, setTimers] = useState([
    { time: 2, text: 'this is my message' },
    { time: 5, text: 'hello' },
    { time: 8, text: 'whats up' }
  ])
  const { seconds, isRunning, start, reset } = useStopwatch()
  const { speak, speaking, supported } = useSpeechSynthesis()

  const doReset = useCallback(() => reset(), [])
  const doSpeak = useCallback((...p) => speak(...p), [])

  useEffect(() => {
    const foundTimer = timers.find((t) => t.time === seconds)
    if (foundTimer) doSpeak({ text: foundTimer.text })

    if (seconds > timers[timers.length - 1].time) doReset()
  }, [seconds, timers, doSpeak, doReset])

  function updateTimers(index, time, text) {
    const newTimers = [...timers]
    newTimers[index].time = time
    newTimers[index].text = text

    setTimers(newTimers)
  }

  function addTimer() {
    const newTimers = [...timers, { time: 10, text: 'yooo' }]
    setTimers(newTimers)
  }

  if (!supported) {
    return <div>Your browser is not supported. Sorry.</div>
  }

  return (
    <div className='app'>
      <h2>Talk the Talk</h2>

      <div className='timers'>
        {/* timers go here */}
        {timers.map((timer, index) => (
          <TimerSlot
            key={index}
            index={index}
            timer={timer}
            updateTimers={updateTimers}
          />
        ))}

        <button
          className='add-button'
          onClick={addTimer}>
          Add
        </button>
      </div>

      <Timer
        seconds={seconds}
        isRunning={isRunning}
        speaking={speaking}
        start={start}
        reset={reset}
      />
    </div>
  )
}
