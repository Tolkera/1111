import { describe, it, expect, vi } from "vitest";
import ProjectPosts from "./ProjectPosts.vue";
import { mount, flushPromises } from "@vue/test-utils";
import PostsService from "@/services/api/posts";

const mockedPosts = [
  {
    title: "Post Title A B C D ",
    id: 1,
    body: "Lorem Ipsum 1",
  },
];

describe("Posts", () => {
  it("renders the loading component by default", async () => {
    const wrapper = mount(ProjectPosts);
    const progressBar = wrapper.find('div[role="progressbar"]');
    expect(progressBar).toBeTruthy();
  });

  it("renders the data and truncates the posts texts", async () => {
    vi.spyOn(PostsService, "getAllPosts").mockResolvedValueOnce(mockedPosts);
    const wrapper = mount(ProjectPosts);
    await flushPromises();
    expect(wrapper.text()).toContain("Post Title A B C");
    expect(wrapper.text()).not.toContain("Post Title A B C D");
    expect(wrapper.text()).toContain("Lorem Ipsum 1");
  });

  it("shows an error if an error is thrown", async () => {
    vi.spyOn(PostsService, "getAllPosts").mockRejectedValue("Some error");
    const wrapper = mount(ProjectPosts);
    await flushPromises();
    expect(wrapper.text()).toContain("We got an error fetching the posts");
  });
});
