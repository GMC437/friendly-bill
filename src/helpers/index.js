export const fetchJson = (url) => {
  return fetch(url).then((res) =>
    res.json().then((json) => {
      return json;
    })
  );
};

export const formatDate = (date) => {
  const initial = date.split("-");
  return [initial[2], initial[1], initial[0]].join("/");
};
