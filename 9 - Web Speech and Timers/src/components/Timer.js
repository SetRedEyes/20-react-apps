import React from 'react'
import '../App.css'

export const Timer = ({ seconds, speaking, isRunning, reset, start }) => (
  <>
    {/* seconds */}
    <h2>{seconds}</h2>

    {/* buttons */}
    <div className='buttons'>
      {!isRunning && (
        <button
          className='start-button'
          onClick={start}>
          Start
        </button>
      )}

      {isRunning && (
        <button
          className='stop-button'
          onClick={reset}>
          Stop
        </button>
      )}

      {speaking && <p>I am speaking...</p>}
    </div>
  </>
)
