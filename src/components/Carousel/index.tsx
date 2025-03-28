import { FaGitAlt, FaJava, FaReact } from "react-icons/fa";
import { SiRedux, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiNodejsFill } from "react-icons/ri";

import * as S from "../Carousel/styles";

const Carousel = () => {
  const iconsObjects: React.ElementType[] = [
    FaReact,
    SiTypescript,
    IoLogoJavascript,
    FaJava,
    SiRedux,
    RiNodejsFill,
    FaGitAlt
  ];


  return (
    <section>
      <S.Wrapper>
        {iconsObjects.map((Icone, index) => (
          <S.Item
            key={index}
            $length={iconsObjects.length}
            index={index}
          >
            <Icone size={80} color="#4d4d4d" />
          </S.Item>
        ))}
      </S.Wrapper>
    </section>
  );
};

export default Carousel;
