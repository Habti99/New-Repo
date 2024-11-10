import React from 'react'
import { Container } from '../app/components/Container'
import { Button } from '../app/components/button'

const App = () => (
  <Container $hasBackground>
    <Button $variant="primary">Submit</Button>
    <Button $variant="secondary">Cancel</Button>
    <Button $isSmall>Close</Button>
  </Container>
)

export default App