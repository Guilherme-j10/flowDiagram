import styled from "styled-components";

export const ContainerGlobal = styled.div`
  width: 220px;
  height: 90px;
  background-color: #21262d;
  /* border-left: solid 1px #0c75ef;
  border-top: solid 1px #0c75ef;
  border-bottom: solid 1px #0c75ef; */
  display: grid;
  grid-template-columns: 1fr, 30px;
  border-radius: 3px;

  > .HandleOptionInput {
    width: 10px;
    height: 50px;
    left: -10px;
    background-color: #0c75ef;
    border-radius: 50px 0px 0px 50px;
    border: none;
  }

  > .HandleOptionOutPut {
    width: 10px;
    border-radius: 0px 5px 5px 0px;
    border: none;
    height: 90px;
    right: -10px;
    background-color: #0c75ef;
  }

  > .ContainerContent {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > .Header {
      width: 100%;
      padding: 7px;
      border-bottom: solid 1px #5555552d;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > .RightSide {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        > .CluterElipse {
          margin-right: 5px;

          > svg {
            color: #fff;
            font-size: .7em;
          }
        }

        > h1 {
          color: #fff;
          font-size: .8em;
        }
      }

      > svg {
        color: #fff;
        font-size: .8em;
      }
    }

    > .Content {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0px;

      > input {
        color: #fff;
        background-color: red;
        width: 100%;
        text-align: center;
        background-color: transparent;
        font-size: 1.5em;
        font-weight: bold;
      }
    }
  }
`;