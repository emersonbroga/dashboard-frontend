export const doGetRequest = path => {
  return fetch(path).then(response => response.json());
};
