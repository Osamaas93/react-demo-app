import styled from "styled-components";

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 2rem;
  padding-top: 5px;
`;

export default function TopicsList({ children }) {
  return <CardGrid>{children}</CardGrid>;
}
