import { useEffect, useState } from "react";
import { Container } from "../../Layout/Container";
import TopicCard from "../../components/TopicCard";
import SearchBar from "./SearchBar";
import TopicsList from "./TopicsList";
/* import { fetchTopics } from "../../components/Api"; */
import { filterTopics } from "./Filter";
import { sortTopics } from "./Sort";
import TopicsCounter from "./TopicsCounter";
import axios from "axios";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [topics, setTopics] = useState(null);
  const [uiTopics, setUiTopics] = useState(null);
  const [search, setSearch] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [categories, setCategories] = useState(null);
  const [numberOfObjects, setNumberOfObjects] = useState(0);

  useEffect(() => {
    let searchParams = new URLSearchParams();

    if (search) {
      searchParams.append("phrase", search);
    }
    const baseURL = `https://tap-web-1.herokuapp.com/topics/list?${searchParams}`;
    setLoading(true);
    axios
      .get(baseURL)
      .then((response) => {
        setTopics(response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search]);

  useEffect(() => {
    if (topics) {
      const filteredTopics = filterTopics(topics, filterBy);
      const sortedTopics = sortTopics(filteredTopics, sortBy);

      setUiTopics(sortedTopics);

      let cat = new Set(topics.map((topic) => topic.category));
      setCategories([...cat]);
      setNumberOfObjects(topics.length);
    }
  }, [topics, sortBy, filterBy]);

  useEffect(() => {
    if (uiTopics) {
      let countObjects = uiTopics.length;
      setNumberOfObjects(countObjects);
    }
  }, [uiTopics]);

  return (
    <Container>
      <SearchBar
        searchValue={search}
        onSearch={setSearch}
        sortValue={sortBy}
        onSort={setSortBy}
        filterValue={filterBy}
        onFilter={setFilterBy}
        filterOptions={categories}
      />
      <TopicsCounter counter={numberOfObjects} />
      <TopicsList>
        {loading ? (
          <div>Loading</div>
        ) : (
          uiTopics?.map((topic) => (
            <TopicCard
              key={topic.id}
              id={topic.id}
              topic={topic.topic}
              category={topic.category}
              image={topic.image}
              rating={topic.rating}
              author={topic.name}
            />
          ))
        )}
      </TopicsList>
    </Container>
  );
}
