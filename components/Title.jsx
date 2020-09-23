import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`

const Subtitle = styled.div`
  font-size: 20px;
  text-align: center;
`

export default () => (
  <>
    <Title>Palindrome Checker (Madam Anna was in her Racecar at Noon, saw this and said Wow/)</Title>
    <Subtitle>Determines if the word provided is a Palindrome</Subtitle>
  </>
)
