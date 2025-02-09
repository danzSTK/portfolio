import About from '../../components/about'
import Carousel from '../../components/carousel'
import Footer from '../../components/footer'
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
      <Footer />
    </>
  )
}

export default Home
