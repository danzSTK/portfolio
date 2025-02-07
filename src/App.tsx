import Header from './components/Header'
import Home from './pages/Home'
import { Container, GlobalStyle } from './styles'
import LocomotiveScrollProvider from './provider/LocomotiveScrollProvider'
import { useRef } from 'react'

function App() {
  const containerRef = useRef<HTMLElement | null>(null)

  return (
    <LocomotiveScrollProvider containerRef={containerRef}>
      <main ref={containerRef}>
        <Container>
          <Header />
        </Container>
        <Home />
        <GlobalStyle />
      </main>
    </LocomotiveScrollProvider>
  )
}

export default App
