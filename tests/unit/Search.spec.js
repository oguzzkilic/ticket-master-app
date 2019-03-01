import Vue from "vue";
import { expect } from "chai";
import sinon from "sinon";
import Search from "@/components/Search";

describe("Search.vue", () => {
  let wrapper = null;

  beforeEach(() => {
    const container = document.createElement("div");
    const SearchComponent = Vue.extend(Search);
    wrapper = new SearchComponent({});
    wrapper.$mount(container);
  });

  it("should be instantiated", () => {
    expect(wrapper.keyword).to.equal("");
    expect(wrapper.$el.querySelector(".input").tagName).to.equal("INPUT");
    expect(wrapper.$el.querySelector(".button").tagName).to.equal("BUTTON");
  });

  it("should emit event button is clicked", () => {
    const spy = sinon.spy(wrapper, "$emit");
    wrapper.$el.querySelector(".button").click();

    const [eventName, keyword] = spy.args[0];
    expect(eventName).to.equal("SearchRequested");
    expect(keyword).to.equal("");

    expect(spy.called).to.be.true;
  });

  it("should update keyword when input value changed", () => {
    const input = wrapper.$el.querySelector(".input");
    input.value = "testEvent";
    input.dispatchEvent(new Event("input"));

    expect(wrapper.keyword).to.equal("testEvent");
  });
});
