import styled from "styled-components";

const StyledSingleText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledMultiText = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export default function TrimmedText({ maxLines, children }) {
  return (
    <>
      {maxLines === 1 ? (
        <StyledSingleText>{children}</StyledSingleText>
      ) : (
        <StyledMultiText>{children}</StyledMultiText>
      )}{" "}
    </>
  );
}
