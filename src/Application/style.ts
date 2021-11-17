import styled from "styled-components";

export const ContainerAplication = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #0d1117;
  display: grid;
  grid-template-columns: 250px 1fr;

  > .SpaceFlow {
    width: 100%;
    height: 100%;
    background-image: radial-gradient(#161b22 10%, transparent 10%), radial-gradient(#161b22 10%, transparent 10%);
    background-color: #0d1117;
    background-position: 0px 0px, 0px 0px;
    background-size: 10px 10px;
  }
`;