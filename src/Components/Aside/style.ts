import styled from "styled-components";

export const ContainerGlobal = styled.div`
  width: 100%;
  height: 100%;
  background-color: #161b22;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  > .ContainerHeader {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    padding-top: 20px;

    > h1 {
      color: #fff;
      font-size: 1em;
    }
  }
`;