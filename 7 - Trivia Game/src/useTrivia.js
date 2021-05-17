import { useState, useEffect, useCallback } from 'react'

export const useTrivia = () => {
  const [question, setQuestion] = useState(null)
  const [category, setCategory] = useState('any')

  const getQuestion = useCallback(() => {

    let url = 'https://opentdb.com/api.php?amount=1'
    if (category !== 'any') url += `&category=${category}`

    console.log(url)

    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuestion(data.results[0]))
  }, [category])

  useEffect(() => {
    getQuestion()
  }, [getQuestion])

  return {question,category,setCategory,getQuestion}
}
