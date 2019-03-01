import Vue from "vue";
import { expect } from "chai";
import List from "@/components/List";

describe("List.vue", () => {
  let wrapper = null;

  beforeEach(() => {
    const container = document.createElement("div");
    const ListComponent = Vue.extend(List);
    wrapper = new ListComponent({
      propsData: {
        events: [
          {
            id: "1atZA4peoAoZeuk",
            name: "Test Event",
            dates: { start: { localDate: "2019-10-10" } },
            images: [
              {
                ratio: "16_9",
                url:
                  "https://s1.ticketm.net/dam/a/100/0af87ad1-b28f-43ef-a855-7220cee08100_923171_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                width: 2048,
                height: 1152,
                fallback: false
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/foo.jpg",
                width: 100,
                height: 56,
                fallback: false
              }
            ],
            _embedded: {
              venues: [
                {
                  city: {
                    name: "İstanbul"
                  },
                  country: {
                    name: "Turkey"
                  }
                }
              ]
            }
          }
        ]
      }
    });

    wrapper.$mount(container);
  });

  it("should list events", () => {
    expect(wrapper.events.length).to.equal(1);
    expect(wrapper.$el.querySelectorAll("tr").length).to.equal(1);
    expect(wrapper.$el.querySelector("td").firstChild.tagName).to.equal("IMG");
    expect(wrapper.$el.querySelector("td").firstChild.src).to.contain(
      "foo.jpg"
    );
  });
});
