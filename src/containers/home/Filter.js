export function filterTopics(topics, filterBy) {
  return topics.filter((topic) => {
    if (filterBy) {
      return topic.category === filterBy;
    }
    return true;
  });
}
