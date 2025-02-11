import * as S from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <S.Header>
      <S.Logo>
        <img src={logo} alt="" />
      </S.Logo>
      <nav>
        <S.Links>
          <li>
            <S.Path href="">Home</S.Path>
          </li>
          <li>
            <S.Path href="#sobre">Sobre mim</S.Path>
          </li>
          <li>
            <S.Path href="">Projetos</S.Path>
          </li>
        </S.Links>
      </nav>
    </S.Header>
  )
}

export default Header
