import styled from "styled-components";

const StyledHeaderBannerText = styled.div`
  padding-left: 25px;
  padding-top: 50px;
  font-size: 1rem;
  z-index: 3;
`;
const HeaderText = styled.div`
  display: grid;
  justify-content: center;
`;
const WelcomeHeader = styled.div`
  color: var(--brandSecondary);
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0%;
`;

const HeaderParagraph = styled.div`
  color: var(--bodyText);
  font-size: 1rem;
  margin: 0%;
`;
export default function HeaderBannerText() {
  return (
    <StyledHeaderBannerText>
      <HeaderText>
        <WelcomeHeader>Welcome to our website!</WelcomeHeader>
        <HeaderParagraph>
          We have a new design that's fresh, modern and easy to use
        </HeaderParagraph>
      </HeaderText>
    </StyledHeaderBannerText>
  );
}
