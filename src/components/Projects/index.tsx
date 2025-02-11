import { IoIosArrowForward, IoLogoJavascript } from 'react-icons/io'
import { SiGulp } from 'react-icons/si'
import { FaSass } from 'react-icons/fa'
import { MdHtml } from 'react-icons/md'

import project1Background from './../../assets/images/teste.png'
import project2Background from '../../assets/images/clone-disneyplus.png'

import * as G from '../../styles'
import * as S from './styles'

const Projects = () => {
  return (
    <G.Container as="section">
      <S.Wrapper>
        <G.StyledParagraph $size="40px" as="h2">
          Selected <span>Works</span>
        </G.StyledParagraph>
        <S.Content tabIndex={0}>
          <S.Description>
            <header>
              <G.StyledParagraph $size="24px" as="h3">
                Spotify <span>project</span>
              </G.StyledParagraph>
            </header>
            <article>
              <G.StyledParagraph>
                Desenvolvi um clone da página de preços do Spotify utilizando
                SASS, Gulp, JavaScript e linguagens de marcação.{' '}
                <span>
                  O projeto foi criado com o objetivo de aprofundar minha
                  compreensão das funcionalidades avançadas do SASS, como
                  variáveis e mixins, além de otimizar o fluxo de trabalho com
                  Gulp para automação de tarefas.
                </span>
              </G.StyledParagraph>
            </article>
            <S.ActionBar>
              <S.ToolsContent>
                <SiGulp />
                <FaSass />
                <MdHtml />
                <IoLogoJavascript />
              </S.ToolsContent>
              <S.PathContent>
                <a
                  href="https://clone-plans-spotify-page.vercel.app"
                  target="_blank"
                  title="Veja o projeto em outra aba"
                  rel="noopener noreferrer"
                >
                  View work <IoIosArrowForward />
                </a>
              </S.PathContent>
            </S.ActionBar>
          </S.Description>
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
        </S.Content>
        <S.Content tabIndex={0} className="reverse">
          <S.Description>
            <header>
              <G.StyledParagraph $size="24px" as="h3">
                <span>Disney+</span> clone
              </G.StyledParagraph>
            </header>
            <article>
              <G.StyledParagraph>
              Este projeto visa aprimorar minhas habilidades na construção de layouts utilizando SASS, aplicando as melhores práticas de escrita no formato BEM (Block, Element, Modifier).
              <span> Com o uso de JavaScript, consegui replicar fielmente as animações originais da landing page do Disney+, garantindo uma experiência fluida e envolvente.</span>
              </G.StyledParagraph>
            </article>
            <S.ActionBar>
              <S.ToolsContent>
                <SiGulp />
                <FaSass />
                <MdHtml />
                <IoLogoJavascript />
              </S.ToolsContent>
              <S.PathContent>
                <a
                  href="https://clone-disneyplus-iota-dusky.vercel.app"
                  target="_blank"
                  title="Veja o projeto em outra aba"
                  rel="noopener noreferrer"
                >
                  View work <IoIosArrowForward />
                </a>
              </S.PathContent>
            </S.ActionBar>
          </S.Description>
          <a
            href="https://clone-disneyplus-iota-dusky.vercel.app"
            target="_blank"
            title="Veja o projeto em outra aba"
            rel="noopener noreferrer">
            <img src={project2Background} alt="PNG da página inicial do projeto"/>
          </a>
        </S.Content>
      </S.Wrapper>
    </G.Container>
  )
}

export default Projects
