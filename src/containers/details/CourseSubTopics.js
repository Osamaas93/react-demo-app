import styled from "@emotion/styled";

const ListContainer = styled.div`
  width: 60%;
  margin: auto;
  padding-right: calc(350px + 10px);
  box-sizing: border-box;
  position: relative;
  z-index: 0;

  ul {
    background-color: var(--bgDefault);
    list-style-type: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 18px;
    border: 1px solid var(--linesColor);
    border-radius: 5px;
    margin-top: 25px;
  }

  li {
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--linesColor);
    padding: 0px 10px 18px 25px;
    color: var(--bodyText);
  }

  li p {
    font-size: 1.1rem;
    margin: 0;
  }
`;

const ListTitle = styled.div`
  margin-top: 10px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const CheckMark = styled.span`
  margin-right: 10px;
  color: #28a745;
  flex-shrink: 0;
  font-size: 1.3rem;
`;

export default function CourseSubTopics({ subtopics, topic }) {
  return (
    <ListContainer>
      <ul className="listSubTopic">
        <li>
          <ListTitle>{topic} Sub Topics</ListTitle>
        </li>
        {subtopics.map((subTopic, index) => (
          <li key={index}>
            <CheckMark>
              <ion-icon name="checkmark-circle-outline"></ion-icon>
            </CheckMark>
            <p>{subTopic}</p>
          </li>
        ))}
      </ul>
    </ListContainer>
  );
}
