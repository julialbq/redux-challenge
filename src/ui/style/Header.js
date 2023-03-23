import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100vw;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 10px;

  background-color: ${(props) => props.theme.secondary};
  border-bottom: 1px solid ${(props) => props.theme.border};
`;
