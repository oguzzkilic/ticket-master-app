import config from "../config";

export default {
  fetchByKeyword(payload) {
    return fetch(
      `${config.baseUrl}/${config.eventPath}?apikey=${
        config.apiKey
      }&keyword=${payload}`
    ).then(res => res.json());
  },
  fetchByPage(payload) {
    return fetch(
      `${config.baseUrl}/${config.eventPath}?apikey=${config.apiKey}&keyword=${
        payload.k
      }&page=${payload.number}&size=20`
    ).then(res => res.json());
  }
};
