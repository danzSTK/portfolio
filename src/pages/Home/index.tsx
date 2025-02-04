import About from '../../components/About'
import Carousel from '../../components/Carousel'
import Hero from '../../components/Hero'
import { Container } from '../../styles'

const Home = () => {
  return (
    <>
      <Container>
        <Hero />
      </Container>
      <Carousel />
        <About />
    </>
  )
}

export default Home
