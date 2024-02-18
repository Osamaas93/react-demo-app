export function sortTopics(topics, sortBy) {
  return topics.sort((a, b) => {
    switch (sortBy) {
      case "author":
        return a["name"] > b["name"] ? 1 : -1;

      case "topic":
        return a["topic"] > b["topic"] ? 1 : -1;

      default:
        return 0;
    }
  });
}
