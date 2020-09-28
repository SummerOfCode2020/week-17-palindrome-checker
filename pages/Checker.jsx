import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import Output from '../components/Output'
import Page from '../components/Page'
import Title from '../components/Title'

export default () => {
  const [reversedWord, setReversedWord] = useState('')
  const [word, setWord] = useState('')

  useEffect(() => {
    setWord(word.toLowerCase())
    setReversedWord(word.split('').reverse().join(''))
  }, [word])

  return (
    <Page>
      <Title />
      <Input word={word} setter={setWord} />
      {
        word
          ? <Output word={word} reversedWord={reversedWord} />
          : null
      }
    </Page>
  )
}
