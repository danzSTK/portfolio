import Hero from "../../components/Hero";
import About from "../../components/About";
import Carousel from "../../components/Carousel";
import Projects from "../../components/Projects";
import StackSession from "../../components/stacks-session";

const Home = () => {
  return (
    <>
      <Hero />
      <Carousel />
      <About />
      <StackSession />
      <Projects />
    </>
  );
};

export default Home;
