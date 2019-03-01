import services from "../services/service";

const getDefaultState = () => {
  return {
    events: [],
    pagination: [],
    eventDetail: [],
    searchKeyword: "",
    status: "empty"
  };
};

const state = getDefaultState();

const mutations = {
  resetEvents(state) {
    Object.assign(state, getDefaultState());
  },
  setEvents(state, events) {
    if (events && events._embedded.events) {
      state.events = events._embedded.events;
      state.status = "loaded";
    }
  },
  setPagination(state, pagination) {
    let links = pagination._links;
    let page = pagination.page;

    if (pagination) {
      state.pagination = { ...links, ...page };
      state.status = "loaded";
    }
  },
  setEventDetail(state, eventId) {
    const events = state.events;
    const detail = events.filter(item => {
      return item.id === eventId;
    });

    state.eventDetail = detail;
  },
  setKeyword(state, keyword) {
    state.keyword = keyword;
  }
};

const actions = {
  resetSearchResults({ commit }) {
    commit("resetEvents");
  },
  fetchByKeyword(context, payload) {
    return services.fetchByKeyword(payload).then(res => {
      context.commit("setEvents", res);
      context.commit("setPagination", res);
      context.commit("setKeyword", payload);
    });
  },
  fetchByPage(context, payload) {
    return services.fetchByPage(payload).then(res => {
      context.commit("setEvents", res);
      context.commit("setPagination", res);
    });
  },
  getEventDetail(context, eventId) {
    context.commit("setEventDetail", eventId);
  }
};

export default {
  state,
  mutations,
  getters: {},
  actions
};
