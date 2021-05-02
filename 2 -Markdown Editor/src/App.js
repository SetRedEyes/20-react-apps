import React, { useState } from 'react'
// import marked from 'marked';
import  ReactMarkdown from 'react-markdown';
import './App.css'

export default function App() {
  const [markdown, setMarkdown] = useState('# suppp')

  function handleChange(e) {
    setMarkdown(e.target.value)
  }

  return (
    <div className='app'>
      <textarea value={markdown} onChange={handleChange} />

      {/* <div className='preview' dangerouslySetInnerHTML={{__html:marked(markdown)}}/> */}

      <ReactMarkdown className='preview'>{markdown}</ReactMarkdown>
    </div>
  )
}
