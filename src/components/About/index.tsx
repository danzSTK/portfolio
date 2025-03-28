import * as G from "../../styles";
import * as S from "../About/styles";

const About = () => {
  return (
    <G.Container as="section" data-scroll-section id="about">
      <S.Wrapper>
        <G.StyledParagraph className="title" as="h2">
          About <span>me</span>
        </G.StyledParagraph>
        <div>
          <G.StyledParagraph>
            Sou desenvolvedor front-end com sólida experiência em TypeScript,
            React, Redux e Styled Components,{" "}
            <span>
              focado em criar aplicações modernas, responsivas e otimizadas para
              proporcionar a melhor experiência ao usuário.
            </span>
          </G.StyledParagraph>
          <br />
          <G.StyledParagraph>
            Tenho expertise em desenvolvimento de single-page applications (SPA)
            com React Router DOM e sigo o método Git Flow para garantir um fluxo
            de trabalho organizado e eficiente.{" "}
            <span>
              Além disso, valorizo o planejamento antes do código, aplicando
              metodologias eficazes para estruturar projetos e entregar soluções
              de alta qualidade.
            </span>
          </G.StyledParagraph>
          <br />
          <G.StyledParagraph>
            Atualmente, estou expandindo meus conhecimentos como Desenvolvedor
            Full Stack Java pela EBAC, aprofundando-me em Java, banco de dados
            SQL e NoSQL.{" "}
            <span>
              Também priorizo as melhores práticas de SEO e a configuração
              otimizada de ferramentas de desenvolvimento, assegurando
              performance e escalabilidade.
            </span>
          </G.StyledParagraph>
          <br />
          <G.StyledParagraph>
            Entre meus projetos, destaco o clone da página de planos do Spotify
            e a landing page do Disney+, onde utilizei tecnologias como SASS,
            Gulp e JavaScript{" "}
            <span>
              para criar layouts interativos, acessíveis e de alta performance.
            </span>
          </G.StyledParagraph>
        </div>
      </S.Wrapper>
    </G.Container>
  );
};

export default About;
