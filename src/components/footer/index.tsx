import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Container, StyledParagraph } from '../../styles'
import * as S from './styles'
import { LiaLinkedin } from 'react-icons/lia'
import { TbBrandLinkedin } from 'react-icons/tb'

const Footer = () => {
  return (
    <Container>
      <S.Footer>
        <StyledParagraph as="h2" $size="25px">
          Minhas <span>redes socias</span>
        </StyledParagraph>
        <ul>
          <li>
            <a href="/">
              <TbBrandLinkedin />
              <FaGithub />
            </a>
          </li>
        </ul>
      </S.Footer>
    </Container>
  )
}

export default Footer
