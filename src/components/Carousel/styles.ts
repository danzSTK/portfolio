import styled, { keyframes } from 'styled-components'

type ItemProps = {
  $length: number
  index: number
}

export const Wrapper = styled.ul`
  position: relative;
  display: flex;
  height: 100px;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent,
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 80%,
    transparent
  );
`

const scrollLeft = keyframes`
  to {
    left: -200px;
  }
`

export const Item = styled.li<ItemProps>`
  display: flex;
  align-items: center;
  height: 100px;
  border-radius: 6px;
  position: absolute;
  left: max(calc(100px * ${({ $length }) => $length}), 100%);
  animation: ${scrollLeft} 20s linear infinite;
  animation-delay: calc(
      20s / ${({ $length }) => $length} *
      (${({ $length }) => $length} - ${({ index }) => index}) * -1
  );
`
