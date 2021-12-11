import React from 'react'
import styled from "styled-components"
const Wrapper = styled.div`
display:flex;
flex-direction:column;
border-radius: 5px;
background-color:#95dada;
padding: 25px;
text-align:center;
border: 1px solid gray;


&:hover{
  transform:scale(1.05); 
}

`

function Card({name,id,email}) {
  return (
    <Wrapper key={id} >
      <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="monster" />
      <h2>{ name }</h2>
      <p>{ email}</p>
    </Wrapper>
  )
}

export default Card
