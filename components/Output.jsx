import React from 'react'
import styled from 'styled-components'

const Output = styled.div`
  font-size: 20px;
  text-align: center;
`

export default ({ word, reversedWord }) => (
  <Output>
    {
      word === reversedWord
        ? `Why yes, ${word} spelled backwards is ${reversedWord}`
        : `Nope, because ${word} spelled backwards is ${reversedWord}`
    }
  </Output>
)
