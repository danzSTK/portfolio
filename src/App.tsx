import Header from './components/Header'
import Home from './pages/Home'
import { Container, GlobalStyle } from './styles'

function App() {
  return (
    <>
      <Container>
        <Header />
      </Container>
        <Home />
      <GlobalStyle />
    </>
  )
}

export default App
