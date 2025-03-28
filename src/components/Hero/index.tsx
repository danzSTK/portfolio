import { MdDownload } from "react-icons/md";
import { RiArrowDownSLine, RiWhatsappFill } from "react-icons/ri";

import cartoon from "../../assets/images/me_cartoon.png";
import curriculo from "../../assets/docs/Meu CV Ebac.docx.pdf";

import * as G from "../../styles";

import * as S from "../Hero/styles";

const Hero = () => {
  return (
    <G.Container as="section" id="home" data-scroll-section>
      <S.HeroContainer>
        <S.ContentLeft>
          <G.StyledParagraph $size="56px" as="h2">
            Olá sou <span>Daniel Félix!</span>
          </G.StyledParagraph>
          <G.StyledParagraph $size="32px" as="h3">
            Sou <span>criador</span> de <span>soluções</span> Web{" "}
            <span>Full Stack</span>
          </G.StyledParagraph>
          <S.ActionBar>
            <a
              href={curriculo}
              download
              rel="noopener noreferrer"
              target="_blank"
              type="PDF"
              title="Baixar curriculo em PDF"
            >
              <MdDownload size={24} />
              Curriculo
            </a>
            <button>
              <RiWhatsappFill size={24} />
              <span>Entre em contato</span>
            </button>
          </S.ActionBar>
        </S.ContentLeft>
        <S.ContentRight>
          <img src={cartoon} alt="my icon" />
        </S.ContentRight>
        <S.ArrowAnimate href="#sobre">
          <span>
            <RiArrowDownSLine size={40} />
          </span>
        </S.ArrowAnimate>
      </S.HeroContainer>
    </G.Container>
  );
};

export default Hero;
