import About from '../../components/about'
import Carousel from '../../components/carousel'
import Hero from '../../components/Hero'
import Projects from '../../components/projects'
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
