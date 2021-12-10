import React from 'react'
import styled from "styled-components"
const Wrapper = styled.div`
height: 300px;
width : 200px;
border-radius: 5px;
`

function Card({name,id}) {
  return (
    <Wrapper>
      {name}
    </Wrapper>
  )
}

export default Card
