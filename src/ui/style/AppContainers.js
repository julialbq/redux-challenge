import styled from "styled-components";

export const StyledAppContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-around;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledCreateQuizContainer = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
