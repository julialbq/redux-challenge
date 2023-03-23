import styled from "styled-components";

export const StyledBox = styled.div`
  width: 300px;
  margin-top: ${(props) => (props.sidebar ? "10px" : "0")};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border: 1px solid ${(props) => props.theme.border};
  border-radius: 8px;

  @media (min-width: 768px) {
    width: ${(props) => (props.sidebar ? "30vw" : "60vw")};
    padding: ${(props) => (props.sidebar ? "12px" : "20px")};
  }
`;
