import styled from "styled-components";

export const StyledListItem = styled.li`
  width: ${(props) => props.sidebarItem && "30vw"};
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
`;
