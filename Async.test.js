import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  //
  test("renders posts if request succeeds", async () => {
    //   Overwrites fetch function in component
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      // json object that returns an array
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);
    // if list items are rendered then the posts were rendered: list items are a role and there are many items so we findAllByRole
    // getAllByRole doesn't process the time it takes to get list items so we use find because it is a promise.
    const listItemElements = await screen.findAllByRole("listitem");
    // Need to check that array is not empty (has a length is not 0)
    expect(listItemElements).not.toHaveLength(0);
  });
});
