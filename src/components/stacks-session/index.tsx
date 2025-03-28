import { useState } from "react";

import * as FaIcon from "react-icons/fa";
import * as SiIcon from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoVue } from "react-icons/io5";

import type { IconType } from "react-icons";

import * as G from "../../styles";
import * as S from "./style";

const enum ToolsContentName {
  frontend = "front-end",
  backend = "back-end",
  database = "database"
}

type VisibleCountType = {
  count: number;
  active: boolean;
};

type ToolsItemsType = {
  Contentname: ToolsContentName;
  name: string;
  Icon: IconType;
};

const frontEndTools: ToolsItemsType[] = [
  {
    Contentname: ToolsContentName.frontend,
    name: "React",
    Icon: FaIcon.FaReact
  },
  {
    Contentname: ToolsContentName.frontend,
    name: "Angula",
    Icon: FaIcon.FaAngular
  },
  {
    Contentname: ToolsContentName.frontend,
    name: "Vue",
    Icon: IoLogoVue
  },
  {
    Contentname: ToolsContentName.frontend,
    name: "Typescript",
    Icon: SiIcon.SiTypescript
  },
  {
    Contentname: ToolsContentName.frontend,
    name: "Javascript",
    Icon: IoLogoJavascript
  },
  {
    Contentname: ToolsContentName.frontend,
    name: "Styled Component",
    Icon: SiIcon.SiStyledcomponents
  },
  {
    Contentname: ToolsContentName.frontend,
    name: "Tailwind",
    Icon: SiIcon.SiTailwindcss
  },
  {
    Contentname: ToolsContentName.frontend,
    name: "Bootstrap",
    Icon: FaIcon.FaBootstrap
  }
];

const databaseTools: ToolsItemsType[] = [
  {
    Contentname: ToolsContentName.database,
    name: "Postgres SQL",
    Icon: SiIcon.SiPostgresql
  },
  {
    Contentname: ToolsContentName.database,
    name: "My SQL",
    Icon: SiIcon.SiMysql
  },
  {
    Contentname: ToolsContentName.database,
    name: "Mongo DB",
    Icon: SiIcon.SiMongodb
  },
  {
    Contentname: ToolsContentName.database,
    name: "SQL",
    Icon: FaIcon.FaDatabase
  },
  {
    Contentname: ToolsContentName.database,
    name: "NoSQL",
    Icon: FaIcon.FaDatabase
  }
];

const backEndTools: ToolsItemsType[] = [
  {
    Contentname: ToolsContentName.backend,
    name: "Node.js",
    Icon: FaIcon.FaNode
  },
  {
    Contentname: ToolsContentName.backend,
    name: "Express",
    Icon: SiIcon.SiExpress
  },
  {
    Contentname: ToolsContentName.backend,
    name: "Fastify",
    Icon: SiIcon.SiFastify
  },
  {
    Contentname: ToolsContentName.backend,
    name: "Nest.js",
    Icon: SiIcon.SiNestjs
  },
  {
    Contentname: ToolsContentName.backend,
    name: "Java",
    Icon: FaIcon.FaJava
  }
];

const StackSession = () => {
  const [visibleCountFront, setVisibleCountFront] = useState<VisibleCountType>({
    active: false,
    count: 3
  });
  const [visibleCountBackend, setVisibleCountBackend] =
    useState<VisibleCountType>({
      active: false,
      count: 3
    });
  const [visibleCountDatabase, setVisibleCountDatabase] =
    useState<VisibleCountType>({
      active: false,
      count: 3
    });

  const showMore = (content: ToolsContentName) => {
    switch (content) {
      case "front-end":
        setVisibleCountFront({
          count: frontEndTools.length,
          active: true
        });
        break;
      case "back-end":
        setVisibleCountBackend({
          active: true,
          count: backEndTools.length
        });
        break;
      case "database":
        setVisibleCountDatabase({
          count: databaseTools.length,
          active: true
        });
    }
  };

  const seeLess = (content: ToolsContentName) => {
    switch (content) {
      case "front-end":
        setVisibleCountFront({
          count: 3,
          active: false
        });
        break;
      case "back-end":
        setVisibleCountBackend({
          count: 3,
          active: false
        });
        break;
      case "database":
        setVisibleCountDatabase({
          count: 3,
          active: false
        });
    }
  };
  return (
    <G.Container as="section" id="tools">
      <G.StyledParagraph className="title" as="h2">
        Technologies and <span>tools</span>
      </G.StyledParagraph>

      <S.ContainerTools>
        <G.StyledParagraph $size="24px" as="h3">
          Front end <span>tools</span>
        </G.StyledParagraph>
        <S.WrapperTools>
          {frontEndTools
            .slice(0, visibleCountFront.count)
            .map(({ name, Icon }) => (
              <S.ToolsContent key={name}>
                <G.StyledParagraph>
                  <span>
                    {<Icon />}
                    {name}
                  </span>
                </G.StyledParagraph>
              </S.ToolsContent>
            ))}
          <button
            onClick={() =>
              visibleCountFront.active
                ? seeLess(ToolsContentName.frontend)
                : showMore(ToolsContentName.frontend)
            }
          >
            {visibleCountFront.active ? "View less..." : "View more..."}
          </button>
        </S.WrapperTools>
      </S.ContainerTools>

      <S.ContainerTools>
        <G.StyledParagraph $size="24px" as="h3">
          Back end <span>tools</span>
        </G.StyledParagraph>
        <S.WrapperTools>
          {backEndTools
            .slice(0, visibleCountBackend.count)
            .map(({ name, Icon }) => (
              <S.ToolsContent key={name}>
                <G.StyledParagraph>
                  <span>
                    {<Icon />}
                    {name}
                  </span>
                </G.StyledParagraph>
              </S.ToolsContent>
            ))}
          <button
            onClick={() =>
              visibleCountBackend.active
                ? seeLess(ToolsContentName.backend)
                : showMore(ToolsContentName.backend)
            }
          >
            {visibleCountBackend.active ? "View less..." : "View more..."}
          </button>
        </S.WrapperTools>
      </S.ContainerTools>

      <S.ContainerTools>
        <G.StyledParagraph $size="24px" as="h3">
          Database <span>tools</span>
        </G.StyledParagraph>
        <S.WrapperTools>
          {databaseTools
            .slice(0, visibleCountDatabase.count)
            .map(({ name, Icon }) => (
              <S.ToolsContent key={name}>
                <G.StyledParagraph>
                  <span>
                    {<Icon />}
                    {name}
                  </span>
                </G.StyledParagraph>
              </S.ToolsContent>
            ))}
          <button
            onClick={() =>
              visibleCountDatabase.active
                ? seeLess(ToolsContentName.database)
                : showMore(ToolsContentName.database)
            }
          >
            {visibleCountDatabase.active ? "View less..." : "View more..."}
          </button>
        </S.WrapperTools>
      </S.ContainerTools>
    </G.Container>
  );
};

export default StackSession;
