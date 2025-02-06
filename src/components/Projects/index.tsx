import { IoIosArrowForward } from 'react-icons/io'
import { Container, StyledParagraph } from '../../styles'
import project1Background from './../../assets/images/spotify_project_background.png'
import { ActionBar, Content, Description, Wrapper } from './styles'

const Projects = () => {
  return (
    <Container>
      <Wrapper>
        <StyledParagraph $size="40px" as="h2">
          Selected <span>Works</span>
        </StyledParagraph>
        <Content>
          <Description>
            <StyledParagraph $size="24px" as="h3">
              Spotify <span>project</span>
            </StyledParagraph>
            <br />
            <StyledParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              facere soluta similique ipsam tempora ipsum reprehenderit ratione
              earum quidem error praesentium beatae velit perspiciatis in
              labore, voluptates sapiente ullam maiores.
            </StyledParagraph>
            <ActionBar>
              <a href="" target="_blank">
                View work <IoIosArrowForward />
              </a>
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
