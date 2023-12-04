import React from 'react'
import styled from 'styled-components'
export default function PrimaryButton({children}) {
  return (
    <Root>{children}</Root>
  )
}
const Root = styled.div`
background-color:#fff;
border-radius:10px;
display:flex;
width:fit-content;
align-items:center;
gap:10px;
padding: 10px;
cursor: pointer;
&:hover{
    background-color:#e2e2e2;
}

`