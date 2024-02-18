import styled from "styled-components";

const StyledIcon = styled("ion-icon")`
  font-size: 1rem;
  font-weight: 700;
`;

const StyledButtons = styled.button`
  background: var(--bgDefault);
  border: 1px solid var(--linesColor);
  display: flex;
  aligh-items: center;
  border-radius: 5px;
  padding: 0.2rem 0.7rem;
  gap: 0.4rem;
  min-width: 120px;
  font-size: 0.9rem;
  color: var(--bodyText);
  font-weight: 600;
`;

export default function Button({ onClick, children, icon }) {
  return (
    <StyledButtons onClick={onClick}>
      <StyledIcon name={icon}></StyledIcon>
      {children}
    </StyledButtons>
  );
}
