import React, { useState } from 'react'
import { Container, User, UserImage, Menu, MenuLink } from './styles'

const data = ['Home', 'About', 'Blog', 'Products', 'Services']

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
      <User onClick={() => setIsOpen(() => !isOpen)}>
        <UserImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" />
      </User>
      <Menu isopen={isOpen}>
        {data.map((item, index) => (
          <MenuLink onClick={() => setIsOpen(() => !isOpen)} key={index} to="/">
            {item}
          </MenuLink>
        ))}
      </Menu>
    </Container>
  )
}

export default Dropdown
