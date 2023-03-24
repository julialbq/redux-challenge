import styled from "styled-components";

export const StyledTitleLarge = styled.h1`
  font-family: "Red Hat Display";
  font-weight: 900;
  font-size: 32px;
  color: var(--primary-white);

  @media (min-width: 768px) {
    font-size: 44px;
  }
`;

export const StyledTitleSmall = styled.h2`
  font-family: "Red Hat Display";
  font-weight: 700;
  font-size: 20px;
  color: var(--primary-black);

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const StyledTitleXSmall = styled.h3`
  font-family: "Red Hat Display";
  font-weight: 700;
  font-size: 16px;
  color: var(--primary-black);

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const StyledTextMedium = styled.p`
  width: 100px;
  font-family: "Red Hat Text";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: var(--primary-black);

  @media (min-width: 768px) {
    width: 120px;
  }
`;
