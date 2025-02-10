import Header from './components/header'
import Home from './pages/Home'
import { GlobalStyle } from './styles'
import LocomotiveScrollProvider from './provider/LocomotiveScrollProvider'
import { useRef } from 'react'

function App() {
  const containerRef = useRef<HTMLElement | null>(null)

  return (
    <LocomotiveScrollProvider containerRef={containerRef}>
      <Header />
      <main ref={containerRef}>
        <Home />
      </main>
      <GlobalStyle />
    </LocomotiveScrollProvider>
  )
}

export default App
