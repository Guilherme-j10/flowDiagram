import styled from 'styled-components';

export const ContainerContent = styled.div`
  width: 220px;
  height: 120px;
  background-color: #21262d;
  /* border-left: solid 1px #0c75ef;
  border-top: solid 1px #0c75ef;
  border-bottom: solid 1px #0c75ef; */
  display: grid;
  grid-template-columns: 1fr, 30px;
  border-radius: 3px;

  > .HandleOptionInput {
    height: 50px;
    left: -6px;
    background-color: #0c75ef;
    border-radius: 50px 0px 0px 50px;
    border: none;
  }

  > .HandleOptionOutPut {
    width: 10px;
    border-radius: 0px 5px 5px 0px;
    border: none;
    height: 120px;
    right: -9px;
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
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px 0px;

      > select {
        width: 90%;
        background-color: #9999992d;
        margin-bottom: 10px;
        padding: 5px;
        color: #fff;

        > option {
          color: #fff;
          background-color: #333;
        }
      }
    }
  }
`;