export const fetchJson = (url) => {
  return fetch(url).then((res) =>
    res.json().then((json) => {
      return json;
    })
  );
};
