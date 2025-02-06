import About from '../../components/About'
import Carousel from '../../components/Carousel'
import Hero from '../../components/Hero'
import Projects from '../../components/Projects'
import { Container } from '../../styles'

const Home = () => {
  return (
    <>
      <Container>
        <Hero />
      </Container>
      <Carousel />
      <About />
      <Projects />
    </>
  )
}

export default Home
