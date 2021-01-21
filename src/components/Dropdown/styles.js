import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export const User = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  cursor: pointer;
`

export const UserImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`

export const Menu = styled.div`
  position: absolute;
  top: 80px;
  right: 30px;
  background-color: #fff;
  width: 200px;
  height: 300px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  transition: 0.2s ease-in;
  opacity: ${({ isopen }) => (isopen ? '1' : '0')};
  visibility: ${({ isopen }) => (isopen ? 'visible' : 'hidden')};

  &::before {
    content: '';
    background-color: #fff;
    width: 20px;
    height: 20px;
    position: absolute;
    top: -3px;
    right: 13px;
    transform: rotate(45deg);
  }
`

export const MenuLink = styled.a`
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 15px;
  align-self: start;
  padding-left: 20px;
  transition: 0.2s ease-in;

  &:hover {
    transform: scale(1.03);
    font-weight: normal;
  }
`
