import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const Wrapper = styled.div`
width: 85vw;
  margin: auto;
  display: grid; 
  grid-template-columns: repeat(4, 1fr );
  grid-gap: 20px;
`

function CardList({ array }) {
  const items =  array.map(
        item => (
          <Card id={item.id} key={item.id} email={item.email} name={item.name}/>
        )
      )
  return (
    
      
    <Wrapper  >
      {items}
      </Wrapper>
      
  )
}

export default CardList
