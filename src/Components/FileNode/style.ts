import styled from "styled-components";

export const ContainerNode = styled.div`
  width: 220px;
  height: 140px;
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

  > .Container {
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

    > .ContainerContent {
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      > p {
        color: #fff;
        font-size: .8em
      }

      > label {
        background-color: #373b42;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        font-size: .8em;
        color: #fff;
        margin: 13px 0px;
      }

      > small {
        color: #888;
        font-size: .75em; 
      }
    }
  }

  > .HandleOption {
    width: 10px;
    border-radius: 0px 5px 5px 0px;
    border: none;
    height: 140px;
    right: -10px;
    background-color: #0c75ef;

    :hover {
      background-color: #0c75ef;
    }
  }
`;