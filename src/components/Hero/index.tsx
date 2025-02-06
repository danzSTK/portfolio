import { StyledParagraph } from '../../styles'
import cartoon from '../../assets/images/me_cartoon.png'
import {
  ActionBar,
  ArrowAnimate,
  ContentLeft,
  ContentRight,
  HeroContainer
} from './styles'
import { MdDownload } from 'react-icons/md'
import { RiArrowDownSLine, RiWhatsappFill } from 'react-icons/ri'

const Hero = () => {
  return (
    <HeroContainer>
      <ContentLeft>
        <StyledParagraph $size="56px" as="h2">
          Olá sou <span>Daniel Félix!</span>
        </StyledParagraph>
        <StyledParagraph $size="32px" as="h3">
          Sou <span>criador</span> de <span>soluções</span> Web{' '}
          <span>Full Stack</span>
        </StyledParagraph>
        <ActionBar>
          <a href="">
            <MdDownload size={24} />
            Curriculo
          </a>
          <button>
            <RiWhatsappFill size={24} />
            <span>Entre em contato</span>
          </button>
        </ActionBar>
      </ContentLeft>
      <ContentRight>
        <img src={cartoon} alt="my icon" />
      </ContentRight>
      <ArrowAnimate href="#sobre">
        <span>
          <RiArrowDownSLine size={40} />
        </span>
      </ArrowAnimate>
    </HeroContainer>
  )
}

export default Hero
