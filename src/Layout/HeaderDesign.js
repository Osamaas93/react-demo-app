import styled from "styled-components";
import HeaderBannerText from "./HeaderBannerText";

const SecondartAndPrimary = styled.div`
  position: absolute;
  width: 100%;
  height: 130px;
`;

const HeaderDesignBox = styled.div`
  position: relative;
  background-color: var(--bgDefault);
  height: 115px;
`;
const HeaderDesignPrimary = styled(SecondartAndPrimary)`
  clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 50%);
  background: linear-gradient(
    to right,
    var(--brandPrimary),
    var(--brandSecondary) 98%
  );
  z-index: 2;
`;
const HeaderDesignSecondary = styled(SecondartAndPrimary)`
  clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 0%);
  background: linear-gradient(
    to right,
    var(--brandPrimary),
    var(--brandSecondary) 3%
  );
`;

export default function HeaderDesign() {
  return (
    <HeaderDesignBox>
      <HeaderDesignPrimary></HeaderDesignPrimary>
      <HeaderDesignSecondary></HeaderDesignSecondary>
      <HeaderBannerText />
    </HeaderDesignBox>
  );
}
