import * as S from './styles'

const Header = () => {
  return (
    <S.Header>
      <S.Logo>
        Daniel Félix
      </S.Logo>
      <nav>
        <S.Links>
          <li>
            <S.Path href="/">Home</S.Path>
          </li>
          <li>
            <S.Path href="#sobre">Sobre mim</S.Path>
          </li>
          <li>
            <S.Path href="/">Projetos</S.Path>
          </li>
          <li>
            <S.Path href="/">Contato</S.Path>
          </li>
        </S.Links>
      </nav>
    </S.Header>
  )
}

export default Header
