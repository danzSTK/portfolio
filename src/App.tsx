import Header from './components/Header'
import Home from './pages/Home'
import { Container, GlobalStyle } from './styles'

function App() {
  return (
    <>
      <Container>
        <Header />
        <Home />
      </Container>
      <GlobalStyle />
    </>
  )
}

export default App
