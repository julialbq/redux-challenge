import styled from "styled-components";

export const StyledListItem = styled.li`
  width: ${(props) => props.sidebarItem && "50vw"};
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: ${(props) => props.sidebarItem && "10px"};
`;
