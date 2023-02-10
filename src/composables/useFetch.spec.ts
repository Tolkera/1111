import { describe, it, expect, vi } from "vitest";
import ProjectPosts from "@/components/posts/ProjectPosts.vue";
import PostsService from "@/services/api/posts";
import { useFetch } from "@/composables/useFetch";

const mockedPosts = [
  {
    title: "Post Title A B C D ",
    id: 1,
    body: "Lorem Ipsum 1",
  },
];

describe("useFetch", () => {
  it("returns data", async () => {
    vi.spyOn(PostsService, "getAllPosts").mockResolvedValueOnce(mockedPosts);
    const { getData, data, loading } = useFetch(PostsService.getAllPosts, []);
    await getData();
    expect(data.value).toEqual(mockedPosts);
    expect(loading.value).toEqual(false);
  });
  it("returns loading state by default", async () => {
    vi.spyOn(PostsService, "getAllPosts").mockResolvedValueOnce([]);
    const { loading } = useFetch(PostsService.getAllPosts, []);
    expect(loading.value).toEqual(true);
  });
  it("returns error if it is thrown", async () => {
    vi.spyOn(PostsService, "getAllPosts").mockRejectedValue(new Error());
    const { getData, error } = useFetch(PostsService.getAllPosts, []);
    await getData();
    expect(error.value).toBeTruthy();
  });

  it("calls the correct service", async () => {
    vi.spyOn(PostsService, "getAllPosts").mockRejectedValue(new Error());
    const { getData } = useFetch(PostsService.getAllPosts, []);
    await getData();
    expect(PostsService.getAllPosts).toHaveBeenCalled();
  });
});
