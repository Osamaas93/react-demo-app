import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--linesColor);
  border-radius: 10px;
  background-color: var(--bgDefault);
  margin-top: 25px;
`;

const SearchIcon = styled.div`
  padding: 10px 10px 7px 10px;
  color: var(--bodyText);
`;

const InputField = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-size: 16px;
  color: var(--bodyText);
`;

const OptionsList = styled.div`
  display: flex;
  margin-right: 5px;
`;

const SortAndFilter = styled.div`
  border: none;
  font-size: 0.8rem;
  background-color: var(--bgDefault);
  border-left: 1px solid var(--linesColor);
  padding-block: 5px;
`;
const SortBy = styled(SortAndFilter)``;
const FilterBy = styled(SortAndFilter)``;

const Label = styled.label`
  font-size: 0.8rem;
  display: block;
  padding: 0px 0px 0px 10px;
  color: var(--bodyText);
`;

const Select = styled.select`
  border: none;
  font-weight: 700;
  font-size: 0.9rem;
  width: 160px;
  color: var(--bodyText);
  background-color: var(--bgDefault);
  padding: 0px 0px 0px 5px;
  margin-right: 5px;
`;

export default function SearchBar({
  searchValue,
  onSearch,
  sortValue,
  onSort,
  filterValue,
  onFilter,
  filterOptions,
}) {
  return (
    <SearchContainer>
      <SearchIcon>
        <ion-icon name="search-outline"></ion-icon>
      </SearchIcon>

      <InputField
        type="text"
        value={searchValue}
        placeholder="Search the website..."
        onChange={(event) => onSearch(event.target.value)}
      />

      <OptionsList>
        <SortBy>
          <Label>Sort By:</Label>
          <Select
            value={sortValue}
            onChange={(event) => onSort(event.target.value)}
          >
            <option value="default">Default</option>
            <option value="topic">Topic</option>
            <option value="author">Author</option>
          </Select>
        </SortBy>
        <FilterBy>
          <Label>Filter By:</Label>
          <Select
            value={filterValue}
            onChange={(event) => onFilter(event.target.value)}
          >
            <option value="default">Default</option>
            {filterOptions &&
              filterOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
          </Select>
        </FilterBy>
      </OptionsList>
    </SearchContainer>
  );
}
