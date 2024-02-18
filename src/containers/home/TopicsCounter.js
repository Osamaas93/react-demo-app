import styled from "styled-components";

const TopicsFound = styled.h2`
  margin-block: 15px;
  color: var(--bodyText);
`;

export default function TopicsCounter({ counter }) {
  return <TopicsFound>"{counter}" Web Topics Found</TopicsFound>;
}
