import React from 'react'
import { Container } from './style'
import { Center } from '../Center/style'
import Link from 'next/link'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  return (
    <Container>
      <Center>
        <Link href="/">home</Link>
        <div>{currentYear}</div>
      </Center>
    </Container>
  )
}
