import styled from "styled-components";

const StyledIcon = styled("ion-icon")`
  color: red;
  font-size: 1.3rem;
  z-index: 0;
  
`;

const StyledFooter = styled.footer`
  display: flex;
  aligh-items: center;
  justify-content: center;
  gap: 0.3rem;
  padding-block: 2rem;
  color: var(--bodyText);
  z-index: 0;
`;

export default function Footer() {
  return (
    <StyledFooter>
      Developed with
      <StyledIcon name="heart"></StyledIcon>
      &copy; 2024
    </StyledFooter>
  );
}
