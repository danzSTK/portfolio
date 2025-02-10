import { IoIosArrowForward, IoLogoJavascript } from 'react-icons/io'
import { Container, StyledParagraph } from '../../styles'
import project1Background from './../../assets/images/teste.png'
import project2Background from '../../assets/images/clone-disneyplus.png'
import {
  ActionBar,
  Content,
  Description,
  PathContent,
  ToolsContent,
  Wrapper
} from './styles'
import { SiGulp } from 'react-icons/si'
import { FaSass } from 'react-icons/fa'
import { MdHtml } from 'react-icons/md'

const Projects = () => {
  return (
    <Container>
      <Wrapper>
        <StyledParagraph $size="40px" as="h2">
          Selected <span>Works</span>
        </StyledParagraph>
        <Content tabIndex={0}>
          <Description>
            <header>
              <StyledParagraph $size="24px" as="h3">
                Spotify <span>project</span>
              </StyledParagraph>
            </header>
            <article>
              <StyledParagraph>
                Desenvolvi um clone da página de preços do Spotify utilizando
                SASS, Gulp, JavaScript e linguagens de marcação.{' '}
                <span>
                  O projeto foi criado com o objetivo de aprofundar minha
                  compreensão das funcionalidades avançadas do SASS, como
                  variáveis e mixins, além de otimizar o fluxo de trabalho com
                  Gulp para automação de tarefas.
                </span>
              </StyledParagraph>
            </article>
            <ActionBar>
              <ToolsContent>
                <SiGulp />
                <FaSass />
                <MdHtml />
                <IoLogoJavascript />
              </ToolsContent>
              <PathContent>
                <a
                  href="https://clone-plans-spotify-page.vercel.app"
                  target="_blank"
                  title="Veja o projeto em outra aba"
                  rel="noopener noreferrer"
                >
                  View work <IoIosArrowForward />
                </a>
              </PathContent>
            </ActionBar>
          </Description>
          <a
            href="https://clone-plans-spotify-page.vercel.app"
            target="_blank"
            title="Veja o projeto em outra aba"
            rel="noopener noreferrer"
          >
            <img
              src={project1Background}
              alt="PNG da página inicial do projeto"
            />
          </a>
        </Content>
        <Content tabIndex={0} className="reverse">
          <Description>
            <header>
              <StyledParagraph $size="24px" as="h3">
                <span>Disney+</span> clone
              </StyledParagraph>
            </header>
            <article>
              <StyledParagraph>
              Este projeto visa aprimorar minhas habilidades na construção de layouts utilizando SASS, aplicando as melhores práticas de escrita no formato BEM (Block, Element, Modifier).
              <span> Com o uso de JavaScript, consegui replicar fielmente as animações originais da landing page do Disney+, garantindo uma experiência fluida e envolvente.</span>
              </StyledParagraph>
            </article>
            <ActionBar>
              <ToolsContent>
                <SiGulp />
                <FaSass />
                <MdHtml />
                <IoLogoJavascript />
              </ToolsContent>
              <PathContent>
                <a
                  href="https://clone-disneyplus-iota-dusky.vercel.app"
                  target="_blank"
                  title="Veja o projeto em outra aba"
                  rel="noopener noreferrer"
                >
                  View work <IoIosArrowForward />
                </a>
              </PathContent>
            </ActionBar>
          </Description>
          <a
            href="https://clone-disneyplus-iota-dusky.vercel.app"
            target="_blank"
            title="Veja o projeto em outra aba"
            rel="noopener noreferrer">
            <img src={project2Background} alt="PNG da página inicial do projeto"/>
          </a>
        </Content>
      </Wrapper>
    </Container>
  )
}

export default Projects
