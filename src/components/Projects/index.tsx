import { IoIosArrowForward, IoLogoJavascript } from 'react-icons/io'
import { Container, StyledParagraph } from '../../styles'
import project1Background from './../../assets/images/teste.png'
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita facere soluta similique ipsam tempora ipsum
                reprehenderit ratione
                <span>
                  earum quidem error praesentium beatae velit perspiciatis in
                  labore, voluptates sapiente ullam maiores.
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
                <a href="" target="_blank">
                  View work <IoIosArrowForward />
                </a>
              </PathContent>
            </ActionBar>
          </Description>
          <div>
            <img src={project1Background} alt="" />
          </div>
        </Content>
        <Content tabIndex={0} className="reverse">
          <Description>
            <header>
              <StyledParagraph $size="24px" as="h3">
                Spotify <span>project</span>
              </StyledParagraph>
            </header>
            <article>
              <StyledParagraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita facere soluta similique ipsam tempora ipsum
                reprehenderit ratione
                <span>
                  earum quidem error praesentium beatae velit perspiciatis in
                  labore, voluptates sapiente ullam maiores.
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
                <a href="" target="_blank">
                  View work <IoIosArrowForward />
                </a>
              </PathContent>
            </ActionBar>
          </Description>
          <div>
            <img src={project1Background} alt="" />
          </div>
        </Content>
      </Wrapper>
    </Container>
  )
}

export default Projects
