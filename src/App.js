import styled from 'styled-components'
import Dropdown from './components/Dropdown'

// app container
const Application = styled.div`
  min-width: 100vw;
  min-height: 100vh;
`

export default function App() {
  return (
    <>
      <Application>
        <Dropdown />
      </Application>
    </>
  )
}
