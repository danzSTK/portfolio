import { FaGitAlt, FaJava, FaReact } from 'react-icons/fa'
import { Item, Wrapper } from './styles'
import { SiRedux, SiTypescript } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { RiNodejsFill } from 'react-icons/ri'

const Carousel = () => {
  const iconsObjects: React.ElementType[] = [
    FaReact,
    SiTypescript,
    IoLogoJavascript,
    FaJava,
    SiRedux,
    RiNodejsFill,
    FaGitAlt
  ]


  return (
    <div>
      <Wrapper>
        {iconsObjects.map((Icone, index) => (
          <Item
            key={index}
            $length={iconsObjects.length}
            index={index}
          >
            <Icone size={100} color="#4d4d4d" />
          </Item>
        ))}
      </Wrapper>
    </div>
  )
}

export default Carousel
