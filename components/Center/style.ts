import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  padding: 7px 0;
  background-color: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`

export const Center = styled.div`
  max-width: 1000px;
  padding: 0 20px;
  margin: auto;
  @media (max-width: 800px) {
    max-width: 520px;
    padding: 0 15px;
  }
`
