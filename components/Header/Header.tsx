import React from 'react'
import Link from 'next/link'
import { Container } from './style'
import { Center } from '../Center/style'

export const Header: React.FC = () => {
  return (
    <Container>
      <Center>
        <Link href="/">
          <a>home</a>
        </Link>
      </Center>
    </Container>
  )
}
