import styled from 'styled-components'
import { colors } from '../../styles'

export const Wrapper = styled.section`
  margin-top: 80px;
`

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;

  img {
    width: 500px;
    height: 400px;
    object-fit: cover;
    object-position: 0px -25px;
    border-radius: 24px;
  }
`

export const Description = styled.div`
  position: absolute;
  top: 50%;
  left: 150px;
  transform: translateY(-50%);
  width: 100%;
  max-width: 600px;
  background: radial-gradient(
    circle,
    rgba(2, 4, 16, 1) 0%,
    rgba(12, 4, 16, 0.22) 77%,
    rgba(255, 255, 255, 0) 100%
  );
  padding: 16px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`

export const ActionBar = styled.div`
  display: flex;
  justify-content: flex-end;

  a {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: ${colors.text.third};
    border-radius: 16px;
    border: 1px solid ${colors.text.third};
    padding: 8px 16px;
  }
`
