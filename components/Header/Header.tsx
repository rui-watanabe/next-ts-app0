import React from 'react'
import Link from 'next/link'
import { Center, Container } from '../HeaderFooterStyle/style'

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
