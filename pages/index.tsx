import Image from 'next/image'
import styled  from "styled-components"
import { Inter } from 'next/font/google'

const Wrapper = styled.h1`
  background-color: red;
`

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24  `}
    >
      <Wrapper>Hello</Wrapper>
    </main>
  )
}
