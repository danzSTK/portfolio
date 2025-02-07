import { Container, StyledParagraph } from '../../styles'
import { Wrapper } from './styles'

const About = () => {
  return (
    <Container>
      <Wrapper id="sobre" data-scroll-section>
        <StyledParagraph $size="40px" as="h2">
          About <span>me</span>
        </StyledParagraph>
        <div>
          <StyledParagraph>
            Sou desenvolvedor front-end com sólida experiência em TypeScript,
            React, Redux e Styled Components,{' '}
            <span>
              focado em criar aplicações modernas, responsivas e otimizadas para
              proporcionar a melhor experiência ao usuário.
            </span>
          </StyledParagraph>
          <br />
          <StyledParagraph>
            Tenho expertise em desenvolvimento de single-page applications (SPA)
            com React Router DOM e sigo o método Git Flow para garantir um fluxo
            de trabalho organizado e eficiente.{' '}
            <span>
              Além disso, valorizo o planejamento antes do código, aplicando
              metodologias eficazes para estruturar projetos e entregar soluções
              de alta qualidade.
            </span>
          </StyledParagraph>
          <br />
          <StyledParagraph>
            Atualmente, estou expandindo meus conhecimentos como Desenvolvedor
            Full Stack Java pela EBAC, aprofundando-me em Java, banco de dados
            SQL e NoSQL.{' '}
            <span>
              Também priorizo as melhores práticas de SEO e a configuração
              otimizada de ferramentas de desenvolvimento, assegurando
              performance e escalabilidade.
            </span>
          </StyledParagraph>
          <br />
          <StyledParagraph>
            Entre meus projetos, destaco o clone da página de planos do Spotify
            e a landing page do Disney+, onde utilizei tecnologias como SASS,
            Gulp e JavaScript{' '}
            <span>
              para criar layouts interativos, acessíveis e de alta performance.
            </span>
          </StyledParagraph>
        </div>
      </Wrapper>
    </Container>
  )
}

export default About
