import support from "./index";

const BASE_STATE = {
  isOpen: false,
  isFetching: false,
  key: null,
  markdown: null,
  errorMessage: null
};

const TEST_KEY = "test";

describe("support reducer", () => {
  it("should handle initial state", () => {
    expect(support(undefined, {})).toEqual(BASE_STATE);
  });

  it("should handle SUPPORT_ITEM_REQUEST", () => {
    expect(
      support(BASE_STATE, { type: "SUPPORT_ITEM_REQUEST", key: TEST_KEY })
    ).toEqual({
      isOpen: true,
      isFetching: true,
      key: null,
      markdown: null,
      errorMessage: null
    });
  });

  it("should handle SUPPORT_ITEM_SUCCESS", () => {
    expect(
      support(
        {
          isOpen: true,
          isFetching: true,
          key: null,
          markdown: null,
          errorMessage: null
        },
        {
          type: "SUPPORT_ITEM_SUCCESS",
          item: { markdown: "# test", key: TEST_KEY }
        }
      )
    ).toEqual({
      isOpen: true,
      isFetching: false,
      key: TEST_KEY,
      markdown: "# test",
      errorMessage: null
    });
  });

  it("should handle CLOSE_SUPPORT_ITEM", () => {
    expect(support({ isOpen: true }, { type: "CLOSE_SUPPORT_ITEM" })).toEqual({
      isOpen: false
    });
  });
});
