import React from 'react'
import Card from './Card'

function CardList({ array }) {
  const items =  array.map(
        item => (
          <Card id={item.id} name={item.name}/>
        )
      )
  return (
    <div>
      {items}
      </div>
  )
}

export default CardList
