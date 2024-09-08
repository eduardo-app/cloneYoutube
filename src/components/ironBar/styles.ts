import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 0 10px 0;
  padding: 10px 0 10px 0;
  position: sticky;
  top: 55px;
  background-color: white;
  overflow-x: hidden;
`;
export const ChipTag = styled.div`
  width: auto;
  padding: 5px 10px 5px 10px;
  margin: 0 10px 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #bbbb;
  }
`;

export const ChipContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  position: sticky;
  left: 0;
`;

export const ArrowGradientL = styled.div`
  width: 100px;
  height: 55px;
  display: flex;
  justify-content: left;
  align-items: center;
  background-image: linear-gradient(90deg, #ffffffff 0%, #ffffff00 100%);
`;

export const ArrowGradientR = styled.div`
  width: 100px;
  height: 55px;
  display: flex;
  justify-content: right;
  align-items: center;
  background-image: linear-gradient(270deg, #ffffffff 0%, #ffffff00 100%);
`;

export const ButtonContainer = styled.div`
  border-radius: 45px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #bbbb;
  }
`;

export const ButtonIcon = styled.img`
  width: 40px;
`;

export const ArrowContainerL = styled.div<{scroll : number}>`
  display: ${({scroll}) => scroll > 0? "flex" : "none"};
  justify-content: left;
  align-items: center;
  position: sticky;
  left: 0;
  z-index: 1;
`;

export const ArrowContainerR = styled.div<{scroll : number}>`
  display: ${({scroll}) => scroll < 1600? "flex" : "none"};
  justify-content: right;
  align-items: center;
  position: sticky;
  right: 0;
  z-index: 1;
`;

export const ArrowBox = styled.div`
  background-color: white;
`;
