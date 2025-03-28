import * as S from "../Header/styles";

import logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

enum SessionPathInHeader {
  home = "home",
  about = "about",
  stackTools = "tools",
  project = "projects"
}

const Header = () => {
  const [activeSection, setActiveSection] = useState<SessionPathInHeader>(
    SessionPathInHeader.home
  );

  useEffect(() => {
    const sessionObserver = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActiveSection(visibleSection.target.id as SessionPathInHeader);
        }
      },
      {
        threshold: 0.5
      }
    );

    Object.values(SessionPathInHeader).forEach((sectionId) => {
      const element = document.getElementById(sectionId);

      if (element) sessionObserver.observe(element);
    });
  }, []);

  return (
    <S.Header>
      <S.Logo>
        <img src={logo} alt="" />
      </S.Logo>
      <S.NavLinks>
        <S.Links>
          {Object.values(SessionPathInHeader).map((section) => (
            <S.Path
              key={section}
              href={`#${section}`}
              className={activeSection === section ? "active" : ""}
            >
              {section}
            </S.Path>
          ))}
        </S.Links>
      </S.NavLinks>
      <nav>
        <S.SocialPaths>
          <li>
            <a
              href="https://github.com/danzSTK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/danielfelixdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
        </S.SocialPaths>
      </nav>
    </S.Header>
  );
};

export default Header;
