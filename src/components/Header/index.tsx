import * as S from '../Header/styles'

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
            <S.Path href="#home">Home</S.Path>
          </li>
          <li>
            <S.Path href="#about">Sobre mim</S.Path>
          </li>
          <li>
            <S.Path href="#projects">Projetos</S.Path>
          </li>
        </S.Links>
      </nav>
    </S.Header>
  )
}

export default Header
