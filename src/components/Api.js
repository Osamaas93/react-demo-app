

export const fetchTopics = (searchParams) => {
  const url = `https://tap-web-1.herokuapp.com/topics/list?${searchParams}`;

  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch topics: ${res.statusText}`);
      }
      return res.json();
    })
    .then((result) => {

      return result;
    })
    .finally(() => {
    });
};
