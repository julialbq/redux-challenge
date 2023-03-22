import styled from "styled-components";

export const StyledOutterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: baseline;
    justify-content: space-around;
  }
`;

export const StyledCreateQuizContainer = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
