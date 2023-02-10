import { describe, it, expect, vi } from "vitest";
import ProjectPosts from "./ProjectPosts.vue";
import { mount, flushPromises } from "@vue/test-utils";

describe("Posts", () => {
  vi.mock("@/services/api/posts", () => {
    return {
      getAllPosts: () =>
        Promise.resolve([
          {
            title: "Post Title A B C D ",
            id: 1,
            body: "Lorem Ipsum 1",
          },
        ]),
    };
  });

  it("renders the data and truncates the posts texts", async () => {
    const wrapper = mount(ProjectPosts);
    await flushPromises();
    expect(wrapper.text()).toContain("Post Title A B C");
    expect(wrapper.text()).not.toContain("Post Title A B C D");
    expect(wrapper.text()).toContain("Lorem Ipsum 1");
  });
  //TODO: test the error and loading states;
});
