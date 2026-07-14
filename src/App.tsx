import './App.css'
import {Outlet} from "react-router";
import styled from "styled-components";
import {Navbar} from "./components/Navbar.tsx";

function App() {

  return (
      <Container>
        <Navbar />
        <Outlet />
      </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-flow: row nowrap;
  gap: 20px;
  background: #222222;
  padding: 40px;
`

export default App
